import { useDebugValue, useEffect, useState } from 'react';

export function useLocalStorage(key, initalState) {
  const [state, setState] = useState(initalState);
  useDebugValue(state);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) setState(parse(item));
  }, []);

  useEffect(() => {
    if (state) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state]);

  return [state, setState];
}

function parse(obj) {
  try {
    return JSON.parse(obj);
  } catch {
    return obj;
  }
}
