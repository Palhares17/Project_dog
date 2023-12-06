export const API_URL = 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token';

export const TOKEN_POST = (body) => ({
  url: `${API_URL}jwt-auth/v1/token`,
  options: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  },
});

export const USER_GET = () => ({
  url: `${API_URL}/api/user`,
  options: {
    method: 'GET',
    headers: {
      Autorization: `Bearer${token}`,
    },
  },
});

export const TOKEN_GET = () => ({
  url: `${API_URL}/api/user`,
  options: {
    method: 'GET',
    headers: {
      Autorization: `Bearer${token}`,
    },
  },
});
