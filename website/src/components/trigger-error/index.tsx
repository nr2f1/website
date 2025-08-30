'use client';

import { useEffect } from 'react';

export default function ErrorTrigger() {
  useEffect(() => {
    throw new Error('This is a test error to show the global-error page.');
  }, []);

  return null;
}
