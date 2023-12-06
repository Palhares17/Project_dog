import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../assets/svg/dogs.svg';
import { HeaderStyle, NavStyle } from './Header.style';
import { Container } from '../../styles/Container/Container';
import { UserContext } from '../../UserContext';

function Header() {
  const context = useContext(UserContext);

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
