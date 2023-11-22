
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyA6fbOPPhD-PM1-KENt_Qk117nKYOKftm8",
  authDomain: "miniblog-c5609.firebaseapp.com",
  projectId: "miniblog-c5609",
  storageBucket: "miniblog-c5609.appspot.com",
  messagingSenderId: "774670344492",
  appId: "1:774670344492:web:2e744c500d60455c024c89"
};

const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export{fireDb, auth, storage}