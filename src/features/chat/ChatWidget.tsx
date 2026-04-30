import { MessageCircle, SendHorizontal, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'

import { useChatWidget } from './useChatWidget'

function formatTime(timestamp: string): string {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  })
}

export function ChatWidget() {
  const chatName = 'Deepak'
  const headingId = useId()
  const panelId = useId()
  const launcherRef = useRef<HTMLButtonElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const logRef = useRef<HTMLDivElement>(null)
  const [isNearBottom, setIsNearBottom] = useState(true)
  const [keyboardInset, setKeyboardInset] = useState(0)
  const [viewportHeight, setViewportHeight] = useState<number | null>(null)

  const {
    canSend,
    close,
    draft,
    isOpen,
    isSending,
    messages,
    open,
    setDraft,
    submitDraft,
  } = useChatWidget()

  useEffect(() => {
    if (!isOpen) {
      return
    }

    textAreaRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !isNearBottom) {
      return
    }

    logRef.current?.scrollTo({
      top: logRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [isNearBottom, isOpen, isSending, messages])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return
      }

      close()
      window.requestAnimationFrame(() => {
        launcherRef.current?.focus()
      })
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [close, isOpen])

  useEffect(() => {
    if (!isOpen || typeof window === 'undefined') {
      return
    }

    const viewport = window.visualViewport

    if (!viewport) {
      return
    }

    const syncViewport = () => {
      const nextInset = Math.max(
        0,
        window.innerHeight - (viewport.height + viewport.offsetTop)
      )

      setKeyboardInset(nextInset)
      setViewportHeight(viewport.height)
    }

    syncViewport()
    viewport.addEventListener('resize', syncViewport)
    viewport.addEventListener('scroll', syncViewport)

    return () => {
      viewport.removeEventListener('resize', syncViewport)
      viewport.removeEventListener('scroll', syncViewport)
      setKeyboardInset(0)
      setViewportHeight(null)
    }
  }, [isOpen])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    void submitDraft()
  }

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
    const target = event.currentTarget
    const distanceFromBottom =
      target.scrollHeight - target.scrollTop - target.clientHeight
    setIsNearBottom(distanceFromBottom < 48)
  }

  return (
    <div
      className="pointer-events-none fixed right-4 z-50"
      style={{
        bottom: `calc(1rem + env(safe-area-inset-bottom, 0px) + ${keyboardInset}px)`,
      }}
    >
      {!isOpen ? (
        <button
          ref={launcherRef}
          type="button"
          onClick={open}
          className="t-chat-launcher pointer-events-auto"
          aria-controls={panelId}
          aria-expanded={false}
          aria-label={`Open chat with ${chatName}`}
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </button>
      ) : (
        <section
          id={panelId}
          role="dialog"
          aria-modal="false"
          aria-labelledby={headingId}
          className="t-chat-panel pointer-events-auto h-[min(70vh,34rem)] w-[min(calc(100vw-2rem),24rem)]"
          style={
            viewportHeight
              ? { height: `${Math.min(544, Math.max(320, viewportHeight - 112))}px` }
              : undefined
          }
        >
          <header className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <h2 id={headingId} className="text-sm font-semibold text-fg">
                Chat with {chatName}
              </h2>
              <p className="t-muted text-xs">Ask me about experience and projects</p>
            </div>

            <button
              type="button"
              onClick={() => {
                close()
                window.requestAnimationFrame(() => {
                  launcherRef.current?.focus()
                })
              }}
              className="t-chat-icon-btn"
              aria-label={`Close chat with ${chatName}`}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div
            ref={logRef}
            role="log"
            aria-label="Chat messages"
            aria-live="polite"
            onScroll={handleScroll}
            className="flex-1 space-y-3 overflow-y-auto px-3 py-3"
          >
            {messages.map((message) => {
              const isUser = message.role === 'user'

              return (
                <article
                  key={message.id}
                  className={`t-chat-message ${
                    isUser ? 't-chat-message-user' : 't-chat-message-assistant'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-6">{message.text}</p>
                  <p
                    className={`mt-1 text-[11px] ${
                      isUser ? 'text-accent-contrast/85' : 'text-muted'
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </article>
              )
            })}

            {isSending ? (
              <article className="t-chat-message t-chat-message-assistant text-muted">
                ...
              </article>
            ) : null}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-3">
            <label htmlFor={`${panelId}-input`} className="sr-only">
              Ask a question
            </label>
            <div className="flex items-end gap-2">
              <textarea
                id={`${panelId}-input`}
                ref={textAreaRef}
                rows={1}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault()
                    void submitDraft()
                  }
                }}
                placeholder={`Ask me a question...`}
                className="t-input mt-0 max-h-28 min-h-[42px] resize-none"
              />

              <button
                type="submit"
                disabled={!canSend}
                className="t-chat-send"
                aria-label="Send message"
              >
                <SendHorizontal className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <p className="t-muted mt-1 text-xs">Enter to send, Shift+Enter for new line</p>
          </form>
        </section>
      )}
    </div>
  )
}
