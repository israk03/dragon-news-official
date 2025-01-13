import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDrfnMmKVpycCVZALHLtf6Fu76sPxny9Ag",
  authDomain: "dragon-news-auth-9a4f1.firebaseapp.com",
  projectId: "dragon-news-auth-9a4f1",
  storageBucket: "dragon-news-auth-9a4f1.firebasestorage.app",
  messagingSenderId: "82592124205",
  appId: "1:82592124205:web:a1207c4f31395cf5c257a4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
