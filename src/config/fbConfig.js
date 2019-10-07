import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Init Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCd9YAaxNey0MwHq88I0QQClxte6yfiLzM",
  authDomain: "yarticulate.firebaseapp.com",
  databaseURL: "https://yarticulate.firebaseio.com",
  projectId: "yarticulate",
  storageBucket: "yarticulate.appspot.com",
  messagingSenderId: "1089242301588",
  appId: "1:1089242301588:web:8b0d9f8f6a9d7ba41fe081",
  measurementId: "G-5MQ51ZCM0C"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
