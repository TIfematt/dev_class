
import { initializeApp, getReactNativePersistence } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  // databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: '',
  storageBucket: '',
  // messagingSenderId: '12345-insert-yourse',
  appId: '',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {auth, app, db}
