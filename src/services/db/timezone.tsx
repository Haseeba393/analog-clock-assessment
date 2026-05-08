import { getDBConnection } from '.';
import { T_TIMEZONE } from '../../types/timezone';

export const saveTimezonesInLocal = async (timezones: T_TIMEZONE[]) => {
  try {
    const db = await getDBConnection();

    await db.executeSql(`DELETE FROM timezones`);

    for (const item of timezones) {
      await db.executeSql(
        `
        INSERT INTO timezones
        (zoneName, countryCode, countryName, timestamp, gmtOffset)
        VALUES (?, ?, ?,?,?)
        `,
        [
          item.zoneName,
          item.countryCode,
          item.countryName,
          item.timestamp,
          item.gmtOffset,
        ],
      );
    }
  } catch (error) {
    throw error;
  }
};

export const getTimezonesFromLocal = async (): Promise<T_TIMEZONE[]> => {
  try {
    const db = await getDBConnection();
    const results = await db.executeSql(`SELECT * FROM timezones`);
    return results[0].rows.raw();
  } catch (error) {
    throw error;
  }
};

export const saveSelectedTimezoneLocal = async (zone: string) => {
  const db = await getDBConnection();

  await db.executeSql(
    `
      INSERT OR REPLACE INTO preferences
      (key, value)
      VALUES (?, ?)
      `,
    ['selected_timezone', zone],
  );
};

export const getSelectedTimezoneLocal = async () => {
  const db = await getDBConnection();

  const results = await db.executeSql(
    `
      SELECT value FROM preferences
      WHERE key = ?
      `,
    ['selected_timezone'],
  );

  if (results[0].rows.length > 0) {
    return results[0].rows.item(0).value;
  }
  return null;
};
