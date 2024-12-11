import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXhz9pJ-NlWlIrFeJdQe_gAq44Lsu7lJc",
  authDomain: "website999-71344.firebaseapp.com",
  projectId: "website999",
  storageBucket: "website999.appspot.com",
  messagingSenderId: "792979793137",
  appId: "1:792979793137:web:aa71583e42bfa476a03550"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }