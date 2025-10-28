import { PersistedState } from 'runed';

export const serifStore = new PersistedState<boolean>('useSerifFont', false, {
	syncTabs: false,
	storage: 'session'
});
