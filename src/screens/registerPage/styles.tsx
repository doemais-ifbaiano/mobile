import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginTop: 10,
  },
  logo: {
    width: 110,
    height: 173,
    resizeMode: "contain",
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 24,
  },
  subtitle: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 14,
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 20,
  },
  inputWrapper: {
    width: "87.5%",
    marginBottom: 15,
  },
});
