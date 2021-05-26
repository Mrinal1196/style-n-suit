import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBjJy8dZgKt1U-MvxH5edgtxrJOGoi7ekE",
    authDomain: "style-n-suit-db.firebaseapp.com",
    projectId: "style-n-suit-db",
    storageBucket: "style-n-suit-db.appspot.com",
    messagingSenderId: "1045121734821",
    appId: "1:1045121734821:web:ed0686f7c54b6868f9954c",
    measurementId: "G-3W467XJWSS"
  };
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;
  