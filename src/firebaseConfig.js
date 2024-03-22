import firebase from 'firebase/compat/app'; // For the main Firebase SDK
import 'firebase/compat/auth'; // For the auth module

const firebaseConfig = {
  apiKey: "AIzaSyBOkVSqPILK1ww3Z8FscCz9gY1A-31fUd8",
  authDomain: "auth-9ea5f.firebaseapp.com",
  databaseURL: "https://auth-9ea5f-default-rtdb.firebaseio.com",
  projectId: "auth-9ea5f",
  storageBucket: "auth-9ea5f.appspot.com",
  messagingSenderId: "461657976888",
  appId: "1:461657976888:web:346225df23a7c5022176cd",
  measurementId: "G-0QNWMHQZPV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const appleProvider = new firebase.auth.OAuthProvider('apple.com');