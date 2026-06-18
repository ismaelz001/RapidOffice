import { randomUUID } from 'crypto';
import 'server-only';

/**
 * Logger estructurado mínimo (máster 12.19).
 * - Logs en JSON con timestamp UTC y nivel.
 * - Cada operación sensible puede asociar un requestId / errorId.
 * - NO se registran contraseñas, tokens, documentos ni datos fiscales completos.
 */

type Level = 'debug' | 'info' | 'warn' | 'error';

interface LogContext {
  requestId?: string;
  errorId?: string;
  actorId?: string;
  [key: string]: unknown;
}

const SENSITIVE_KEYS = new Set([
  'password',
  'token',
  'accessToken',
  'refreshToken',
  'secret',
  'authorization',
  'cookie',
]);

function redact(context: LogContext): LogContext {
  const safe: LogContext = {};
  for (const [key, value] of Object.entries(context)) {
    safe[key] = SENSITIVE_KEYS.has(key) ? '[REDACTED]' : value;
  }
  return safe;
}

function emit(level: Level, message: string, context: LogContext = {}): void {
  const entry = {
    ts: new Date().toISOString(),
    level,
    message,
    ...redact(context),
  };
  const line = JSON.stringify(entry);
  if (level === 'error') console.error(line);
  else if (level === 'warn') console.warn(line);
  else console.log(line);
}

export const logger = {
  debug: (message: string, context?: LogContext) => emit('debug', message, context),
  info: (message: string, context?: LogContext) => emit('info', message, context),
  warn: (message: string, context?: LogContext) => emit('warn', message, context),
  error: (message: string, context?: LogContext) => emit('error', message, context),
};

/** Genera un identificador de error para correlacionar logs y UI. */
export function newErrorId(): string {
  return `err_${randomUUID()}`;
}

/** Genera un identificador de solicitud. */
export function newRequestId(): string {
  return `req_${randomUUID()}`;
}
