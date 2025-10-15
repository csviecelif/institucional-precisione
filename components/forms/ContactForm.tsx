'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormTextarea as Textarea } from '@/components/ui/form-textarea'
import { Label } from '@/components/ui/label'
import { Loader2, CheckCircle, XCircle } from 'lucide-react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [message, setMessage] = useState('')
  const MAX_MESSAGE_LENGTH = 500

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_MESSAGE_LENGTH) {
      setMessage(e.target.value)
    }
  }

  const isMessageValid = message.length > 0 && message.length <= MAX_MESSAGE_LENGTH

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setResult(null)

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    // Basic validation
    if (!data.name || !data.email || !data.subject || !message) {
      setLoading(false)
      setResult({ success: false, message: 'Por favor, preencha todos os campos obrigatórios.' })
      return
    }

    // Here you would typically send the data to your backend API
    console.log(data)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Simulate a successful response
    setLoading(false)
    setResult({ success: true, message: 'Sua mensagem foi enviada com sucesso!' })
    
    // TODO: Handle actual form submission to a backend endpoint
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="font-semibold text-base44-primary">
          Nome
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="mt-2 rounded-2xl border-base44-primary/20 bg-base44-gray-50 text-base44-gray-800 placeholder:text-base44-gray-400 focus-visible:ring-base44-primary"
          placeholder="Seu nome completo"
        />
      </div>
      <div>
        <Label htmlFor="email" className="font-semibold text-base44-primary">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-2 rounded-2xl border-base44-primary/20 bg-base44-gray-50 text-base44-gray-800 placeholder:text-base44-gray-400 focus-visible:ring-base44-primary"
          placeholder="seu.email@exemplo.com"
        />
      </div>
      <div>
        <Label htmlFor="subject" className="font-semibold text-base44-primary">
          Assunto
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          className="mt-2 rounded-2xl border-base44-primary/20 bg-base44-gray-50 text-base44-gray-800 placeholder:text-base44-gray-400 focus-visible:ring-base44-primary"
          placeholder="Sobre o que você gostaria de falar?"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <Label htmlFor="message" className="font-semibold text-base44-primary">
            Mensagem
          </Label>
          <span className="text-xs font-medium text-base44-gray-500">
            {message.length}/{MAX_MESSAGE_LENGTH}
          </span>
        </div>
        <div className="relative mt-2">
          <Textarea
            id="message"
            name="message"
            label="Mensagem"
            rows={6}
            required
            className="rounded-2xl border-base44-primary/20 bg-base44-gray-50 pr-12 text-base44-gray-800 placeholder:text-base44-gray-400 focus-visible:ring-base44-primary"
            placeholder="Digite sua mensagem aqui..."
            value={message}
            onChange={handleMessageChange}
          />
          {message.length > 0 && (
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              {isMessageValid ? (
                <CheckCircle className="h-5 w-5 text-emerald-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
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
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            'Enviar Mensagem'
          )}
        </Button>
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
