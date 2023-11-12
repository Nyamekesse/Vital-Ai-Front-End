interface Payload {
  id: string;
  userType: string;
  iat: number;
}

export function parseJwt(token: string): Payload {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');

  return JSON.parse(window.atob(base64));
}
