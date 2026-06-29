type QuoteRequestEmailInput = {
  requestId: string;
  customerName: string;
  customerEmail?: string;
  customerPhone?: string;
  company?: string;
  message?: string;
  source: string;
};

type ResendMessage = {
  to: string;
  subject: string;
  html: string;
  idempotencyKey: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function emailLayout(title: string, content: string) {
  return `<!doctype html>
<html lang="es">
  <body style="margin:0;background:#f7f5f2;color:#111;font-family:Arial,sans-serif">
    <main style="max-width:600px;margin:0 auto;padding:40px 24px">
      <p style="color:#d52c91;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase">Ofiponiente</p>
      <h1 style="font-size:28px;line-height:1.2;margin:12px 0 24px">${escapeHtml(title)}</h1>
      ${content}
    </main>
  </body>
</html>`;
}

function buildMessages(input: QuoteRequestEmailInput, salesEmail: string): ResendMessage[] {
  const shortId = input.requestId.slice(0, 8);
  const messages: ResendMessage[] = [];

  if (input.customerEmail) {
    messages.push({
      to: input.customerEmail,
      subject: `Hemos recibido tu solicitud ${shortId}`,
      idempotencyKey: `quote-customer-${input.requestId}`,
      html: emailLayout(
        'Hemos recibido tu solicitud',
        `<p style="line-height:1.7">Hola ${escapeHtml(input.customerName)},</p>
         <p style="line-height:1.7">Nuestro equipo revisará tus necesidades y te contactará para preparar una propuesta ajustada al espacio, el equipamiento y el montaje.</p>
         <p style="line-height:1.7"><strong>Número de solicitud:</strong> ${shortId}</p>
         <p style="line-height:1.7;color:#666">Este correo se enviará desde la cuenta corporativa configurada por Ofiponiente.</p>`,
      ),
    });
  }

  messages.push({
    to: salesEmail,
    subject: `Nueva solicitud ${shortId} · ${input.source}`,
    idempotencyKey: `quote-sales-${input.requestId}`,
    html: emailLayout(
      'Nueva oportunidad comercial',
      `<p style="line-height:1.7"><strong>Cliente:</strong> ${escapeHtml(input.customerName)}</p>
       <p style="line-height:1.7"><strong>Empresa:</strong> ${escapeHtml(input.company || 'No indicada')}</p>
       <p style="line-height:1.7"><strong>Email:</strong> ${escapeHtml(input.customerEmail || 'No indicado')}</p>
       <p style="line-height:1.7"><strong>Teléfono:</strong> ${escapeHtml(input.customerPhone || 'No indicado')}</p>
       <p style="line-height:1.7"><strong>Origen:</strong> ${escapeHtml(input.source)}</p>
       <p style="line-height:1.7"><strong>Solicitud:</strong> ${escapeHtml(input.requestId)}</p>
       <p style="white-space:pre-wrap;line-height:1.7"><strong>Contexto:</strong>\n${escapeHtml(input.message || 'Sin mensaje')}</p>`,
    ),
  });

  return messages;
}

async function sendWithResend(message: ResendMessage, apiKey: string, from: string, replyTo?: string) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': message.idempotencyKey,
    },
    body: JSON.stringify({
      from,
      to: [message.to],
      subject: message.subject,
      html: message.html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend rejected quote email with status ${response.status}`);
  }
}

export async function sendQuoteRequestEmails(input: QuoteRequestEmailInput) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.EMAIL_FROM?.trim();
  const salesEmail = process.env.SALES_NOTIFICATION_EMAIL?.trim();
  const replyTo = process.env.EMAIL_REPLY_TO?.trim();

  if (!apiKey || !from || !salesEmail) {
    return { status: 'skipped' as const, reason: 'not_configured' as const };
  }

  const messages = buildMessages(input, salesEmail);
  await Promise.all(messages.map((message) => sendWithResend(message, apiKey, from, replyTo)));

  return { status: 'sent' as const, count: messages.length };
}
