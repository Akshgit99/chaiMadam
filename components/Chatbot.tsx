'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa'

type Message = {
  text: string
  isBot: boolean
}

const quickReplies = [
  'Web Development',
  'App Development',
  'Branding',
  'Pricing',
  'Get Started',
]

const botResponses: Record<string, string> = {
  'web development': 'We specialize in creating custom websites and web applications using cutting-edge technologies. Would you like to discuss your project?',
  'app development': 'We build native and cross-platform mobile applications for iOS and Android. What kind of app are you looking to develop?',
  'branding': 'Our branding services include logo design, brand strategy, and complete visual identity. Let\'s create something memorable for your business!',
  'pricing': 'Our pricing varies based on project scope and requirements. Would you like to schedule a free consultation to discuss your needs?',
  'get started': 'Great! You can fill out our contact form or email us at info@abcpvtltd.com. We\'ll get back to you within 24 hours!',
  'default': 'Thank you for your message! Our team will get back to you soon. You can also reach us at info@abcpvtltd.com or call us at +1 (555) 123-4567.',
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi! 👋 How can we help you today?', isBot: true },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    // Add user message
    setMessages((prev) => [...prev, { text: messageText, isBot: false }])
    setInputValue('')

    // Simulate bot response
    setTimeout(() => {
      const lowercaseMessage = messageText.toLowerCase()
      let response = botResponses['default']

      for (const [key, value] of Object.entries(botResponses)) {
        if (lowercaseMessage.includes(key)) {
          response = value
          break
        }
      }

      setMessages((prev) => [...prev, { text: response, isBot: true }])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 btn-gradient rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-50"
      >
        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaComments className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary via-accent to-secondary p-6 text-white">
              <h3 className="font-poppins text-xl font-bold">Chat with us!</h3>
              <p className="text-sm opacity-90">We typically reply in a few minutes</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-gradient-to-r from-primary to-accent text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-6 pb-4">
                <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleSend(reply)}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-full focus:border-primary focus:outline-none text-sm"
                />
                <button
                  onClick={() => handleSend()}
                  className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
