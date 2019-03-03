export default async function fetchDatabaseFile({
  locale,
  filename,
  setState,
}) {
  const {
    default: data,
  } = await import(`../database/${locale}/${filename}.json`);

  setState(data);
}
