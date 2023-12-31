import { initializeApp } from 'firebase/app';

import {
     getAuth,
     signInWithPopup,
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged,
    } from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBa2La3-wzRI607fH5D_boFC8GCVrO6ZMk",
  authDomain: "crown-clothing-98263.firebaseapp.com",
  projectId: "crown-clothing-98263",
  storageBucket: "crown-clothing-98263.appspot.com",
  messagingSenderId: "172807300882",
  appId: "1:172807300882:web:9f6de39d4440bf44c635cb"
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>  signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  })

  await batch.commit();
  console.log('done');
}

// Getting data from database

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const {title, items} = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{})

  return categoryMap;
}


// Creating user
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
  ) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef)
      if(!userSnapshot.exists()) {
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try{
              await setDoc(userDocRef, {
                  displayName,
                  email,
                  createdAt,
                  ...additionalInformation,
              });
          } catch(error){
              console.log("error creating user", error)
          }
      }
    return userDocRef
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
};
export const signInWithEmailPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)
