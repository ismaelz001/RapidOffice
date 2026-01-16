'use client';

import { Save, LogOut, ChevronLeft, Grid, Eye, EyeOff, Share2 } from 'lucide-react';
import Link from 'next/link';

interface TopBarProps {
  projectName: string;
  isSaving: boolean;
  onSave: () => void;
  onLogout: () => void;
  showGrid: boolean;
  setShowGrid: (val: boolean) => void;
  presentationMode: boolean;
  setPresentationMode: (val: boolean) => void;
  onShare: () => void;
}

export default function TopBar({ 
  projectName, 
  isSaving, 
  onSave, 
  onLogout,
  showGrid,
  setShowGrid,
  presentationMode,
  setPresentationMode,
  onShare
}: TopBarProps) {
  return (
    <header className="h-14 border-b bg-white flex items-center justify-between px-4 z-20 shadow-sm">
      <div className="flex items-center gap-4">
        <Link href="/projects" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={20} className="text-gray-600" />
        </Link>
        <div>
          <h1 className="font-bold text-gray-900 leading-none">{projectName}</h1>
          <p className="text-[10px] text-gray-400 font-mono mt-0.5 uppercase">RapidOffice Editor v1.0</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* SHARE OPTION */}
        <button
          onClick={onShare}
          className="flex items-center gap-2 text-primary-600 font-bold text-sm px-3 py-1.5 hover:bg-primary-50 rounded-lg transition-colors border border-primary-200"
        >
          <Share2 size={16} /> Compartir
        </button>

        <div className="w-px h-6 bg-gray-200 mx-1" />
        {/* VIEW OPTIONS */}
        <div className="flex bg-gray-100 p-1 rounded-lg gap-1 border">
          <button
            onClick={() => setShowGrid(!showGrid)}
            title="Mostrar/Ocultar Grid"
            className={`p-1.5 rounded transition-colors ${showGrid ? 'bg-white shadow-sm text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Grid size={18} />
          </button>
          <button
            onClick={() => setPresentationMode(!presentationMode)}
            title={presentationMode ? "Salir de Modo Presentación" : "Modo Presentación"}
            className={`p-1.5 rounded transition-colors ${presentationMode ? 'bg-primary-600 text-white' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {presentationMode ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="w-px h-6 bg-gray-200 mx-1" />

        {isSaving && <span className="text-xs text-gray-400 animate-pulse">Guardando...</span>}
        {!presentationMode && (
          <button
            onClick={onSave}
            disabled={isSaving}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-all disabled:opacity-50"
          >
            <Save size={16} /> Guardar
          </button>
        )}
        <div className="w-px h-6 bg-gray-200 mx-1" />
        <button
          onClick={onLogout}
          className="text-gray-500 hover:text-red-600 p-2 transition-colors"
          title="Cerrar Sesión"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}
