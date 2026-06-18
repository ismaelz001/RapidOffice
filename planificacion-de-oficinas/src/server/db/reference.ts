/**
 * Generación de referencias humanas (máster 12.6).
 * Formato: PREFIJO-AÑO-SECUENCIA (6 dígitos), p.ej. LEAD-2026-000123.
 *
 * La secuencia definitiva se resolverá con un contador en base de datos
 * (transaccional) en la capa de servicio. Este helper formatea el código.
 */

export type ReferencePrefix = 'LEAD' | 'PLAN' | 'PROY' | 'PRES' | 'PED';

export function formatReference(prefix: ReferencePrefix, year: number, sequence: number): string {
  const seq = String(sequence).padStart(6, '0');
  return `${prefix}-${year}-${seq}`;
}

/** Año de negocio actual en zona Europe/Madrid (12.12). */
export function currentBusinessYear(now: Date = new Date()): number {
  const formatter = new Intl.DateTimeFormat('es-ES', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
  });
  return Number(formatter.format(now));
}
