'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function PageWrapper({ children }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="min-h-screen px-4 py-10 transition-colors duration-500
                 bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                 text-gray-900 dark:text-white"
    >
      {children}
    </div>
  );
}
