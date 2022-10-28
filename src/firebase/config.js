// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { useAuthenticationStore } from "../stores/authentication";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD71k15KzTC8YjWLEhQZaEvyeYbBIR7X-M",
  authDomain: "caffeine-factor.firebaseapp.com",
  projectId: "caffeine-factor",
  storageBucket: "caffeine-factor.appspot.com",
  messagingSenderId: "688926697056",
  appId: "1:688926697056:web:29f75ec6c7058e1b690505",
  measurementId: "G-DWXZLWFZLJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

onAuthStateChanged(auth, (user) => {
  const authStore = useAuthenticationStore()
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    
    authStore.user = user;
    console.log(authStore.user)

  } else {
      authStore.user = null;
      console.log(authStore.user)
  }
});

export {auth, app, db, storage}
