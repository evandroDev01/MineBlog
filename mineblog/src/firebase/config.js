
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3MBiRVALxZkkFBlGmXZ1cto2zoWysSuk",
  authDomain: "miniblog-41087.firebaseapp.com",
  projectId: "miniblog-41087",
  storageBucket: "miniblog-41087.appspot.com",
  messagingSenderId: "1060950968017",
  appId: "1:1060950968017:web:fe40dde2622d1c2b0b67f0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};