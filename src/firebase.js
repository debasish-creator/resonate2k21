import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD1gbbs4_WTVCAxE0GNNnK5XXJDEkwx_qA",
  authDomain: "resonate-7be45.firebaseapp.com",
  projectId: "resonate-7be45",
  storageBucket: "resonate-7be45.appspot.com",
  messagingSenderId: "1056981987181",
  appId: "1:1056981987181:web:8575948dcc33f0e0b77464",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const datab = getDatabase();

const dbRef = ref(getDatabase());

export { db, datab, dbRef };
