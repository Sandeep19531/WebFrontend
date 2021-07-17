// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2EnuNbVHpHQ5B3byXHOcOBAfYHYAUJRY",
    authDomain: "billu-bb4ed.firebaseapp.com",
    projectId: "billu-bb4ed",
    storageBucket: "billu-bb4ed.appspot.com",
    messagingSenderId: "1079437447881",
    appId: "1:1079437447881:web:38f3e2d7ce71bce8fd3318",
    measurementId: "G-FLFZ1M9CEB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};