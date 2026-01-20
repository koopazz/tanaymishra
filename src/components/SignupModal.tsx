import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// ============================================
// EMAILJS CONFIGURATION
// ============================================
// To set up EmailJS:
// 1. Create account at https://www.emailjs.com/
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{course_name}}
// 4. Get your Public Key from Account > API Keys
// 5. Replace the values below:

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID' // e.g., 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // e.g., 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY' // e.g., 'AbCdEfGhIjKlMnOp'

// ============================================

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFirstName('')
      setEmail('')
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!firstName.trim() || !email.trim()) {
      setErrorMessage('Please fill in all fields')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: firstName,
          from_email: email,
          course_name: 'Claude Code for GTM Engineers',
        },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitStatus('success')
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Modal */}
      <div
        className="relative bg-background border-2 border-black shadow-[6px_6px_0px_#000] w-full max-w-md p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">&#10003;</div>
            <h3 className="text-xl font-medium mb-2">You're in!</h3>
            <p className="text-muted mb-6">
              Check your inbox for access to the Claude Code for GTM Engineers course.
            </p>
            <button
              onClick={onClose}
              className="bg-black text-background px-6 py-3 text-sm font-medium hover:bg-foreground/80 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl md:text-2xl font-medium mb-2">
              Get Free Access
            </h2>
            <p className="text-muted text-sm mb-6">
              Enter your details to access the Claude Code for GTM Engineers course.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-border px-4 py-3 text-base focus:outline-none focus:border-black transition-colors"
                  placeholder="Your first name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email <span className="text-muted">(required)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-border px-4 py-3 text-base focus:outline-none focus:border-black transition-colors"
                  placeholder="you@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {errorMessage && (
                <p className="text-red-600 text-sm">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-background px-6 py-4 text-sm font-medium hover:bg-foreground/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  'GET ACCESS TO THE COURSE'
                )}
              </button>
            </form>

            <p className="text-xs text-muted text-center mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
