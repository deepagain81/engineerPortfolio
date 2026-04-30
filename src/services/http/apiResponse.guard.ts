import type { ApiError, ApiResponse, ResponseMeta } from './apiResponse.types'

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function isApiError(value: unknown): value is ApiError {
  if (!isObject(value)) {
    return false
  }

  if (
    typeof value.type !== 'string' ||
    typeof value.details !== 'string' ||
    typeof value.retryable !== 'boolean'
  ) {
    return false
  }

  if (value.field !== undefined && typeof value.field !== 'string') {
    return false
  }

  return true
}

function isResponseMeta(value: unknown): value is ResponseMeta {
  if (!isObject(value)) {
    return false
  }

  if (typeof value.requestId !== 'string' || typeof value.timestamp !== 'string') {
    return false
  }

  if (value.datasetVersion !== undefined && typeof value.datasetVersion !== 'string') {
    return false
  }

  if (value.question !== undefined && typeof value.question !== 'string') {
    return false
  }

  if (value.retrievedCount !== undefined && typeof value.retrievedCount !== 'number') {
    return false
  }

  if (value.model !== undefined && typeof value.model !== 'string') {
    return false
  }

  return true
}

export function isApiResponse<T = unknown>(value: unknown): value is ApiResponse<T> {
  if (!isObject(value)) {
    return false
  }

  if (
    typeof value.ok !== 'boolean' ||
    typeof value.code !== 'string' ||
    typeof value.message !== 'string' ||
    !('data' in value) ||
    !isResponseMeta(value.meta)
  ) {
    return false
  }

  if (value.error !== null && !isApiError(value.error)) {
    return false
  }

  return true
}
