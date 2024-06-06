import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://company2-89f64-default-rtdb.firebaseio.com/",
    apiKey: "AIzaSyBc20HJkp0HkRWgeZI2n-xRtWEPMh2lIMg",
    authDomain: "company2-89f64.firebaseapp.com",
    projectId: "company2-89f64",
    storageBucket: "company2-89f64.appspot.com",
    messagingSenderId: "844137578848",
    appId: "1:844137578848:web:d17e2f81d81cb1a556de05",
   
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
