import { useState, useEffect } from "react";

// Interface para os dados do usuário
interface User {
  name: string;
  email: string;
}

// Hook para gerenciar o usuário logado
export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulação: buscar usuário logado (pode ser substituído por uma chamada à API)
    const fetchUser = async () => {
      // Aqui pode ser um async storage, API ou qualquer outra forma de autenticação real
      const mockUser: User = { name: "Emily Smith", email: "emily@example.com" };
      setUser(mockUser);
    };

    fetchUser();
  }, []);

  return { user, setUser };
}
