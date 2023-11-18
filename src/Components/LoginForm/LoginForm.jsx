import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Form/Button/Button';
import { ButtonStyle } from '../Form/Button/Button.style';
import Input from '../Form/Input/Input';
import useForm from '../../Hooks/useForm';

function LoginForm() {
  const username = useForm();
  const password = useForm();

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
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <ButtonStyle>Entrar</ButtonStyle>
      </form>

      <Link to="login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
