import React from 'react';
import { InputContainer } from './Input.style';

function Input({
  label, type, name, value, onChange,
}) {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
      />
      <p className="error">Erro</p>
    </InputContainer>
  );
}

export default Input;
