import type { RetryOptions } from "./httpClient.types";

export async function withRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt <= options.retries; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      const shouldRetry = options.shouldRetry?.(error) ?? false;
      const hasAttemptsLeft = attempt < options.retries;

      if (!shouldRetry || !hasAttemptsLeft) {
        throw error;
      }

      await delay(options.delayMs * (attempt + 1));
    }
  }

  throw lastError;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}