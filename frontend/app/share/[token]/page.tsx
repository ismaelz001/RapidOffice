'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { Project, CatalogItem } from '@/lib/types';
import CanvasStage from '@/components/CanvasStage';
import InspectorPanel from '@/components/InspectorPanel';
import { MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function SharedProjectPage({ params }: { params: { token: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [catalog, setCatalog] = useState<CatalogItem[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Feedback Form State
  const [showContact, setShowContact] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    async function loadShared() {
      try {
        const [projectData, catalogData] = await Promise.all([
          api.getSharedProject<Project>(params.token),
          api.get<CatalogItem[]>('/catalog') // We assume catalog is public or shared
        ]);
        setProject(projectData);
        setCatalog(catalogData);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadShared();
  }, [params.token]);

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback as requested
    const subject = encodeURIComponent(`Cambios en propuesta: ${project?.name}`);
    const body = encodeURIComponent(`Hola,\n\nQuisiera solicitar los siguientes cambios:\n\n${msg}\n\nEnlace: ${window.location.href}`);
    window.location.href = `mailto:admin@rapidoffice.com?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-4">404</h1>
        <p className="text-gray-500 mb-8">Esta propuesta no existe o ha expirado.</p>
        <a href="/" className="text-primary-600 font-bold border-b-2 border-primary-600">Volver al inicio</a>
      </div>
    );
  }

  if (loading || !project) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Cargando propuesta para clientes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      {/* HEADER PUBLIC */}
      <header className="h-16 border-b bg-primary-900 text-white flex items-center justify-between px-8 z-20">
        <div>
          <h1 className="font-bold text-lg leading-none">{project.name}</h1>
          <p className="text-xs text-primary-400 mt-1 uppercase tracking-widest">Propuesta RapidOffice</p>
        </div>
        <button 
          onClick={() => setShowContact(true)}
          className="bg-white text-primary-900 px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-50 transition-colors"
        >
          <MessageSquare size={18} /> Pedir cambios
        </button>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* READ-ONLY CANVAS */}
        <CanvasStage 
          canvasData={project.canvas_data} 
          catalogItems={catalog}
          selectedId={null}
          onSelect={() => {}} // Disabled
          onChange={() => {}} // Disabled
          onDropItem={() => {}} // Disabled
          showGrid={false}
          presentationMode={true}
        />
        
        {/* READ-ONLY SUMMARY */}
        <InspectorPanel 
          project={project}
          catalog={catalog}
          selectedItem={null}
          onUpdateItem={() => {}}
          onDuplicate={() => {}}
          onDelete={() => {}}
        />
      </div>

      {/* FEEDBACK MODAL */}
      {showContact && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4">
          <div className="bg-white bg-white rounded-2xl w-full max-w-md p-8 relative">
            <button onClick={() => setShowContact(false)} className="absolute top-4 right-4 text-gray-400">
              <X size={20} />
            </button>

            {formSent ? (
              <div className="text-center py-8">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud lista!</h2>
                <p className="text-gray-500 mb-6">Hemos preparado tu cliente de correo con los detalles de la propuesta.</p>
                <button 
                  onClick={() => setShowContact(false)} 
                  className="w-full bg-gray-100 py-3 rounded-xl font-bold"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Pedir cambios</h2>
                <p className="text-gray-500 mb-6">Dinos qué te gustaría modificar y te enviaremos una nueva propuesta.</p>
                
                <form onSubmit={handleSendFeedback} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Comentarios</label>
                    <textarea 
                      rows={4} 
                      required
                      placeholder="Ej: Necesito 2 escritorios más de este modelo..."
                      className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primary-500 outline-none"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all"
                  >
                    <Send size={18} /> Enviar solicitud
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Icon helper since X wasn't imported initially in the modal snippet correctly
function X({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
