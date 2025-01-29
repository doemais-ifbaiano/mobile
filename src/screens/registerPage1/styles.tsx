import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "7%",
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  backButton: {
    position: "absolute",
    top: 15,
    left: 15,
    zIndex: 10,
  },
  header: {
    alignItems: "center",
    marginTop: "7%",
  },
  logo: {
    width: 110,
    height: 173,
    resizeMode: "contain",
  },
  title: {
    marginTop: "2%",
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    marginTop: "2%",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: "7%",
  },
  inputWrapper: {
    width: "87.5%",
    marginBottom: "7%",
  },

});
