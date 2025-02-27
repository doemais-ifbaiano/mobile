import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  signInWithCredential 
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseAuthError } from "./firebaseErrors";

// Registrar usuário com e-mail e senha
export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw new FirebaseAuthError(error.code);
  }
};

// Login com e-mail e senha
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

// Login com Google
export const signInWithGoogle = async (response: any) => {
  try {
    if (response?.type === "success") {
      const { id_token } = response.authentication;
      if (id_token) {
        const credential = GoogleAuthProvider.credential(id_token);
        const userCredential = await signInWithCredential(auth, credential);
        return userCredential.user;
      } else {
        throw new Error("Erro: idToken não encontrado.");
      }
    }
  } catch (error) {
    console.error("Erro no login com Google:", error);
    throw error;
  }
};

// Obtém o usuário logado atualmente
export const getCurrentUser = () => {
  return auth.currentUser;
};

// Verifica se o usuário deve permanecer logado
export const checkUserSession = async (callback: (user: any) => void) => {
  try {
    const keepLoggedIn = await AsyncStorage.getItem("keepLoggedIn");
    if (keepLoggedIn === "true") {
      return onAuthStateChanged(auth, (user) => {
        callback(user);
      });
    } else {
      callback(null);
    }
  } catch (error) {
    console.error("Erro ao verificar sessão:", error);
  }
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
