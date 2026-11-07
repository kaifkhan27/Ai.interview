
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-b61ef.firebaseapp.com",
  projectId: "interviewai-b61ef",
  storageBucket: "interviewai-b61ef.firebasestorage.app",
  messagingSenderId: "722898467795",
  appId: "1:722898467795:web:b229a898a48c9f025d4d26"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

const provider = new  GoogleAuthProvider()
export{auth , provider}