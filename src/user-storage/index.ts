import { CareRecipient, HealthProfessional, InfoResponse } from '../types';

const USER_LOCAL_STORAGE_KEY = 'vital_ai_user';

// helper to get user from local_storage
export function getStoredUser(): InfoResponse {
  const storedUser = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
}

export function setStoredUser(user: CareRecipient | HealthProfessional): void {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}
