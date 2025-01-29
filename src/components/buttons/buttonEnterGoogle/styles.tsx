import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 305,
        height: 42,
        backgroundColor: "#ACACAC",
        borderRadius: 34,
        textTransform: "none",
    },
    text: {
        fontFamily: "Inter, Helvetica, Arial, sans-serif",
        fontWeight: "400",
        color: "black",
        lineHeight: 34,
    },
    icon: {
        marginRight: 10, 
    },
});

export default styles;