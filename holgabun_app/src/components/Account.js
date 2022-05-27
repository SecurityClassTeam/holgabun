import React from 'react';
import { authService } from '../fBase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import AccountForm from './AccountForm';

const Account = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    }
    await signInWithPopup(authService, provider);
  };

  return (
    <div>
      <AccountForm />
      <div>
        <button onClick={onSocialClick} name="google">
          구글 계정으로 로그인하기
        </button>
      </div>
    </div>
  );
};

export default Account;
