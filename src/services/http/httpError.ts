import type { HttpErrorPayload } from './httpClient.types'

export class HttpError extends Error {
  readonly status?: number
  readonly code: string
  readonly retryable: boolean
  readonly payload?: HttpErrorPayload
  readonly requestId?: string

  constructor(params: {
    message: string
    status?: number
    code?: string
    retryable?: boolean
    payload?: HttpErrorPayload
    requestId?: string
  }) {
    super(params.message)

    this.name = 'HttpError'
    this.status = params.status
    this.code = params.code ?? 'UNKNOWN_ERROR'
    this.retryable = params.retryable ?? false
    this.payload = params.payload
    this.requestId = params.requestId
  }
}

export function isHttpError(error: unknown): error is HttpError {
  return error instanceof HttpError
}

export function isRetryableHttpError(error: unknown): boolean {
  if (!isHttpError(error)) {
    return true
  }

  if (error.retryable) {
    return true
  }

  if (!error.status) {
    return true
  }

  return error.status === 408 || error.status === 429 || error.status >= 500
}
