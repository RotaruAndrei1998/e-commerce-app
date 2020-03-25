import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVZYjE1ss4eUC4Vr889sHa1msZlLyGTgs",
    authDomain: "e-commerce-store-a806f.firebaseapp.com",
    databaseURL: "https://e-commerce-store-a806f.firebaseio.com",
    projectId: "e-commerce-store-a806f",
    storageBucket: "e-commerce-store-a806f.appspot.com",
    messagingSenderId: "453643767719",
    appId: "1:453643767719:web:4701b353506479aace7082",
    measurementId: "G-S4VVGCTXFG"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;