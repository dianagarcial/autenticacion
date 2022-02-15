import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDuTchgCrIhNViWqSBFvlgnZbeBoWE0fFY",
  authDomain: "fitbox-54953.firebaseapp.com",
  projectId: "fitbox-54953",
  storageBucket: "fitbox-54953.appspot.com",
  messagingSenderId: "895353571144",
  appId: "1:895353571144:web:7343323a5807a2f843d57d",
  measurementId: "G-2TV7H8X8XD"
})

export const auth = firebase.auth();

export default app;