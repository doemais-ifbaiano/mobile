import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingTop: 50
  },
  header: {
    width: "100%",
    height: "7.5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
  shadowOverlay: {
    width: "100%",
    height: 30,
    position: "absolute",
    top: 80,
    left: 0,
  },
});

export default styles;
