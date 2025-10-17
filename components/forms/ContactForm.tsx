'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormTextarea as Textarea } from '@/components/ui/form-textarea'
import { Label } from '@/components/ui/label'
import { Loader2, CheckCircle, XCircle } from 'lucide-react'

const MAX_MESSAGE_LENGTH = 500
type ContactField = 'name' | 'email' | 'subject' | 'message'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({})

  const clearError = (field: ContactField) => {
    setErrors((prev) => {
      if (!prev[field]) {
        return prev
      }

      const rest = { ...prev }
      delete rest[field]
      return rest
    })
  }

  const handleFieldChange =
    (field: ContactField) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!errors[field]) {
        return
      }

      const value = event.target.value.trim()
      const isFieldValid = field === 'email' ? EMAIL_REGEX.test(value) : value.length > 0

      if (isFieldValid) {
        clearError(field)
      }
    }

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target

    if (value.length <= MAX_MESSAGE_LENGTH) {
      setMessage(value)

      if (value.trim().length > 0) {
        clearError('message')
      }
    }
  }

  const trimmedMessage = message.trim()
  const isMessageValid = trimmedMessage.length > 0 && trimmedMessage.length <= MAX_MESSAGE_LENGTH

  const renderErrorHint = (field: ContactField) => {
    if (!errors[field]) {
      return null
    }

    return (
      <div className="flex items-center gap-1 text-xs">
        <span className="text-sm font-bold leading-none text-red-500">*</span>
        <span className="rounded-full bg-red-50 px-2 py-1 text-[11px] font-semibold text-red-600 shadow-sm">
          {errors[field]}
        </span>
      </div>
    )
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setResult(null)

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      subject: String(formData.get('subject') ?? '').trim(),
      message: trimmedMessage,
    }

    const validationErrors: Partial<Record<ContactField, string>> = {}

    if (!payload.name) {
      validationErrors.name = 'Informe seu nome completo.'
    }

    if (!payload.email) {
      validationErrors.email = 'Informe um e-mail.'
    } else if (!EMAIL_REGEX.test(payload.email)) {
      validationErrors.email = 'Use o formato seuemail@exemplo.com.'
    }

    if (!payload.subject) {
      validationErrors.subject = 'Informe o assunto da mensagem.'
    }

    if (!payload.message) {
      validationErrors.message = 'Digite sua mensagem antes de enviar.'
    } else if (payload.message.length > MAX_MESSAGE_LENGTH) {
      validationErrors.message = `A mensagem deve ter até ${MAX_MESSAGE_LENGTH} caracteres.`
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setLoading(false)
      return
    }

    setErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok || !data?.success) {
        throw new Error(data?.message ?? 'Não foi possível enviar sua mensagem.')
      }

      event.currentTarget.reset()
      setMessage('')
      setResult({ success: true, message: data.message ?? 'Sua mensagem foi enviada com sucesso!' })
    } catch (error) {
      console.error('[ContactForm] submission error', error)
      setResult({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Não foi possível enviar sua mensagem. Tente novamente em instantes.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Label htmlFor="name" className="font-semibold text-base44-primary">
            Nome
          </Label>
          {renderErrorHint('name')}
        </div>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
          placeholder="Seu nome completo"
          className={[
            'mt-2 rounded-2xl bg-base44-gray-50 text-base44-gray-800 placeholder:text-base44-gray-400 focus-visible:ring-base44-primary',
            errors.name ? 'border border-red-300 focus-visible:ring-red-500' : 'border border-base44-primary/20',
          ].join(' ')}
          onChange={handleFieldChange('name')}
        />
      </div>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Label htmlFor="email" className="font-semibold text-base44-primary">
            Email
          </Label>
          {renderErrorHint('email')}
        </div>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.email)}
          placeholder="seu.email@exemplo.com"
          className={[
            'mt-2 rounded-2xl bg-base44-gray-50 text-base44-gray-800 placeholder:text-base44-gray-400 focus-visible:ring-base44-primary',
            errors.email ? 'border border-red-300 focus-visible:ring-red-500' : 'border border-base44-primary/20',
          ].join(' ')}
          onChange={handleFieldChange('email')}
        />
      </div>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Label htmlFor="subject" className="font-semibold text-base44-primary">
            Assunto
          </Label>
          {renderErrorHint('subject')}
        </div>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.subject)}
          placeholder="Sobre o que você gostaria de falar?"
          className={[
            'mt-2 rounded-2xl bg-base44-gray-50 text-base44-gray-800 placeholder:text-base44-gray-400 focus-visible:ring-base44-primary',
            errors.subject ? 'border border-red-300 focus-visible:ring-red-500' : 'border border-base44-primary/20',
          ].join(' ')}
          onChange={handleFieldChange('subject')}
        />
      </div>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="message" className="font-semibold text-base44-primary">
              Mensagem
            </Label>
            {renderErrorHint('message')}
          </div>
          <span className="text-xs font-medium text-base44-gray-500">
            {message.length}/{MAX_MESSAGE_LENGTH}
          </span>
        </div>
        <div className="relative mt-2">
          <Textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            className={[
              'rounded-2xl bg-base44-gray-50 pr-12 text-base44-gray-800 placeholder:text-base44-gray-400 focus-visible:ring-base44-primary',
              errors.message ? 'border border-red-300 focus-visible:ring-red-500' : 'border border-base44-primary/20',
            ].join(' ')}
            placeholder="Digite sua mensagem aqui..."
            value={message}
            onChange={handleMessageChange}
          />
          {message.length > 0 && (
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              {!errors.message && isMessageValid ? (
                <CheckCircle className="h-5 w-5 text-emerald-500" aria-hidden />
              ) : (
                errors.message && <XCircle className="h-5 w-5 text-red-500" aria-hidden />
              )}
            </div>
          )}
        </div>
      </div>
      <div>
        <Button
          type="submit"
          className="w-full rounded-full bg-base44-primary text-base44-primary-foreground shadow-md shadow-base44-primary/20 transition hover:bg-base44-primary-light"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
              Enviando...
            </>
          ) : (
            'Enviar mensagem'
          )}
        </Button>
        <p className="mt-2 text-center text-xs text-base44-gray-500">
          Ao enviar, você concorda com o uso dos seus dados conforme nossa{' '}
          <Link href="/politica-de-privacidade" className="font-semibold text-base44-primary hover:text-base44-primary-light">
            política de privacidade
          </Link>
          .
        </p>
      </div>
      {result && (
        <div
          className={`rounded-2xl border p-4 text-center text-sm font-medium ${
            result.success
              ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
              : 'border-red-200 bg-red-50 text-red-700'
          }`}
        >
          {result.message}
        </div>
      )}
    </form>
  )
}
