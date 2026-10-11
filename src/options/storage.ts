import { EMPTY_PROFILE, STORAGE_KEY, createId, type AppState, type Profile } from './types';

const emptyState = (): AppState => ({ profiles: [], activeProfileId: null, defaultProfileId: null });
export async function readState(): Promise<AppState> {
  if (!globalThis.chrome?.storage?.local) return emptyState();
  const result = await chrome.storage.local.get(STORAGE_KEY);
  return (result[STORAGE_KEY] as AppState | undefined) ?? emptyState();
}
export async function writeState(state: AppState): Promise<void> {
  if (!globalThis.chrome?.storage?.local) throw new Error('ApplyPilot storage is only available inside Chrome.');
  await chrome.storage.local.set({ [STORAGE_KEY]: state });
}
export function createProfile(name: string): Profile {
  const now = new Date().toISOString();
  return { id: createId(), name, data: structuredClone(EMPTY_PROFILE), createdAt: now, updatedAt: now };
}
