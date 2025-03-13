import { useState, useEffect } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

interface User {
  uid: string;
  name: string;
  email: string;
  photoURL?: string;
  phone?: string;
  cpf?: string;
  birthDate?: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        console.log("Usuário logado:", firebaseUser);

        let name = firebaseUser.displayName || "Usuário";
        let phone = "";
        let cpf = "";
        let birthDate = "";

        try {
          const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log("Dados do Firestore:", userData);

            name = userData.name || name;
            phone = userData.phone || "";
            cpf = userData.cpf || "";
            birthDate = userData.birthDate || "";
          } else {
            console.log("Documento do usuário não encontrado no Firestore.");
          }

          if (!firebaseUser.displayName && name !== "Usuário") {
            await updateProfile(firebaseUser, { displayName: name });
          }
        } catch (error) {
          console.error("Erro ao buscar dados no Firestore:", error);
        }

        setUser({
          uid: firebaseUser.uid,
          name,
          email: firebaseUser.email || "Sem e-mail",
          photoURL: firebaseUser.photoURL || "https://via.placeholder.com/150",
          phone,
          cpf,
          birthDate,
        });
      } else {
        console.log("Nenhum usuário logado");
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
