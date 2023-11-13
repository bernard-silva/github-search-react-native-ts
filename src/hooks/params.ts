import { useState } from "react";

interface UseParams<T> {
  data: T;
  append: <K extends keyof T>(key: K, value: T[K]) => void;
}

export function useParams<T>(state: Partial<T>): UseParams<T> {
  const [data, setData] = useState<T>(state as T);

  function append<K extends keyof T>(key: K, value: T[K]): void {
    setData((state) => ({ ...state, [key]: value }));
  }
  return { data, append };
}
