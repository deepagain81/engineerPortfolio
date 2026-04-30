import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
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
  const shouldReduceMotion = useReducedMotion()

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
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    })
  }, [isNearBottom, isOpen, isSending, messages, shouldReduceMotion])

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

  const enterDuration = shouldReduceMotion ? 0.08 : 0.2
  const messageDuration = shouldReduceMotion ? 0.06 : 0.18

  return (
    <div
      className="pointer-events-none fixed right-4 z-50"
      style={{
        bottom: `calc(1rem + env(safe-area-inset-bottom, 0px) + ${keyboardInset}px)`,
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        {!isOpen ? (
          <motion.button
            key="chat-launcher"
            ref={launcherRef}
            type="button"
            onClick={open}
            className="t-chat-launcher pointer-events-auto"
            aria-controls={panelId}
            aria-expanded={false}
            aria-label={`Open chat with ${chatName}`}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 8 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 6 }}
            transition={{ duration: enterDuration, ease: 'easeOut' }}
          >
            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -1.5, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 2.2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: 'easeInOut',
                    }
              }
            >
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </motion.span>
          </motion.button>
        ) : (
          <motion.section
            key="chat-panel"
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
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.985 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.985 }}
            transition={
              shouldReduceMotion
                ? { duration: enterDuration, ease: 'linear' }
                : { type: 'spring', stiffness: 360, damping: 34, mass: 0.86 }
            }
          >
            <header className="flex items-center justify-between border-b border-border px-4 py-3">
              <div>
                <h2 id={headingId} className="text-sm font-semibold text-fg">
                  Chat with {chatName}
                </h2>
                <p className="t-muted text-xs">Ask me about my experience and projects</p>
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
              <AnimatePresence initial={false}>
                {messages.map((message) => {
                  const isUser = message.role === 'user'

                  return (
                    <motion.article
                      key={message.id}
                      layout={!shouldReduceMotion}
                      className={`t-chat-message ${
                        isUser ? 't-chat-message-user' : 't-chat-message-assistant'
                      }`}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.99 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: messageDuration, ease: 'easeOut' }}
                    >
                      <p className="whitespace-pre-wrap leading-6">{message.text}</p>
                      <p
                        className={`mt-1 text-[11px] ${
                          isUser ? 'text-accent-contrast/85' : 'text-muted'
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </motion.article>
                  )
                })}
              </AnimatePresence>

              <AnimatePresence initial={false}>
                {isSending ? (
                  <motion.div
                    key="chat-typing"
                    className="mr-auto flex max-w-[85%] items-end gap-2"
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: messageDuration, ease: 'easeOut' }}
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-fg/5 text-[10px] font-semibold text-muted">
                      {chatName[0]}
                    </span>

                    <div className="flex flex-col items-start">
                      <div
                        className="inline-flex items-center gap-1 rounded-2xl border border-border bg-bg px-3 py-2"
                        aria-label={`${chatName} typing`}
                      >
                        <span className="sr-only">typing...</span>
                        {[0, 0.14, 0.28].map((delay) => (
                          <motion.span
                            key={delay}
                            className="inline-block h-2 w-2 rounded-full bg-muted/80"
                            animate={
                              shouldReduceMotion
                                ? { opacity: 0.7 }
                                : { opacity: [0.3, 1, 0.3], y: [0, -2, 0] }
                            }
                            transition={
                              shouldReduceMotion
                                ? undefined
                                : {
                                    duration: 0.9,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay,
                                    ease: 'easeInOut',
                                  }
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
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
                  placeholder="Ask me a question..."
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
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}
