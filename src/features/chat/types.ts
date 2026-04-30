export type ChatRole = 'assistant' | 'user'

export interface ChatMessage {
  id: string
  role: ChatRole
  text: string
  timestamp: string
}

export interface ChatQueryRequest {
  question: string
}

export interface ChatCitation {
  chunkId: string
  text: string
  score?: number
}

export interface ChatQueryResponseData {
  answer: string
  cacheHit: boolean
  citations?: ChatCitation[]
}
