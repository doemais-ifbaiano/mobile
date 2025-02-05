import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.expoPublicFirebaseApiKey,
  authDomain: Constants.expoConfig?.extra?.expoPublicFirebaseAuthDomain,
  projectId: Constants.expoConfig?.extra?.expoPublicFirebaseProjectId,
  storageBucket: Constants.expoConfig?.extra?.expoPublicFirebaseStorageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.expoPublicFirebaseMessagingSenderId,
  appId: Constants.expoConfig?.extra?.expoPublicFirebaseAppId,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };