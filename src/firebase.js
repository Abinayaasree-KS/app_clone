//firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyBrRW30b0jrfCTR2f4n2E8DBDFN0ZlkxJA",
  authDomain: "disneyclone-1f212.firebaseapp.com",
  projectId: "disneyclone-1f212",
  storageBucket: "disneyclone-1f212.appspot.com",
  messagingSenderId: "545675801571",
  appId: "1:545675801571:web:ab2851aa986416afbf26d6",
  measurementId: "G-5BJTP1H7LC"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;