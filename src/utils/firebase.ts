import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC79aFIPgf4¡d0EvyR3jbSnLp9EzUQCXms",
  authDomain: "ai-customer-support-bot-a64be.firebaseapp.com",
  projectId: "ai-customer-support-bot-a64be",
  storageBucket: "ai-customer-support-bot-a64be.appspot.com",
  messagingSenderId: "828270662614",
  appId: "1:828270662614:web:7af28dfc5343f72fc1ca77",
  measurementId: "G-G2GFSWTQD5",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
