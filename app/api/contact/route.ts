import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Informe seu nome.'),
  email: z.string().email('Informe um e-mail válido.'),
  subject: z.string().min(1, 'Informe o assunto.').max(150),
  message: z.string().min(1, 'Informe sua mensagem.').max(1500),
})

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

function buildEmailBody({
  name,
  email,
  subject,
  message,
}: z.infer<typeof contactSchema>) {
  return {
    from: process.env.CONTACT_FROM_EMAIL ?? 'Precisione <no-reply@precisione.com.br>',
    to: [process.env.CONTACT_RECIPIENT_EMAIL ?? 'contato@precisione.com.br'],
    reply_to: email,
    subject: `[Precisione] ${subject}`,
    text: [
      `Nova mensagem recebida via site institucional:`,
      '',
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Assunto: ${subject}`,
      '',
      'Mensagem:',
      message,
    ].join('\n'),
    html: `
      <h1>Nova mensagem via site institucional</h1>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${subject}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  }
}

export async function POST(request: Request) {
  try {
    const payload = contactSchema.parse(await request.json())

    const apiKey = process.env.RESEND_API_KEY
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL

    console.info('[contact] env check', {
      hasApiKey: Boolean(apiKey),
      hasRecipient: Boolean(recipient),
      nodeEnv: process.env.NODE_ENV,
    })

    if (!apiKey || !recipient) {
      if (process.env.NODE_ENV !== 'production') {
        console.info('[contact] mensagem recebida em desenvolvimento', payload)

        return NextResponse.json({
          success: true,
          message:
            'Mensagem registrada no ambiente de desenvolvimento. Configure as variáveis RESEND_API_KEY e CONTACT_RECIPIENT_EMAIL para envio real.',
        })
      }

      return NextResponse.json(
        {
          success: false,
          message: 'Serviço de e-mail indisponível. Tente novamente mais tarde.',
        },
        { status: 503 },
      )
    }

    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(buildEmailBody(payload)),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('[contact] falha ao enviar e-mail', response.status, errorBody)

      return NextResponse.json(
        {
          success: false,
          message: 'Não foi possível enviar sua mensagem. Tente novamente em instantes.',
        },
        { status: 502 },
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Sua mensagem foi enviada com sucesso! Nossa equipe retornará em breve.',
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Verifique os campos do formulário.',
          issues: error.flatten(),
        },
        { status: 400 },
      )
    }

    console.error('[contact] erro inesperado', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Ocorreu um erro interno ao enviar sua mensagem.',
      },
      { status: 500 },
    )
  }
}
