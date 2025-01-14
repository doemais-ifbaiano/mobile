import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  logo: {
    marginTop: "10%",
    alignItems: "center",
    flex: 1,
  },
  box: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "8%",
  },
  title: {
    textAlign: "center",
    marginBottom: "2%",
  },
  text: {
    textAlign: "center",   
  },
  inputs: {
    width: "90%",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    marginTop: "25%",
    alignItems: "center",
    marginBottom: "60%",
  },
  backButton: {
    position: "absolute",
    top: "10%",
    left: "7%",
    zIndex: 10,
  },
});

export default styles;
