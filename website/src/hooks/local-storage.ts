import { useState } from 'react';

// useLocalStorage adapted from
// https://usehooks.com/useLocalStorage/

type StoredValue = string | null | undefined;
type SetValue = (
  value: string | ((prev: string) => string),
  force?: boolean,
) => void;

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
      console.warn(
        `An unhandled error ocurred while retrieving data from local storage.
This is probably because we can't access the browser window object server-side.
Returning initial value.`,
      );
      return initialValue;
    }
  });

  const setValue = (
    value: string | ((prev: string) => string),
    force = false,
  ) => {
    if (!force && !window.localStorage.getItem('allowStorage')) {
      throw Error(
        "We don't have the user's permission to set a value in local storage.",
      );
    }
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch {
      console.warn(
        `An unhandled error ocurred while setting data in local storage.
This is probably because we can't access the browser window object server-side.`,
      );
    }
  };
  return [storedValue, setValue];
};
