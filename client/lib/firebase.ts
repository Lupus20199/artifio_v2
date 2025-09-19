import { getApp, getApps, initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLIXiCTPk1NfeI-xtLZriBL793B0oirUQ",
  authDomain: "notch-2e67e.firebaseapp.com",
  projectId: "notch-2e67e",
  storageBucket: "notch-2e67e.firebasestorage.app",
  messagingSenderId: "470020050906",
  appId: "1:470020050906:web:ecb98225ecd9bdd7c87ae3",
  measurementId: "G-06ENY5HK1B",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

const db = getFirestore(app);

let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) analytics = getAnalytics(app);
    })
    .catch(() => {
      /* ignore analytics errors */
    });
}

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({ display: "popup" });

export { app, auth, db, googleProvider, facebookProvider };
