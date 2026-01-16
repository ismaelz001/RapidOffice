import { storage } from './storage';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = storage.getToken();
  const headers = new Headers(options.headers);
  
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  
  if (!(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    storage.removeToken();
    if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
      window.location.href = '/login';
    }
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
    throw new Error(error.detail || 'API request failed');
  }

  return response.json();
}

export const api = {
  get: <T>(path: string) => request<T>(path, { method: 'GET' }),
  post: <T>(path: string, body: any) => request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
  put: <T>(path: string, body: any) => request<T>(path, { method: 'PUT', body: JSON.stringify(body) }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
  
  // Phase 2: Share endpoints
  getSharedProject: <T>(token: string) => request<T>(`/share/${token}`, { method: 'GET' }),
  createShareLink: (projectId: string) => request<{ token: string }>(`/projects/${projectId}/share`, { method: 'POST' }),
};
