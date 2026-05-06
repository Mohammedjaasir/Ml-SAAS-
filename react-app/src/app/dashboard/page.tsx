'use client';

import { useEffect } from 'react';

export default function DashboardRedirect() {
  useEffect(() => {
    window.location.href = '/app.html';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white font-mono">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
        <p className="text-sm opacity-50">INITIALIZING_ML_SYSTEM...</p>
      </div>
    </div>
  );
}
