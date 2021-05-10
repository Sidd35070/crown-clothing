import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDP1BBk53ZmyhD-ZMqSuQ2RJWuEwfuw2zI",
    authDomain: "crwn-db-8a855.firebaseapp.com",
    projectId: "crwn-db-8a855",
    storageBucket: "crwn-db-8a855.appspot.com",
    messagingSenderId: "225369487573",
    appId: "1:225369487573:web:64f7c57e692e6043da0a5c",
    measurementId: "G-0B0C4BY6QH"
};

firebase.initializeApp(firebaseConfig);


export const createUserProfileDocument= (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
     const snapshot =   userRef.get();

    if(!snapshot.exists){
        let {displayName, email} = userAuth;
        const createdAt = new Date();
        if(!displayName){
            displayName = additionalData;
        }
        
        try{
            userRef.set({
                displayName, email, createdAt, ...additionalData
            });
        }
        catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};


var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt : 'select_account'
});




export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;