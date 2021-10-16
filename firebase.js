import { firebase } from '@firebase/app'
import "firebase/auth";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCBC7EAQlyXLRAQHibCyfldHM-1yWfgpcM",
    authDomain: "signal-clone-fe8ce.firebaseapp.com",
    projectId: "signal-clone-fe8ce",
    storageBucket: "signal-clone-fe8ce.appspot.com",
    messagingSenderId: "570559533228",
    appId: "1:570559533228:web:84a3bb19541ae00047cf09"
  };
  const  app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = app.auth();
  export {db, auth};