import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
