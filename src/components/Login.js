import React, { useState, useEffect } from 'react';
import { useSetUserContext } from '../contexts/user';
import useFormValues from '../hooks/useFormValues';

const Login = () => {
  const [user, setUserDetails] = useFormValues({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const setUserContext = useSetUserContext();
  const onSubmit = e => {
    setError(null);
    e.preventDefault();
    if (
      user.email &&
      user.password &&
      user.password.trim() === 'password'
    ) {
      setUserContext({
        name: 'Test User',
        ...user
      });
    } else {
      setError('invalid');
    }
  };

  useEffect(() => {
    setError(null);
  }, [user.email, user.password]);

  return (
    <>
      <h1>Login</h1>
      {error && <p>Error: {error}</p>}
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={user.email}
          onChange={setUserDetails}
        />
        <input
          name="password"
          value={user.password}
          onChange={setUserDetails}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
