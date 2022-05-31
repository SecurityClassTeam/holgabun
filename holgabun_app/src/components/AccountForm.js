//하연
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useState } from 'react';
import SignupUser from './SignupUser';

const AccountForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 계정 검사 후 있으면
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');
  const [info, setInfo] = useState(false);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const auth = getAuth();

    try {
      if (newAccount) {
        const data = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        const data = await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message);
    }

    setEmail('');
    setPassword('');
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <tr />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount ? '계정 만들기' : '로그인하기'}
        />
        <span onClick={toggleAccount}>
          {newAccount ? '로그인하기' : '계정만들기'}
        </span>
        {error && <span>{error}</span>}
      </form>
    </>
  );
};

export default AccountForm;
