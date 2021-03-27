import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB4XSolivFKU_wyhBVHmTBoFUVY6-3JeW8",
    authDomain: "netflix-clone-e225a.firebaseapp.com",
    projectId: "netflix-clone-e225a",
    storageBucket: "netflix-clone-e225a.appspot.com",
    messagingSenderId: "561691430728",
    appId: "1:561691430728:web:35e532c278822ca0c5ed7d"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  export { auth};
  export default db;