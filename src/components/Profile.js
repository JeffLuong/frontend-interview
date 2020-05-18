import * as React from 'react';
import { useUserContext, useSetUserContext } from '../contexts/user';
import useFormValues from '../hooks/useFormValues';

/**
 * This should update the user context with the new values for email and name
 */
const Profile = () => {
  const user = useUserContext();
  const setUserContext = useSetUserContext();
  const [updatedUser, setUpdatedUser] = useFormValues(user);
  const onSubmit = e => {
    if (updatedUser.email && updatedUser.name) {
      setUserContext({
        ...user,
        ...updatedUser
      });
    }
    e.preventDefault();
  };

  return (
    <div>
      <h1>Edit your profile</h1>
      <form onSubmit={onSubmit}>
        <input
          name='email'
          value={updatedUser.email}
          onChange={setUpdatedUser}
        />
        <input
          name='name'
          value={updatedUser.name}
          onChange={setUpdatedUser}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Profile;
