import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  logo: {
    alignItems: "center",
    flex: 1,
  },
  box: {
    width: "80%",
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
    width: "87.5%",
    marginBottom: "3%",
    padding: 3,
  },
  checkboxContainer: {
    width: "90%",
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  buttonContainer: {
    width: "100%",
    marginTop: "3%",
    alignItems: "center",
    marginBottom: "1%",
  },
  divider: {
    width: "90%", 
    height: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ACACAC",
    marginVertical: "10%",
    top: "15%",
  },
});

export default styles;
