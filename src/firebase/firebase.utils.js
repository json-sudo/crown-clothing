import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyD_glVejF4B0FNsF8aMrdvgSrG4CAYgKYI",
    authDomain: "crown-clothing-a9c53.firebaseapp.com",
    databaseURL: "https://crown-clothing-a9c53.firebaseio.com",
    projectId: "crown-clothing-a9c53",
    storageBucket: "crown-clothing-a9c53.appspot.com",
    messagingSenderId: "598205734984",
    appId: "1:598205734984:web:f7708aad8992107d"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`'users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;