import { useState } from 'react';

// useLocalStorage adapted from
// https://usehooks.com/useLocalStorage/

type StoredValue = string | null | undefined;
type SetValue = (value: string | ((prev: string) => string)) => void;

type UseLocalStorage = [StoredValue, SetValue];

export const useLocalStorage = (
  key: string,
  initialValue?: string,
): UseLocalStorage => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: string | ((prev: string) => string)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch {
      return;
    }
  };
  return [storedValue, setValue];
};
