import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "20%",
    },
    box: {
        width: "100%",
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",    
    },
    title: {
        textAlign: "center",
        marginBottom: "5%",
    },
    text: {
        textAlign: "justify",
    },
    logo: {
        width: "80%",
        height: "100%",
        alignItems: "center",
        paddingTop: "25%",
        resizeMode: "contain",
    },
    button: {
        marginTop: "30%",
        width: "100%",
        height: "25%",
        alignItems: "center",
    }
});

export default styles;