// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFuTD3OKkLDTEhK8ivcSMiGmenhvTUCsM",
  authDomain: "biblio-1cf85.firebaseapp.com",
  projectId: "biblio-1cf85",
  storageBucket: "biblio-1cf85.appspot.com",
  messagingSenderId: "96683188327",
  appId: "1:96683188327:web:673b6bbc922de16cc0b4c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

