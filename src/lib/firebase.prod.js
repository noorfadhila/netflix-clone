import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"
// import { seedDatabase } from '../seed';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

console.log(config)

const firebases = firebase.initializeApp(config);

const db = firebases.firestore();

// call function to seed data to Firebase (update code to Firebase ver 9.8.4 - July 2022)
// seedDatabase(db);

export { firebase };