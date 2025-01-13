import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  box: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%", 
  },
  title: {
    textAlign: "center",
    marginBottom: "2%",
  },
  text: {
    textAlign: "center",
    marginBottom: "2%",
  },
  logo: {
    marginTop: "30%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1, 
  },
  buttonContainer: {
    width: "100%",
    marginTop: "20%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "10%", 
  },
});

export default styles;
