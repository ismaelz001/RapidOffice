'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../../../hooks/useAuth';
import { useProject } from '../../../../hooks/useProject';
import { useAutosave } from '../../../../hooks/useAutosave';
import { api } from '../../../../lib/api';
import { CatalogItem, CanvasItem } from '../../../../lib/types';
import TopBar from '../../../../components/TopBar';
import CatalogSidebar from '../../../../components/CatalogSidebar';
import CanvasStage from '../../../../components/CanvasStage';
import InspectorPanel from '../../../../components/InspectorPanel';
import ShareModal from '../../../../components/ShareModal';

export default function EditorPage({ params }: { params: { id: string } }) {
  const { isAuthenticated, logout } = useAuth();
  const { project, setProject, loading, saving, saveProject } = useProject(params.id);
  const [catalog, setCatalog] = useState<CatalogItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [showGrid, setShowGrid] = useState(true);
  const [presentationMode, setPresentationMode] = useState(false);
  const [shareToken, setShareToken] = useState<string | null>(null);

  // Fetch catalog on mount
  useEffect(() => {
    if (isAuthenticated) {
        api.get<CatalogItem[]>('/catalog').then(setCatalog).catch(console.error);
    }
  }, [isAuthenticated]);

  const handleShare = async () => {
    try {
      const { token } = await api.createShareLink(params.id);
      setShareToken(token);
    } catch (err) {
      alert("Error al generar enlace de compartir. Asegúrate de que el backend soporte FASE 2.");
      // Fallback para demo si el backend aún no tiene el endpoint:
      // setShareToken("test-token"); 
    }
  };

  // Autosave when canvas_data changes
  useAutosave(() => {
    if (project && !presentationMode) saveProject();
  }, 5000, [project?.canvas_data]);

  const handleDropItem = (catalogItemId: string, x: number, y: number) => {
    if (!project || presentationMode) return;
    
    const newItem: CanvasItem = {
      instanceId: crypto.randomUUID(),
      catalogItemId,
      x,
      y,
      rotation: 0,
      qty: 1,
      variant: {},
    };

    setProject({
      ...project,
      canvas_data: {
        ...project.canvas_data,
        items: [...project.canvas_data.items, newItem],
      },
    });
    setSelectedId(newItem.instanceId);
  };

  const handleCanvasChange = (items: CanvasItem[]) => {
    if (!project || presentationMode) return;
    setProject({
      ...project,
      canvas_data: {
        ...project.canvas_data,
        items,
      },
    });
  };

  const updateSelectedItem = (updated: CanvasItem) => {
    if (!project || presentationMode) return;
    const items = project.canvas_data.items.map(it => 
      it.instanceId === updated.instanceId ? updated : it
    );
    handleCanvasChange(items);
  };

  const deleteItem = (id: string) => {
    if (!project || presentationMode) return;
    handleCanvasChange(project.canvas_data.items.filter(it => it.instanceId !== id));
    setSelectedId(null);
  };

  const duplicateItem = (id: string) => {
    if (!project || presentationMode) return;
    const original = project.canvas_data.items.find(it => it.instanceId === id);
    if (!original) return;

    const copy: CanvasItem = {
      ...original,
      instanceId: crypto.randomUUID(),
      x: original.x + 20,
      y: original.y + 20,
    };

    handleCanvasChange([...project.canvas_data.items, copy]);
    setSelectedId(copy.instanceId);
  };

  if (isAuthenticated === null || loading || !project) {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 font-medium">Preparando tu espacio de trabajo...</p>
            </div>
        </div>
    );
  }

  const selectedItem = project.canvas_data.items.find(it => it.instanceId === selectedId) || null;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      <TopBar 
        projectName={project.name} 
        isSaving={saving} 
        onSave={() => saveProject()} 
        onLogout={logout}
        showGrid={showGrid}
        setShowGrid={setShowGrid}
        presentationMode={presentationMode}
        setPresentationMode={setPresentationMode}
        onShare={handleShare}
      />

      {shareToken && <ShareModal token={shareToken} onClose={() => setShareToken(null)} />}
      
      <div className="flex-1 flex overflow-hidden">
        {!presentationMode && <CatalogSidebar items={catalog} />}
        
        <CanvasStage 
          canvasData={project.canvas_data} 
          catalogItems={catalog}
          selectedId={presentationMode ? null : selectedId}
          onSelect={setSelectedId}
          onChange={handleCanvasChange}
          onDropItem={handleDropItem}
          showGrid={showGrid}
          presentationMode={presentationMode}
        />
        
        <InspectorPanel 
          project={project}
          catalog={catalog}
          selectedItem={presentationMode ? null : selectedItem}
          onUpdateItem={updateSelectedItem}
          onDuplicate={duplicateItem}
          onDelete={deleteItem}
        />
      </div>
    </div>
  );
}
