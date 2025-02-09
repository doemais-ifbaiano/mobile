import { Layout, Icon } from "@ui-kitten/components";
import React from "react";
import { Image, TouchableOpacity, Dimensions} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";


export default function HeaderMenu() {
  const { width } = Dimensions.get("window"); // Obtém a largura da tela
  const navigation = useNavigation<NativeStackNavigationProp<RoutesParams>>();
  

  return (
    <Layout style={styles.container}>
        <Layout style={styles.header}> 
        <TouchableOpacity>
        <Icon
            name="menu"
            fill="#A037FC" 
            style={{ width:  width * 0.1, height:  width * 0.1 }} 
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
        <Image
            source={require("../../../../assets/logos/logo-media.png")}
            style={{ width: width * 0.1, height: width * 0.12, resizeMode: "contain" }} 
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
            source={require("../../../../assets/Foto.png")}
            style={{ width: width * 0.1, height: width * 0.12, resizeMode: "contain" }} 
        />
        </TouchableOpacity>
        </Layout>
        <LinearGradient
            colors={["rgba(0,0,0,0.08)", "rgba(0,0,0,0)"]} // Gradiente escuro para transparente
            style={styles.shadowOverlay}
        />
    </Layout>
  );
}
