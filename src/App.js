import React, { useState, useEffect } from 'react';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { auth } from './firebaseConfig';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="container text-center d-flex flex-column justify-content-center align-items-center my-5 py-5">
      <div className="row">
        <div className="col">
          {user ? <SignOut /> : <SignIn />}
        </div>
      </div>
    </div>
  );
};

export default App;