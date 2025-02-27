import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  meuPerfilText: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#A037FC",
    borderWidth: 2,
    borderColor: "#A037FC",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
  },
  profileHeader: {
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#A037FC",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#A037FC",
    marginTop: 20,
    marginBottom: 10,
  },
  updateButton: {
    backgroundColor: "#A037FC",
    borderRadius: 30,
    marginTop: 15,
  },
});

export default styles;