import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Form/Button/Button';
import { ButtonStyle } from '../Form/Button/Button.style';
import Input from '../Form/Input/Input';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import { TOKEN_POST, USER_GET } from '../../api';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);

    const json = response.json();
  };

  const { userLogin } = React.useContext(UserContext);

  const handleSubmit = async (e) => {
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      getUser();
    }
  });

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
