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
  photoButton: {
    marginTop: 10,
    backgroundColor: "#A037FC",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  photoButtonText: {
    color: "#fff",
    fontWeight: "bold",
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  scrollViewContainer: {
    flex: 1,
  },
  dangerZone: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF0000",
  },
  dangerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF0000",
    marginBottom: 5,
  },
  dangerText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: "#FF0000",
    borderRadius: 30,
  },
});

export default styles;