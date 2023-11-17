import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputComponents from '../Form/Input';
import Button from '../Form/Button/Button';
import { ButtonStyle } from '../Form/Button/Button.style';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <InputComponents label="Usuário" type="text" name={username} />
        <InputComponents label="Senha" type="password" name={password} />

        <ButtonStyle>Entrar</ButtonStyle>
      </form>

      <Link to="login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
