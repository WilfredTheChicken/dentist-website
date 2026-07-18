export function getDb() {
  throw new Error(
    "No database is configured for this site. Configure a supported database adapter before calling getDb()."
  );
}
