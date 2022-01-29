import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHePW_lwOzXYejPIV0Gt6evzyPoTScaD4",
  authDomain: "cpcoders.firebaseapp.com",
  projectId: "cpcoders",
  storageBucket: "cpcoders.appspot.com",
  messagingSenderId: "455444589503",
  appId: "1:455444589503:web:88ea00f4fe85ca701dcf0a",
  measurementId: "G-MC913ECCXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;