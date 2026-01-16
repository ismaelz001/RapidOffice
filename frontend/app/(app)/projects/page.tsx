'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '../../../lib/api';
import { Project } from '../../../lib/types';
import { useAuth } from '../../../hooks/useAuth';
import { Plus, LayoutGrid, Clock, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const { isAuthenticated, logout } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) fetchProjects();
  }, [isAuthenticated]);

  const fetchProjects = async () => {
    try {
      const data = await api.get<Project[]>('/projects');
      setProjects(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const createProject = async () => {
    try {
      const newProject = await api.post<Project>('/projects', { name: "Nuevo Proyecto" });
      router.push(`/editor/${newProject.id}`);
    } catch (err) {
      alert("Error al crear proyecto");
    }
  };

  if (isAuthenticated === null || loading) return <div className="p-8 text-center">Cargando dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary-900">RapidOffice</h1>
        <button onClick={logout} className="text-sm text-gray-500 hover:text-red-600">Cerrar Sesión</button>
      </nav>

      <main className="max-w-6xl mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Mis Proyectos</h2>
            <p className="text-gray-500">Gestiona tus diseños y presupuestos</p>
          </div>
          <button
            onClick={createProject}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-200"
          >
            <Plus size={20} /> Nuevo Proyecto
          </button>
        </div>

        {projects.length === 0 ? (
          <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">
            <LayoutGrid size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No hay proyectos todavía</h3>
            <p className="text-gray-500 mb-6">Crea tu primer diseño para empezar a cotizar.</p>
            <button onClick={createProject} className="text-primary-600 font-bold hover:underline">Empieza aquí</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.id}
                onClick={() => router.push(`/editor/${p.id}`)}
                className="bg-white rounded-xl border p-6 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{p.name}</h3>
                  <div className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-bold font-mono">
                    {p.total_cents === 0 ? 'Sin cotizar' : (p.total_cents / 100).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                  </div>
                </div>
                
                <div className="flex items-center text-xs text-gray-400 gap-4 mb-6">
                  <span className="flex items-center gap-1"><Clock size={14} /> {new Date(p.updated_at).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1"><LayoutGrid size={14} /> {p.canvas_data.items.length} muebles</span>
                </div>

                <div className="flex items-center text-primary-600 font-bold text-sm gap-1 group-hover:gap-2 transition-all">
                  Abrir editor <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
