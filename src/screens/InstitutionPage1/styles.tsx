import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
    padding: 16,
    marginVertical: 10,

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
    marginVertical: 15, 
  },
  image: {
    width: 130, 
    height: 200,
    borderRadius: 10,
    marginRight: 10, 
    resizeMode: "cover", 
  },
  donationSection: {
    padding: 16,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: "#EFEFEF", 
    marginVertical: 20, 
    width: "100%",
  },
  
  donationButton: {
    backgroundColor: "#D32F2F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25.66,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    minWidth: 140, 
  },
  
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  
});

export default styles;