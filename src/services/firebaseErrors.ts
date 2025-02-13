export class FirebaseAuthError extends Error {
    constructor(code: string) {
      super(getErrorMessage(code));
      this.name = "FirebaseAuthError";
    }
  }
  
  const getErrorMessage = (code: string) => {
    const errors: { [key: string]: string } = {
      "auth/email-already-in-use": "Este e-mail já está cadastrado.",
      "auth/weak-password": "A senha deve ter pelo menos 6 caracteres.",
      "auth/invalid-email": "E-mail inválido.",
      "auth/user-not-found": "Usuário não encontrado.",
      "auth/wrong-password": "Senha incorreta.",
    };
    return errors[code] || "Erro desconhecido.";
  };
  