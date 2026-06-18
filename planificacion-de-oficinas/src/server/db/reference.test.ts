import { describe, expect, it } from 'vitest';
import { formatReference } from './reference';

describe('referencias humanas (12.6)', () => {
  it('formatea con prefijo, año y secuencia de 6 dígitos', () => {
    expect(formatReference('LEAD', 2026, 123)).toBe('LEAD-2026-000123');
    expect(formatReference('PROY', 2026, 45)).toBe('PROY-2026-000045');
    expect(formatReference('PRES', 2026, 72)).toBe('PRES-2026-000072');
    expect(formatReference('PED', 2026, 31)).toBe('PED-2026-000031');
  });

  it('no recorta secuencias largas', () => {
    expect(formatReference('LEAD', 2026, 1_234_567)).toBe('LEAD-2026-1234567');
  });
});
