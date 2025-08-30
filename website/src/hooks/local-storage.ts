import { useEffect, useState } from 'react';

// useLocalStorage adapted from
// https://usehooks.com/useLocalStorage/

type StoredValue = string | null | undefined;
type SetValue = (value: string | ((prev: string) => string)) => void;

type UseLocalStorage = [StoredValue, SetValue];

export const useLocalStorage = (
  key: string,
  initialValue?: string,
): UseLocalStorage => {
  const [storedValue, setStoredValue] = useState<StoredValue>(initialValue);

  useEffect(() => {
    // Only run on client side after hydration
    try {
      const item = window.localStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
    } catch {
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  const setValue = (value: string | ((prev: string) => string)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue as string) : value;
      setStoredValue(valueToStore);

      // Only access localStorage on client side
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch {
      return;
    }
  };

  return [storedValue, setValue];
};
