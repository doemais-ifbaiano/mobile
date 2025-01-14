import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "center",
    paddingVertical: "5%",
  },
  logo: {
    marginTop: "10%", 
    marginBottom: "5%", 
    alignItems: "center",
  },
  box: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%", 
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
    marginBottom: "5%", 
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: "5%",
  },
  backButton: {
    position: "absolute",
    top: "7%", 
    left: "5%",
    zIndex: 10,
  },
});

export default styles;
