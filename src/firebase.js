import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD_3CkP1IbJ1m13w_gTZ4KWuZXRzBgZYHo',
  authDomain: 'clo-2df2b.firebaseapp.com',
  projectId: 'clo-2df2b',
  storageBucket: 'clo-2df2b.appspot.com',
  messagingSenderId: '464499123151',
  appId: '1:464499123151:web:043e526da14b70cba128ba',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
