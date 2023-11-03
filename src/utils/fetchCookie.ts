export function fetchCookie() {
  const token = document.cookie
    .split(';')
    .find((cookie) => cookie.startsWith('token='));
  if (token) {
    const value = token.substring(15);
    return value;
  }
  return null;
}
