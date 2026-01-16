'use client';

import { useState, useEffect, useCallback } from 'react';
import { api } from '../lib/api';
import { Project } from '../lib/types';

export function useProject(projectId: string) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchProject = useCallback(async () => {
    try {
      const data = await api.get<Project>(`/projects/${projectId}`);
      setProject(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  useEffect(() => {
    if (projectId) fetchProject();
  }, [projectId, fetchProject]);

  const saveProject = async (updates?: Partial<Project>) => {
    if (!project || saving) return;
    setSaving(true);
    try {
      const payload = {
        name: updates?.name || project.name,
        canvas_data: updates?.canvas_data || project.canvas_data
      };
      const updated = await api.put<Project>(`/projects/${projectId}`, payload);
      setProject(updated);
      return updated;
    } catch (err) {
      alert("Error al guardar el proyecto");
    } finally {
      setSaving(false);
    }
  };

  return { project, setProject, loading, saving, saveProject };
}
