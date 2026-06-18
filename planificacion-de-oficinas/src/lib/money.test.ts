import { describe, expect, it } from 'vitest';
import { DEFAULT_TAX_RATE_BPS, formatCents, taxCents, totalWithTaxCents } from './money';

describe('money (céntimos enteros)', () => {
  it('calcula el IVA al 21% redondeando a céntimos', () => {
    expect(taxCents(10_000)).toBe(2_100); // 100,00 € → 21,00 €
    expect(taxCents(9_999)).toBe(2_100); // 99,99 € → 20,9979 → 2100
    expect(taxCents(1)).toBe(0); // 0,01 € → 0,0021 → 0
  });

  it('suma base + IVA', () => {
    expect(totalWithTaxCents(10_000)).toBe(12_100);
  });

  it('usa la tasa por defecto de 2100 bps', () => {
    expect(DEFAULT_TAX_RATE_BPS).toBe(2100);
  });

  it('formatea en EUR es-ES', () => {
    const formatted = formatCents(123_456);
    expect(formatted).toContain('1234,56');
    expect(formatted).toContain('€');
  });
});
