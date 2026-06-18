import 'server-only';

/**
 * Permisos por rol (máster 12.8).
 * La autorización se comprueba SIEMPRE en servidor; ocultar botones no es seguridad.
 * Cada mutación debe validar permisos antes de ejecutarse.
 */

export type Role = 'admin' | 'comercial' | 'catalogo' | 'operaciones' | 'direccion' | 'lectura';

/**
 * Acciones del sistema. Se ampliará por dominio según avancen las fases.
 * Convención: 'dominio:accion'.
 */
export type Permission =
  | 'lead:read'
  | 'lead:write'
  | 'lead:assign'
  | 'customer:read'
  | 'customer:write'
  | 'planner:read'
  | 'planner:review'
  | 'catalog:read'
  | 'catalog:write'
  | 'cost:read' // costes y márgenes — permiso específico (12.8)
  | 'task:read'
  | 'task:write'
  | 'user:manage'
  | 'audit:read';

const ALL_READ: Permission[] = [
  'lead:read',
  'customer:read',
  'planner:read',
  'catalog:read',
  'task:read',
];

const rolePermissions: Record<Role, Permission[]> = {
  admin: [
    'lead:read',
    'lead:write',
    'lead:assign',
    'customer:read',
    'customer:write',
    'planner:read',
    'planner:review',
    'catalog:read',
    'catalog:write',
    'cost:read',
    'task:read',
    'task:write',
    'user:manage',
    'audit:read',
  ],
  direccion: [
    'lead:read',
    'lead:assign',
    'customer:read',
    'planner:read',
    'catalog:read',
    'cost:read',
    'task:read',
    'audit:read',
  ],
  comercial: [
    'lead:read',
    'lead:write',
    'lead:assign',
    'customer:read',
    'customer:write',
    'planner:read',
    'planner:review',
    'catalog:read',
    'task:read',
    'task:write',
  ],
  catalogo: ['catalog:read', 'catalog:write', 'task:read'],
  operaciones: [
    'lead:read',
    'customer:read',
    'planner:read',
    'catalog:read',
    'task:read',
    'task:write',
  ],
  lectura: ALL_READ,
};

export function can(role: Role, permission: Permission): boolean {
  return rolePermissions[role]?.includes(permission) ?? false;
}

export function assertCan(role: Role, permission: Permission): void {
  if (!can(role, permission)) {
    throw new ForbiddenError(`El rol "${role}" no tiene el permiso "${permission}"`);
  }
}

export class ForbiddenError extends Error {
  readonly code = 'FORBIDDEN';
  constructor(message = 'No autorizado') {
    super(message);
    this.name = 'ForbiddenError';
  }
}
