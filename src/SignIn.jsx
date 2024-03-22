import React from 'react';
import { auth, googleProvider, appleProvider } from './firebaseConfig';

const SignIn = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };

  const signInWithApple = () => {
    auth.signInWithPopup(appleProvider);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <button className="btn btn-primary" onClick={signInWithGoogle}>Sign in with Google</button>
      <button className="btn btn-primary" onClick={signInWithApple}>Sign in with Apple</button>
    </div>
  );
};

export default SignIn;