import { isHttpError } from '@/services/http'
import { httpRequest } from '@/services/http/httpClient'

import type { ChatQueryRequest, ChatQueryResponseData } from './types'

const DEFAULT_CHAT_API_URL = '/api/query'

const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL ?? DEFAULT_CHAT_API_URL

export async function requestChatReply(question: string): Promise<string> {
  const response = await httpRequest<ChatQueryResponseData, ChatQueryRequest>({
    url: CHAT_API_URL,
    method: 'POST',
    body: { question },
    timeoutMs: 20_000,
    retry: {
      retries: 1,
      delayMs: 600,
    },
  })

  if (!response.ok) {
    throw new Error(response.error?.details ?? response.message)
  }

  const answer = response.data?.answer?.trim()

  if (!answer) {
    throw new Error('The assistant returned an empty answer.')
  }

  return answer
}

export function toChatErrorMessage(error: unknown): string {
  if (isHttpError(error)) {
    if (error.code === 'TIMEOUT') {
      return 'Request timed out. Please try again.'
    }

    if (error.code === 'NETWORK_ERROR') {
      return 'Network issue detected. Please check your connection and retry.'
    }

    return error.message
  }

  if (error instanceof Error && error.message) {
    return error.message
  }

  return 'Unable to get a response right now. Please try again.'
}
