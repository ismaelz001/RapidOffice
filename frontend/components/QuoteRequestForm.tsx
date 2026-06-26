'use client';

import { FormEvent, useState } from 'react';

type QuoteRequestFormProps = {
  source: 'home' | 'catalog' | 'category' | 'refurbished' | 'planner';
  context?: string;
  defaultMessage?: string;
  submitLabel?: string;
  formClassName?: string;
  buttonClassName?: string;
};

type SubmitState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; id?: string }
  | { status: 'error'; message: string };

export default function QuoteRequestForm({
  source,
  context,
  defaultMessage = '',
  submitLabel = 'Enviar solicitud',
  formClassName = 'flex flex-col gap-4 max-w-sm w-full',
  buttonClassName = 'bg-ofi-black text-ofi-white font-semibold text-sm px-6 py-3.5 hover:bg-ofi-pink-dark transition-colors duration-200 flex items-center justify-between',
}: QuoteRequestFormProps) {
  const [state, setState] = useState<SubmitState>({ status: 'idle' });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const customerName = String(formData.get('customerName') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const company = String(formData.get('company') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!customerName || (!email && !phone)) {
      setState({ status: 'error', message: 'Indica tu nombre y al menos un email o teléfono.' });
      return;
    }

    setState({ status: 'loading' });

    try {
      const response = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName,
          email,
          phone,
          company,
          message,
          source,
          context,
          pageUrl: window.location.href,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setState({
          status: 'error',
          message: result.error ?? 'No hemos podido registrar la solicitud.',
        });
        return;
      }

      form.reset();
      setState({ status: 'success', id: result.id });
    } catch {
      setState({
        status: 'error',
        message: 'No hemos podido conectar con el servicio. Inténtalo de nuevo.',
      });
    }
  }

  return (
    <form className={formClassName} onSubmit={handleSubmit}>
      <div data-cta className="flex flex-col gap-1">
        <label htmlFor={`${source}-quote-name`} className="text-xs font-semibold text-ofi-gray uppercase tracking-wider">
          Nombre
        </label>
        <input
          id={`${source}-quote-name`}
          name="customerName"
          type="text"
          placeholder="Tu nombre o empresa"
          autoComplete="name organization"
          className="border border-ofi-black/20 bg-transparent px-4 py-3 text-sm placeholder:text-ofi-gray/50 focus:outline-none focus:border-ofi-pink transition-colors"
          required
        />
      </div>

      <div data-cta className="flex flex-col gap-1">
        <label htmlFor={`${source}-quote-email`} className="text-xs font-semibold text-ofi-gray uppercase tracking-wider">
          Email
        </label>
        <input
          id={`${source}-quote-email`}
          name="email"
          type="email"
          placeholder="correo@empresa.com"
          autoComplete="email"
          className="border border-ofi-black/20 bg-transparent px-4 py-3 text-sm placeholder:text-ofi-gray/50 focus:outline-none focus:border-ofi-pink transition-colors"
        />
      </div>

      <div data-cta className="flex flex-col gap-1">
        <label htmlFor={`${source}-quote-phone`} className="text-xs font-semibold text-ofi-gray uppercase tracking-wider">
          Teléfono
        </label>
        <input
          id={`${source}-quote-phone`}
          name="phone"
          type="tel"
          placeholder="Teléfono de contacto"
          autoComplete="tel"
          className="border border-ofi-black/20 bg-transparent px-4 py-3 text-sm placeholder:text-ofi-gray/50 focus:outline-none focus:border-ofi-pink transition-colors"
        />
      </div>

      <input name="company" type="hidden" value="" readOnly />

      <div data-cta className="flex flex-col gap-1">
        <label htmlFor={`${source}-quote-message`} className="text-xs font-semibold text-ofi-gray uppercase tracking-wider">
          Mensaje
        </label>
        <textarea
          id={`${source}-quote-message`}
          name="message"
          rows={3}
          defaultValue={defaultMessage}
          placeholder="Describe brevemente tu proyecto..."
          className="border border-ofi-black/20 bg-transparent px-4 py-3 text-sm placeholder:text-ofi-gray/50 focus:outline-none focus:border-ofi-pink transition-colors resize-none"
        />
      </div>

      {state.status === 'success' ? (
        <p data-cta className="border border-green-600/20 bg-green-50 px-4 py-3 text-sm text-green-800">
          Solicitud recibida{state.id ? ` · ${state.id.slice(0, 8)}` : ''}. Te contactaremos para preparar la propuesta.
        </p>
      ) : null}

      {state.status === 'error' ? (
        <p data-cta className="border border-red-600/20 bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.message}
        </p>
      ) : null}

      <button data-cta type="submit" disabled={state.status === 'loading'} className={buttonClassName}>
        {state.status === 'loading' ? 'Enviando...' : submitLabel}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  );
}
