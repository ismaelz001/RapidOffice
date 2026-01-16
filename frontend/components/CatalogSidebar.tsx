'use client';

import { CatalogItem } from '../lib/types';

interface CatalogSidebarProps {
  items: CatalogItem[];
}

export default function CatalogSidebar({ items }: CatalogSidebarProps) {
  const onDragStart = (e: React.DragEvent, item: CatalogItem) => {
    e.dataTransfer.setData('catalogItemId', item.id);
  };

  return (
    <aside className="w-64 border-r bg-gray-50 flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b bg-white">
        <h2 className="font-semibold text-gray-700">Catálogo de Muebles</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => onDragStart(e, item)}
            className="bg-white p-3 rounded-lg border shadow-sm cursor-grab active:cursor-grabbing hover:border-primary-400 transition-colors"
          >
            <div className="h-24 bg-gray-100 rounded mb-2 flex items-center justify-center text-gray-400 text-xs text-center p-2">
              {item.image_url ? (
                <img src={item.image_url} alt={item.name} className="max-h-full" />
              ) : (
                <span>{item.name} Image</span>
              )}
            </div>
            <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
            <p className="text-xs text-gray-500">{item.width_cm}x{item.depth_cm}cm</p>
            <p className="text-sm font-bold text-primary-600 mt-1">
              {(item.base_price_cents / 100).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
