import { initializeApp } from 'firebase/app';
import {
     getAuth,
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider
    } from 'firebase/auth'

import {
    getFirestore, 
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBa2La3-wzRI607fH5D_boFC8GCVrO6ZMk",
    authDomain: "crown-clothing-98263.firebaseapp.com",
    projectId: "crown-clothing-98263",
    storageBucket: "crown-clothing-98263.appspot.com",
    messagingSenderId: "172807300882",
    appId: "1:172807300882:web:9f6de39d4440bf44c635cb"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

//   Authentication
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

//   Database
  export const db = getFirestore();
  
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef)

        // if user data not exists
        if(!userSnapshot.exists()) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            // create/set document from  userAuth in my collection
            try{
                await setDoc(userDocRef, {
                    displayName, 
                    email, 
                    createdAt
                });
            } catch(error){
                console.log("error creating user", error)
            }
        }
    // if user data exists
        // return reff
        return userDocRef
  };
