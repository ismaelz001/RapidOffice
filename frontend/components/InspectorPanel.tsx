'use client';

import { useState } from 'react';
import { CanvasItem, Project, CatalogItem } from '../lib/types';
import { Trash2, RotateCw, Copy, Wallet, ClipboardCopy, Check } from 'lucide-react';
import { formatCurrency, generateQuoteText } from '../lib/utils';

interface InspectorPanelProps {
  project: Project;
  catalog: CatalogItem[];
  selectedItem: CanvasItem | null;
  onUpdateItem: (updated: CanvasItem) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function InspectorPanel({ 
  project, 
  catalog,
  selectedItem, 
  onUpdateItem, 
  onDuplicate, 
  onDelete 
}: InspectorPanelProps) {
  const [copied, setCopied] = useState(false);
  
  const rotate = () => {
    if (!selectedItem) return;
    onUpdateItem({ ...selectedItem, rotation: (selectedItem.rotation + 15) % 360 });
  };

  const handleCopyQuote = () => {
    if (catalog.length === 0) return;
    const text = generateQuoteText(project, catalog);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const catalogReady = catalog.length > 0;

  return (
    <div className="w-80 border-l bg-white flex flex-col h-full relative">
      {/* TOAST NOTIFICATION */}
      {copied && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold flex items-center gap-2 z-50 animate-in fade-in slide-in-from-top-4">
          <Check size={16} /> Copiado al portapapeles
        </div>
      )}

      {/* SELECTION INSPECTOR */}
      <div className="p-4 border-b">
        <h3 className="font-semibold text-gray-700 mb-4">Inspeccionar Elemento</h3>
        {selectedItem ? (
          <div className="space-y-4">
            <div className="flex gap-2">
              <button 
                onClick={rotate}
                className="flex-1 flex items-center justify-center gap-2 p-2 border rounded hover:bg-gray-50 text-sm"
              >
                <RotateCw size={16} /> +15°
              </button>
              <button 
                onClick={() => onDuplicate(selectedItem.instanceId)}
                className="flex-1 flex items-center justify-center gap-2 p-2 border rounded hover:bg-gray-50 text-sm"
              >
                <Copy size={16} /> Duplicar
              </button>
            </div>
            <button 
              onClick={() => onDelete(selectedItem.instanceId)}
              className="w-full flex items-center justify-center gap-2 p-2 border border-red-200 text-red-600 rounded hover:bg-red-50 text-sm"
            >
              <Trash2 size={16} /> Eliminar
            </button>
          </div>
        ) : (
          <p className="text-sm text-gray-400 italic text-center py-4">
            Selecciona un mueble en el canvas
          </p>
        )}
      </div>

      {/* QUOTE SUMMARY */}
      <div className="mt-auto bg-primary-900 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Wallet size={20} className="text-primary-400" />
            <h3 className="font-bold text-lg">Presupuesto</h3>
          </div>
          <button
            onClick={handleCopyQuote}
            disabled={!catalogReady}
            title={catalogReady ? "Copiar texto del presupuesto" : "Cargando catálogo..."}
            className="p-2 bg-primary-800 hover:bg-primary-700 rounded-lg transition-colors disabled:opacity-30"
          >
            <ClipboardCopy size={18} className="text-primary-300" />
          </button>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-primary-300">Subtotal</span>
            <span>{formatCurrency(project.subtotal_cents)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary-300">IVA (21%)</span>
            <span>{formatCurrency(project.tax_cents)}</span>
          </div>
          <hr className="border-primary-800 my-2" />
          <div className="flex justify-between text-xl font-bold">
            <span>TOTAL</span>
            <span className="text-primary-400">
              {formatCurrency(project.total_cents)}
            </span>
          </div>
        </div>
        
        <p className="text-[10px] text-primary-400 mt-4 text-center uppercase tracking-wider">
          Precios calculados en backend
        </p>
      </div>
    </div>
  );
}
