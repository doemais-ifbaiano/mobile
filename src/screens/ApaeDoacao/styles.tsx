import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  button: { 
    backgroundColor: "red", 
    padding: 10, 
    borderRadius: 5,
     width: "45%", 
     alignItems: "center" 
    },
  buttonText: { 
    color: "#fff",
     fontWeight: "bold"
     },
});

  export default styles;