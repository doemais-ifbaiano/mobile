import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVDdcsN5w6lmn8K_Qyw4aggt7pwSu070c",
  authDomain: "doe-mais-8892d.firebaseapp.com",
  projectId: "doe-mais-8892d",
  storageBucket: "doe-mais-8892d.appspot.com",
  messagingSenderId: "175852613799",
  appId: "1:175852613799:web:c86772c6ea9f492438ab82",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
