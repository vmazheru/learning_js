import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCCCGM_5w9ufFbjfP-rSsV_hFuXAOUrH-k",
    authDomain: "crwn-db-c957f.firebaseapp.com",
    databaseURL: "https://crwn-db-c957f.firebaseio.com",
    projectId: "crwn-db-c957f",
    storageBucket: "",
    messagingSenderId: "1001639854642",
    appId: "1:1001639854642:web:d1c6064679d1805041f22b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;