import firebase from 'firebase/app';
import 'firebase/firestore';
 
var firebaseConfig = {
  apiKey: "AIzaSyBG6zM7v6fn74LQE7zb2nSU1sXtfst-SvI",
  authDomain: "testseguro-8e62a.firebaseapp.com",
  databaseURL: "https://testseguro-8e62a-default-rtdb.firebaseio.com",
  projectId: "testseguro-8e62a",
  storageBucket: "testseguro-8e62a.appspot.com",
  messagingSenderId: "263874172641",
  appId: "1:263874172641:web:f418437d83252d009549a0"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  const fb = firebase.initializeApp(firebaseConfig);
  

  export const db = fb.firestore();