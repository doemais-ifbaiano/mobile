import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20, // Mantém espaçamento interno geral.
  },
  box: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50, // Espaçamento maior do topo para os textos.
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    marginBottom: 20, // Espaço entre o subtítulo e a logo.
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1, // Faz com que a logo ocupe espaço centralizado no layout.
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "flex-end", // Mantém o botão na parte inferior.
    alignItems: "center",
    marginBottom: 20, // Espaçamento abaixo do botão.
  },
});

export default styles;
