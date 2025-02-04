import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  backButton: {
    top: 15,
    left: 15,
    zIndex: 10,
    marginBottom: 50,
  },
  header: {
    width: "100%",
    height: "7.4%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    paddingHorizontal: 16,
  },
  input: {
    width: "55%",
    height: "auto",
    paddingTop: 8.29, 
    gap: 8.29,
    borderRadius: 13.27,
    opacity: 0.7,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    left: "38%"
  },
  box: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "8%",
    marginLeft: "10%",
    marginTop: "10%",
  },
  title: {
    textAlign: "center",
    marginBottom: "2%",
  },
});

export default styles;
