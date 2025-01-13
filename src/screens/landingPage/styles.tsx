import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  box: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50, 
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1, 
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20, 
  },
});

export default styles;
