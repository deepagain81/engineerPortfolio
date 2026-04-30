import { isApiResponse } from "./apiResponse.guard";
import type { ApiResponse } from "./apiResponse.types";
import type { HttpRequestOptions } from "./httpClient.types";
import { HttpError, isRetryableHttpError } from "./httpError";
import { parseJsonResponse } from "./parseJson";
import { withRetry } from "./retry";
import { createTimeoutSignal } from "./timeout";

const DEFAULT_TIMEOUT_MS = 20_000;

export async function httpRequest<TData, TBody = unknown>(
  options: HttpRequestOptions<TBody>
): Promise<ApiResponse<TData>> {
  const execute = () => executeHttpRequest<TData, TBody>(options);

  if (!options.retry) {
    return execute();
  }

  return withRetry(execute, {
    ...options.retry,
    shouldRetry: options.retry.shouldRetry ?? isRetryableHttpError,
  });
}

async function executeHttpRequest<TData, TBody = unknown>(
  options: HttpRequestOptions<TBody>
): Promise<ApiResponse<TData>> {
  const {
    url,
    method = "GET",
    body,
    headers,
    timeoutMs = DEFAULT_TIMEOUT_MS,
    signal,
  } = options;

  const response = await fetchJson({
    url,
    method,
    body,
    headers,
    timeoutMs,
    signal,
  });
  const parsed = await parseJsonResponse<unknown>(response);

  if (parsed.parseError) {
    throw new HttpError({
      message: "Server returned invalid JSON.",
      status: response.status,
      code: "INVALID_JSON_RESPONSE",
      retryable: false,
      payload: {
        details: {
          parseError: parsed.parseError.message,
          rawText: parsed.rawText,
        },
      },
    });
  }

  if (parsed.data === null) {
    throw new HttpError({
      message: "Empty response received from server.",
      status: response.status,
      code: "EMPTY_RESPONSE",
      retryable: false,
    });
  }

  if (!isApiResponse<TData>(parsed.data)) {
    throw new HttpError({
      message: `Invalid API response envelope (status ${response.status}).`,
      status: response.status,
      code: "INVALID_API_RESPONSE",
      retryable: false,
      payload: {
        details: {
          rawText: parsed.rawText,
        },
      },
    });
  }

  return parsed.data;
}

async function fetchJson<TBody = unknown>(params: {
  url: string;
  method: string;
  body?: TBody;
  headers?: HeadersInit;
  timeoutMs: number;
  signal?: AbortSignal;
}): Promise<Response> {
  const requestSignal = params.signal ?? createTimeoutSignal(params.timeoutMs);

  try {
    return await fetch(params.url, {
      method: params.method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...params.headers,
      },
      body: params.body === undefined ? undefined : JSON.stringify(params.body),
      signal: requestSignal,
    });
  } catch (error) {
    throw normalizeFetchError(error);
  }
}

function normalizeFetchError(error: unknown): HttpError {
  const errorName = error instanceof Error ? error.name : undefined;

  if (errorName === "AbortError" || errorName === "TimeoutError") {
    return new HttpError({
      message: "The request timed out. Please try again.",
      code: "TIMEOUT",
      retryable: true,
    });
  }

  return new HttpError({
    message: "Network request failed. Please check your connection and try again.",
    code: "NETWORK_ERROR",
    retryable: true,
  });
}
