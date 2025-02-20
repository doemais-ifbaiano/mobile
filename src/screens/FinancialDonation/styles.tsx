import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentContainer: {
    alignItems: "center",
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  amountContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  amountButton: {
    borderWidth: 1,
    borderColor: "#9B51E0",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
  },
  selectedAmount: {
    backgroundColor: "#9B51E0",
  },
  amountText: {
    fontSize: 16,
    color: "#9B51E0",
  },
  selectedText: {
    color: "#FFFFFF",
  },
  inputLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  donateButton: {
    backgroundColor: "#9B51E0",
    borderRadius: 10,
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
