import React from 'react';
import { InputContainer } from './style';

function InputComponents({ label, type, name }) {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} />
    </InputContainer>
  );
}

export default InputComponents;
