import { Project, CatalogItem } from './types';

export const formatCurrency = (cents: number) => {
  return (cents / 100).toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });
};

export const generateQuoteText = (project: Project, catalog: CatalogItem[]) => {
  const date = new Date().toLocaleDateString('es-ES');
  
  // Group items by catalogItemId
  const groups: Record<string, { item: CatalogItem; qty: number }> = {};
  
  project.canvas_data.items.forEach((canvasItem) => {
    const catalogItem = catalog.find((c) => c.id === canvasItem.catalogItemId);
    if (!catalogItem) return;
    
    if (!groups[canvasItem.catalogItemId]) {
      groups[canvasItem.catalogItemId] = { item: catalogItem, qty: 0 };
    }
    groups[canvasItem.catalogItemId].qty += canvasItem.qty;
  });

  let text = `PRESUPUESTO: ${project.name}\n`;
  text += `Fecha: ${date}\n`;
  text += `------------------------------------------\n`;
  
  Object.values(groups).forEach(({ item, qty }) => {
    const lineSubtotal = item.base_price_cents * qty;
    text += `- ${item.name}${item.brand ? ` (${item.brand})` : ''}\n`;
    text += `  Cant: ${qty} x ${formatCurrency(item.base_price_cents)} = ${formatCurrency(lineSubtotal)}\n`;
  });
  
  text += `------------------------------------------\n`;
  text += `Subtotal: ${formatCurrency(project.subtotal_cents)}\n`;
  text += `IVA (21%): ${formatCurrency(project.tax_cents)}\n`;
  text += `TOTAL: ${formatCurrency(project.total_cents)}\n`;
  text += `------------------------------------------\n`;
  text += `Generado por RapidOffice + Quote`;

  return text;
};
