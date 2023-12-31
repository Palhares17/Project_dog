import React from 'react';
import { TOKEN_POST, USER_GET } from './api';

export const UserContext = React.createContext();

function UserStorage({ children }) {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(false);

  async function getUser(token) {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);

    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });

    const tokenResp = await fetch(url, options);
    const { token } = await tokenResp.json();

    window.localStorage.setItem('token', token);

    getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin }}>{children}</UserContext.Provider>
  );
}

export default UserStorage;
