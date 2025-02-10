import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.expoPublicFirebaseApiKey,
  authDomain: Constants.expoConfig?.extra?.expoPublicFirebaseAuthDomain,
  projectId: Constants.expoConfig?.extra?.expoPublicFirebaseProjectId,
  storageBucket: Constants.expoConfig?.extra?.expoPublicFirebaseStorageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.expoPublicFirebaseMessagingSenderId,
  appId: Constants.expoConfig?.extra?.expoPublicFirebaseAppId,
};

// Inicializa o app Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Inicializa a autenticação do Firebase
const auth = initializeAuth(app);

// Configura a persistência com AsyncStorage
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // A persistência foi configurada corretamente
  })
  .catch((error) => {
    console.error("Erro ao configurar persistência:", error);
  });

export { app, auth };
