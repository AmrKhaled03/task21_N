import React from 'react';
import { auth } from './firebaseConfig';

const SignOut = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;