import { useState, useEffect } from 'react';

export async function fetchDatabaseFile({ locale, filename, setState }) {
  const {
    default: data,
  } = await import(`../database/${locale}/${filename}.json`);

  setState(data);
}

export function useDatabaseFile({ filename, locale }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDatabaseFile({
      filename: filename,
      locale: locale,
      setState: setData,
    });
  }, [filename, locale]);

  return data;
}
