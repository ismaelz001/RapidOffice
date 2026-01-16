'use client';

import { useEffect, useRef } from 'react';

export function useAutosave(callback: () => void, delay: number = 5000, deps: any[]) {
  const timerRef = useRef<NodeJS.Timeout>();
  const lastStateRef = useRef<string>("");

  useEffect(() => {
    const currentState = JSON.stringify(deps);
    
    if (lastStateRef.current === "") {
        lastStateRef.current = currentState;
        return;
    }

    if (currentState === lastStateRef.current) return;

    if (timerRef.current) clearTimeout(timerRef.current);
    
    timerRef.current = setTimeout(() => {
      callback();
      lastStateRef.current = currentState;
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [deps, callback, delay]);
}
