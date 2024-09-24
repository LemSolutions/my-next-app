import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "TUA_API_KEY",
  authDomain: "TUA_AUTH_DOMAIN",
  projectId: "TUO_PROJECT_ID",
  storageBucket: "TUA_STORAGE_BUCKET",
  messagingSenderId: "TUO_MESSAGING_SENDER_ID",
  appId: "TUO_APP_ID",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
