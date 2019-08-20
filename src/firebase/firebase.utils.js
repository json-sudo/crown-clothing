import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC8mz_AUodKCASKF_Gj26AME8UwKQPZhkA",
    authDomain: "crown-db-e31ed.firebaseapp.com",
    databaseURL: "https://crown-db-e31ed.firebaseio.com",
    projectId: "crown-db-e31ed",
    storageBucket: "",
    messagingSenderId: "3598047962",
    appId: "1:3598047962:web:8633303cdc99b5f4"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;