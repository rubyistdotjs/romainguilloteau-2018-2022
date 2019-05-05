import { useState, useEffect } from 'react';

export async function fetchDatabaseFile({ locale, filename, onSuccess }) {
  const { default: data } = await import(
    `../database/${locale}/${filename}.json`
  );

  onSuccess(data);
}

export function useDatabaseFile({ filename, locale }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDatabaseFile({
      filename,
      locale,
      onSuccess: setData,
    });
  }, [filename, locale]);

  return data;
}
