import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  headerSection: {
    alignItems: "center",
    paddingVertical: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    paddingHorizontal: 10,
  },
  contentSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  text: {
    fontSize: 16,
    color: "#444",
    textAlign: "justify",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
    textAlign: "center",
  },
  imageGallery: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  image: {
    width: "30%",
    height: 100,
    borderRadius: 10,
  },
  donationSection: {
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
  },
  
  donationButton: {
    backgroundColor: "#D32F2F", // Vermelho
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    minWidth: 140, // Tamanho mínimo
  },
  
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  
});

export default styles;