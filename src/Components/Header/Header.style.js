import styled from 'styled-components';

export const HeaderStyle = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: #fff;
  top: 0;
`;

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  .logo {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
  }

  .login {
    color: ${(props) => props.theme.ColorText};
    display: flex;
    
    &:after {
      content: '';
      display: inline-block;
      width: 14px;
      height: 17px;
      background: url('src/assets/svg/usuario.svg') no-repeat center center;
      margin-left: 0.5rem;
      top: 1px;
    }
  }
`;
