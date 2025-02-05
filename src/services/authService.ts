import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseAuthError } from "./firebaseErrors";

// Registrar usuário
export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw new FirebaseAuthError(error.code);
  }
};

// Login
export const signIn = async (email: string, password: string, keepLoggedIn: boolean) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    if (keepLoggedIn) {
      await AsyncStorage.setItem("keepLoggedIn", "true");
    } else {
      await AsyncStorage.removeItem("keepLoggedIn");
    }

    return userCredential.user;
  } catch (error: any) {
    throw new FirebaseAuthError(error.code);
  }
};

// Verifica se o usuário deve permanecer logado
export const checkUserSession = (callback: (user: any) => void) => {
  AsyncStorage.getItem("keepLoggedIn").then((value) => {
    if (value === "true") {
      return onAuthStateChanged(auth, (user) => {
        callback(user);
      });
    } else {
      callback(null);
    }
  });
};

// Logout
export const logout = async () => {
  try {
    await AsyncStorage.removeItem("keepLoggedIn"); 
    await signOut(auth);
  } catch (error) {
    console.error("Erro ao sair:", error);
    throw error;
  }
};
