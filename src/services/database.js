import { useState, useEffect } from 'react';

export async function fetchDatabaseFile({ filename, onSuccess }) {
  const { default: data } = await import(`../database/${filename}.json`);

  onSuccess(data);
}

export function useDatabaseFile({ filename }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDatabaseFile({ filename, onSuccess: setData });
  }, [filename]);

  return data;
}
