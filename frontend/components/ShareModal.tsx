'use client';

import { useState } from 'react';
import { Share2, Copy, ExternalLink, X, Check } from 'lucide-react';

interface ShareModalProps {
  token: string;
  onClose: () => void;
}

export default function ShareModal({ token, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/share/${token}`;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary-100 p-2 rounded-lg">
            <Share2 className="text-primary-600" size={24} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Compartir Propuesta</h2>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Cualquier persona con este enlace podrá ver el diseño y el presupuesto en modo de solo lectura.
        </p>

        <div className="space-y-4">
          <div className="relative">
            <input 
              type="text" 
              readOnly 
              value={shareUrl}
              className="w-full bg-gray-50 border rounded-lg px-4 py-3 text-sm font-mono text-gray-500 pr-12 focus:outline-none"
            />
            <button 
              onClick={copyLink}
              className="absolute right-2 top-2 p-1.5 text-primary-600 hover:bg-white rounded-md transition-colors"
            >
              {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
            </button>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={copyLink}
              className="flex-1 bg-primary-600 text-white py-2.5 rounded-xl font-bold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
            >
              <Copy size={18} /> {copied ? '¡Copiado!' : 'Copiar enlace'}
            </button>
            <a 
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-700 py-2.5 px-4 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} /> Abrir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
