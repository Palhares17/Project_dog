import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import LoginPassWordLost from '../LoginPassWordLost/LoginPassWordLost';
import LoginCrate from '../LoginCreate/LoginCreate';
import LoginPassWordReset from '../LoginPassWordReset/LoginPassWordReset';

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCrate />} />
        <Route path="perdeu" element={<LoginPassWordLost />} />
        <Route path="resetar" element={<LoginPassWordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
