import { describe, expect, it } from 'vitest';
import { assertCan, can, ForbiddenError } from './index';

describe('permisos por rol (12.8)', () => {
  it('admin puede gestionar usuarios', () => {
    expect(can('admin', 'user:manage')).toBe(true);
  });

  it('lectura solo puede leer', () => {
    expect(can('lectura', 'lead:read')).toBe(true);
    expect(can('lectura', 'lead:write')).toBe(false);
    expect(can('lectura', 'user:manage')).toBe(false);
  });

  it('catalogo no puede ver costes ni leads', () => {
    expect(can('catalogo', 'catalog:write')).toBe(true);
    expect(can('catalogo', 'cost:read')).toBe(false);
    expect(can('catalogo', 'lead:read')).toBe(false);
  });

  it('comercial gestiona leads pero no ve costes', () => {
    expect(can('comercial', 'lead:write')).toBe(true);
    expect(can('comercial', 'cost:read')).toBe(false);
  });

  it('direccion ve costes pero no escribe catálogo', () => {
    expect(can('direccion', 'cost:read')).toBe(true);
    expect(can('direccion', 'catalog:write')).toBe(false);
  });

  it('assertCan lanza ForbiddenError cuando no hay permiso', () => {
    expect(() => assertCan('lectura', 'lead:write')).toThrow(ForbiddenError);
    expect(() => assertCan('admin', 'lead:write')).not.toThrow();
  });
});
