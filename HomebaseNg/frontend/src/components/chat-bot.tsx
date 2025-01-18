import { useState } from 'react'
import { Button } from './ui/button'
import { MessageCircle, X } from 'lucide-react'

interface Message {
  text: string
  isBot: boolean
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm your property assistant. How can I help you today?", isBot: true }
  ])
  const [input, setInput] = useState('')

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }])

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! Our team will get back to you soon.",
        isBot: true
      }])
    }, 1000)

    setInput('')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 text-white"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-4 md:right-4 bg-white md:rounded-lg shadow-xl w-full md:w-[350px] h-full md:h-[500px] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center bg-primary text-white md:rounded-t-lg">
            <h3 className="font-semibold text-lg">Property Assistant</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary/90 text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-primary text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800 placeholder-gray-500"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                Send
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
