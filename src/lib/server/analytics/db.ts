import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
	fs.mkdirSync(dataDir, { recursive: true });
}

// Single shared connection. WAL for concurrency and durability.
const db = new Database(path.join(dataDir, 'analytics.db'), { verbose: undefined });
db.pragma('journal_mode = WAL');
db.pragma('synchronous = NORMAL');

// Initialize minimal schema: raw events and daily aggregates
db.exec(`
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  occurred_at TEXT NOT NULL,
  path TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_events_occurred_at ON events(occurred_at);
CREATE INDEX IF NOT EXISTS idx_events_path ON events(path);

CREATE TABLE IF NOT EXISTS daily_aggregates (
  date TEXT NOT NULL,
  path TEXT NOT NULL,
  count INTEGER NOT NULL,
  PRIMARY KEY (date, path)
);
`);

export default db;
