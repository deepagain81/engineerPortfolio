export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface RetryOptions {
  retries: number
  delayMs: number
  shouldRetry?: (error: unknown) => boolean
}

export interface HttpRequestOptions<TBody = unknown> {
  url: string
  method?: HttpMethod
  body?: TBody
  headers?: HeadersInit
  timeoutMs?: number
  retry?: RetryOptions
  signal?: AbortSignal
}

export interface HttpErrorPayload {
  code?: string
  message?: string
  retryable?: boolean
  details?: unknown
}
