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
  textButtonRegister: {
    textAlign: "center",  
    marginTop: "7%", 
  },
  inputs: {
    width: "90%",
    alignItems: "center",
  },
  checkboxContainer: {
    marginTop: "4%",
    flexDirection: 'row', // Para alinhar a checkbox e o texto horizontalmente
    alignItems: 'center', // Alinha o texto com a checkbox
  },
  buttonContainer: {
    width: "100%",
    marginTop: "3%",
    
    alignItems: "center",
    marginBottom: "1%",
  },
});

export default styles;
