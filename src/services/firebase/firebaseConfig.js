import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjovAD1txKAN1Vc1lQP0h7OxRF7IiopVo",
    authDomain: "sublim-art.firebaseapp.com",
    projectId: "sublim-art",
    storageBucket: "sublim-art.appspot.com",
    messagingSenderId: "494274123733",
    appId: "1:494274123733:web:80eb74fef86965f1234f5c"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);