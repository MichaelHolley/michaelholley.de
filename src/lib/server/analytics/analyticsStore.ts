import db from '$lib/server/analytics/db';

const RAW_DATA_RETENTION_DAYS = 90;

type EventInput = {
	path: string;
	timestamp: number;
};

const insertEventStmt = db.prepare('INSERT INTO events (occurred_at, path) VALUES (?, ?)');

const upsertDailyStmt = db.prepare(
	'INSERT INTO daily_aggregates (date, path, count) VALUES (?, ?, 1) ON CONFLICT(date, path) DO UPDATE SET count = count + 1'
);

export function storeEvent(input: EventInput) {
	const date = new Date(input.timestamp);
	const dayKey = date.toISOString().slice(0, 10); // 'YYYY-MM-DD'
	const iso = date.toISOString(); // Full ISO UTC timestamp

	const tx = db.transaction((e: EventInput) => {
		insertEventStmt.run(iso, e.path);
		upsertDailyStmt.run(dayKey, e.path);
	});

	tx(input);
}

// Remove raw events older than 90 days and corresponding aggregate rows with zero count (not needed here as we only decrement by deletion if implemented).
// Since aggregates are cumulative, we keep them indefinitely.
export function cleanupOldRawData() {
	const ninetyDaysMs = RAW_DATA_RETENTION_DAYS * 24 * 60 * 60 * 1000;
	const cutoff = Date.now() - ninetyDaysMs;
	const cutoffDate = new Date(cutoff);
	const yyyy = cutoffDate.getUTCFullYear();
	const mm = String(cutoffDate.getUTCMonth() + 1).padStart(2, '0');
	const dd = String(cutoffDate.getUTCDate()).padStart(2, '0');
	const cutoffIso = `${yyyy}-${mm}-${dd}T00:00:00,000`;
	const deleteOldEvents = db.prepare('DELETE FROM events WHERE occurred_at < ?');
	deleteOldEvents.run(cutoffIso);
}
