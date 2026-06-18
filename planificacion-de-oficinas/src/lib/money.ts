/**
 * Utilidades de dinero (máster 12.11).
 * - Importes SIEMPRE en céntimos enteros. Nunca float.
 * - Moneda inicial EUR. Presentación en es-ES.
 * - Los totales reales se calculan en servicios de servidor.
 */

export function formatCents(cents: number, currency = 'EUR', locale = 'es-ES'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(cents / 100);
}

/** IVA por defecto en puntos básicos (21% = 2100 bps). */
export const DEFAULT_TAX_RATE_BPS = 2100;

/** Calcula el IVA en céntimos a partir de una base y una tasa en puntos básicos. */
export function taxCents(baseCents: number, taxRateBps = DEFAULT_TAX_RATE_BPS): number {
  return Math.round((baseCents * taxRateBps) / 10_000);
}

/** Total con IVA en céntimos. */
export function totalWithTaxCents(baseCents: number, taxRateBps = DEFAULT_TAX_RATE_BPS): number {
  return baseCents + taxCents(baseCents, taxRateBps);
}
