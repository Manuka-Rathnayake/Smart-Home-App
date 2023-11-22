import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCb3MAMOyhknl999LjPNNUpwrq6TNOt2BE",
  authDomain: "smart-home-app-ec7fd.firebaseapp.com",
  databaseURL: "https://smart-home-app-ec7fd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-home-app-ec7fd",
  storageBucket: "smart-home-app-ec7fd.appspot.com",
  messagingSenderId: "343170726452",
  appId: "1:343170726452:web:98b60a9a9db480cca9e861"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { app, db };

