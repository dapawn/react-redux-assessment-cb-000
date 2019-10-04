import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Init Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5uBe0NE3Dx9q9wv_QdToDoaF5qJVdOak",
  authDomain: "myplanner-3885c.firebaseapp.com",
  databaseURL: "https://myplanner-3885c.firebaseio.com",
  projectId: "myplanner-3885c",
  storageBucket: "myplanner-3885c.appspot.com",
  messagingSenderId: "551881922424",
  appId: "1:551881922424:web:874b9116a076a3356c5a8d"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
