import React, { useState } from 'react';

const useForm = () => {
  const [value, setValue] = useState('');

  function onChange(e) {
    setValue(e.target.value);
  }

  return { value, setValue };
};

export default useForm;
