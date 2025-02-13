import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Layout, Input, useTheme, Icon, Text, Button, Popover, List, ListItem } from "@ui-kitten/components";
import React, { useState } from "react";
import { TouchableOpacity, Image, Dimensions} from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import HeaderMenu from "../../components/menus/headerMenu";
import styles from "./styles";

type LandingPageParamsList = NativeStackNavigationProp<RoutesParams, "Profile">;

export default function ProfileScreen() {
  const { width } = Dimensions.get("window");

  return (
    <Layout style={styles.container}>
        <HeaderMenu/>
        <Text style={styles.meuPerfilText}>Meu Perfil</Text>
        <Layout style= {styles.containerFoto}>
          <Image
              source={require("../../../assets/Ellipse 8.png")}
              style={{ width: width * 0.1, height: width * 0.12, resizeMode: "contain" }} 
          /> 
        </Layout>
    </Layout>
  );
}
