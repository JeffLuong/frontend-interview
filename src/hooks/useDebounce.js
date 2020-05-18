import { useEffect, useState, useRef } from 'react';

const useDebounce = (initValue, delay) => {
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(initValue);
    }, delay);

    return () => clearTimeout(timeout);
  }, [initValue, delay]);

  return value;
};

export default useDebounce;