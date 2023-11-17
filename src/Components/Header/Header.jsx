import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../assets/svg/dogs.svg';
import { HeaderStyle, NavStyle } from './Header.style';
import { Container } from '../../styles/Container/Container';

function Header() {
  return (
    <HeaderStyle>
      <Container>
        <NavStyle>
          <Link to="/" aria-label="Dogs - Home" className="logo"> <Dogs /> </Link>
          <Link to="login" className="login">Login | Criar</Link>
        </NavStyle>
      </Container>
    </HeaderStyle>
  );
}

export default Header;
