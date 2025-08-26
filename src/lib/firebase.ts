// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBZqT72-0nfA4gibpKihOTnj4PP-X37f9s",
  authDomain: "petmatch-1e75d.firebaseapp.com",
  projectId: "petmatch-1e75d",
  storageBucket: "petmatch-1e75d.firebasestorage.app",
  messagingSenderId: "171353883247",
  appId: "1:171353883247:web:3475e9de4c60c3d586439a",
  measurementId: "G-D2M2P5S7M6",
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app; 