import { useState } from 'react';

const useFormValues = (initial = {}) => {
  const [value, setValue] = useState(initial);
  const onChange = e => {
    const { target: { name, value } } = e;
    setValue(prevVal => ({ ...prevVal, [name]: value }));
};

  return [value, onChange];
};

export default useFormValues;