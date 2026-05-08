import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

export const getDBConnection = async () => {
  return SQLite.openDatabase({
    name: 'clock.db',
    location: 'default',
  });
};

export const createTables = async () => {
  const db = await getDBConnection();
  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS timezones (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      zoneName TEXT,
      countryName TEXT,
      countryCode TEXT,
      timestamp INTEGER,
      gmtOffset INTEGER
    );
  `);

  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS preferences (
      key TEXT PRIMARY KEY,
      value TEXT
    );
  `);
};
