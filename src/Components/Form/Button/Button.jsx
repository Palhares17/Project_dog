import React from 'react';
import { ButtonStyle } from './Button.style';

function Button({ children, ...props }) {
  return (
    <ButtonStyle {...props}>{children}</ButtonStyle>
  );
}

export default Button;
