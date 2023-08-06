const USER_LOCAL_STORAGE_KEY = 'vital_ai_user';
export function getStoredUser() {
  const storedUser = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
}

export function setStoredUser(user): void {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}
