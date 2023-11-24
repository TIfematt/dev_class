
import { initializeApp, getReactNativePersistence } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDSPd1VEhV0EDFwzc4M9EB-BBWCKtL4jqU',
  authDomain: 'goryda-drivers.firebaseapp.com',
  // databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'goryda-drivers',
  storageBucket: 'goryda-drivers.appspot.com',
  // messagingSenderId: '12345-insert-yourse',
  appId: '1:180147141026:android:fddb77b0ce2a4063531afb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {auth, app, db}
