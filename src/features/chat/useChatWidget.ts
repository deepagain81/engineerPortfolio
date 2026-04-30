import { useCallback, useMemo, useState } from 'react'

import { requestChatReply, toChatErrorMessage } from './chatApi'
import type { ChatMessage } from './types'

const INITIAL_ASSISTANT_MESSAGE = 'Hi, I’m Deepak. Ask me about my projects, skills, or experience.'

function createMessage(role: ChatMessage['role'], text: string): ChatMessage {
  return {
    id: `${role}-${crypto.randomUUID()}`,
    role,
    text,
    timestamp: new Date().toISOString(),
  }
}

export function useChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    createMessage('assistant', INITIAL_ASSISTANT_MESSAGE),
  ])

  const canSend = useMemo(() => draft.trim().length > 0 && !isSending, [draft, isSending])

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const submitDraft = useCallback(async () => {
    const nextQuestion = draft.trim()

    if (!nextQuestion || isSending) {
      return
    }

    setDraft('')
    setIsSending(true)
    setMessages((current) => [...current, createMessage('user', nextQuestion)])

    try {
      const answer = await requestChatReply(nextQuestion)
      setMessages((current) => [...current, createMessage('assistant', answer)])
    } catch (error) {
      const message = toChatErrorMessage(error)
      setMessages((current) => [...current, createMessage('assistant', message)])
    } finally {
      setIsSending(false)
    }
  }, [draft, isSending])

  return {
    canSend,
    close,
    draft,
    isOpen,
    isSending,
    messages,
    open,
    setDraft,
    submitDraft,
  }
}
