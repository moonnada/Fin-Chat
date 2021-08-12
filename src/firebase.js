import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyB4yeUTcNH5R8b9Hb6wK5hxLjMuTs5fH5A",
    authDomain: "unichat-70d70.firebaseapp.com",
    projectId: "unichat-70d70",
    storageBucket: "unichat-70d70.appspot.com",
    messagingSenderId: "621229688304",
    appId: "1:621229688304:web:43d6aa7d55f6c802bbc935"
  }).auth();