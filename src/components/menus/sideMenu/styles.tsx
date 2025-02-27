import { StyleSheet } from "react-native";
import theme from "../../../../theme.json";

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Fundo escuro semi-transparente
  },
  container: {
    position: "absolute",
    left: 0,
    height: "100%",
    width: "50%",
    backgroundColor: theme["color-primary-500"],
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 15,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  userName: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "700",
    color: theme["color-primary-500"],
    marginTop: 18,
  },
  menuContainer: {
    paddingVertical: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
    tintColor: "#FFFFFF",
  },
  menuText: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  logoutButtonContainer: {
    marginTop: "auto",
    alignItems: "center",
    paddingVertical: 20,
  },
  logoutButton: {
    backgroundColor: "#fff",
    width: "60%",
    borderRadius: 30,
    alignItems: "center",
  },
});

export default styles;
