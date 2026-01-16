'use client';

import dynamic from 'next/dynamic';
import { useRef, useEffect, useState, useMemo } from 'react';
import { CanvasData, CatalogItem, CanvasItem } from '../lib/types';

// Important: Konva must be dynamic-loaded in Next.js because it accesses 'window'
const Stage = dynamic(() => import('react-konva').then((m) => m.Stage), { ssr: false });
const Layer = dynamic(() => import('react-konva').then((m) => m.Layer), { ssr: false });
const Rect = dynamic(() => import('react-konva').then((m) => m.Rect), { ssr: false });
const Text = dynamic(() => import('react-konva').then((m) => m.Text), { ssr: false });
const Group = dynamic(() => import('react-konva').then((m) => m.Group), { ssr: false });
const Line = dynamic(() => import('react-konva').then((m) => m.Line), { ssr: false });
const Transformer = dynamic(() => import('react-konva').then((m) => m.Transformer), { ssr: false });

interface CanvasStageProps {
  canvasData: CanvasData;
  catalogItems: CatalogItem[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onChange: (items: CanvasItem[]) => void;
  onDropItem: (id: string, x: number, y: number) => void;
  showGrid: boolean;
  presentationMode: boolean;
}

export default function CanvasStage({ 
  canvasData, 
  catalogItems, 
  selectedId, 
  onSelect, 
  onChange,
  onDropItem,
  showGrid,
  presentationMode
}: CanvasStageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const transformerRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const handleDrop = (e: React.DragEvent) => {
    if (presentationMode) return;
    const catalogItemId = e.dataTransfer.getData('catalogItemId');
    if (!catalogItemId) return;

    const stage = (e.currentTarget as any).querySelector('.konvajs-content');
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left) / 20) * 20;
    const y = Math.round((e.clientY - rect.top) / 20) * 20;

    onDropItem(catalogItemId, x, y);
  };

  // Helper to find catalog item info
  const getCatalogInfo = (id: string) => catalogItems.find(i => i.id === id);

  // MEMOIZED GRID LINES
  const gridLines = useMemo(() => {
    const lines = [];
    const step = 20;
    const majorStep = 100;
    
    // Vertical lines
    for (let i = 0; i < dimensions.width; i += step) {
      lines.push(
        <Line
          key={`v-${i}`}
          points={[i, 0, i, dimensions.height]}
          stroke={i % majorStep === 0 ? "#cbd5e1" : "#e2e8f0"}
          strokeWidth={i % majorStep === 0 ? 1 : 0.5}
          listening={false}
        />
      );
    }
    // Horizontal lines
    for (let j = 0; j < dimensions.height; j += step) {
      lines.push(
        <Line
          key={`h-${j}`}
          points={[0, j, dimensions.width, j]}
          stroke={j % majorStep === 0 ? "#cbd5e1" : "#e2e8f0"}
          strokeWidth={j % majorStep === 0 ? 1 : 0.5}
          listening={false}
        />
      );
    }
    return lines;
  }, [dimensions.width, dimensions.height]);

  return (
    <div 
      ref={containerRef} 
      className={`flex-1 bg-gray-50 overflow-hidden relative canvas-container ${presentationMode ? 'cursor-default' : 'cursor-crosshair'}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onSelect(null);
      }}
    >
      {!presentationMode && (
        <div className="absolute top-4 left-4 z-10 bg-white/80 p-2 rounded text-xs text-gray-500 shadow-sm border pointer-events-none">
          Grid Snapping: 20px | Drag catalog items here
        </div>
      )}

      <Stage width={dimensions.width} height={dimensions.height}>
        <Layer>
            {showGrid && gridLines}
        </Layer>
        <Layer>
          {canvasData.items.map((item) => {
            const info = getCatalogInfo(item.catalogItemId);
            if (!info) return null;

            const isSelected = item.instanceId === selectedId;

            return (
              <Group
                key={item.instanceId}
                id={item.instanceId}
                x={item.x}
                y={item.y}
                rotation={item.rotation}
                draggable={!presentationMode}
                onClick={(e) => {
                  e.cancelBubble = true;
                  if (!presentationMode) onSelect(item.instanceId);
                }}
                onDragEnd={(e) => {
                  if (presentationMode) return;
                  const updatedItems = canvasData.items.map(it => {
                    if (it.instanceId === item.instanceId) {
                      return {
                        ...it,
                        x: Math.round(e.target.x() / 20) * 20,
                        y: Math.round(e.target.y() / 20) * 20,
                      };
                    }
                    return it;
                  });
                  onChange(updatedItems);
                }}
              >
                <Rect
                  width={info.width_cm}
                  height={info.depth_cm}
                  fill={isSelected ? '#7dd3fc' : '#ffffff'}
                  stroke={isSelected ? '#0ea5e9' : '#94a3b8'}
                  strokeWidth={2}
                  cornerRadius={4}
                  shadowBlur={isSelected && !presentationMode ? 5 : 0}
                />
                <Text
                  text={info.name}
                  width={info.width_cm}
                  height={info.depth_cm}
                  align="center"
                  verticalAlign="middle"
                  fontSize={10}
                  padding={5}
                  listening={false}
                />
              </Group>
            );
          })}
          
          {selectedId && !presentationMode && (
            <Transformer
              ref={(node) => {
                if (node && selectedId) {
                  const stage = node.getStage();
                  const selectedNode = stage?.findOne(`#${selectedId}`);
                  if (selectedNode) {
                    node.nodes([selectedNode]);
                    node.getLayer()?.batchDraw();
                  }
                }
              }}
              rotateEnabled={false}
              enabledAnchors={[]}
              keepRatio={true}
              borderDash={[3, 3]}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
}
