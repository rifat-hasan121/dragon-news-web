// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzW1ST3P4vh6OrXrV3m_ZCyVEkl0jUEgQ",
    authDomain: "the-dragon-news-2c592.firebaseapp.com",
    projectId: "the-dragon-news-2c592",
    storageBucket: "the-dragon-news-2c592.firebasestorage.app",
    messagingSenderId: "902868779945",
    appId: "1:902868779945:web:361aeca62fdb897e2dbab8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;