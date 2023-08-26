import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1SgMvTljWl8JbQaaHp7bioRqqJ4Q4SSk",
  authDomain: "gallery96-8383a.firebaseapp.com",
  projectId: "gallery96-8383a",
  storageBucket: "gallery96-8383a.appspot.com",
  messagingSenderId: "317817425745",
  appId: "1:317817425745:web:ae0a7c5d750b2ab165cd70",
  measurementId: "G-X7SF562HGM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db, analytics };
