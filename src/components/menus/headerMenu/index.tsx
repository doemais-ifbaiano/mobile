import React, { useState } from "react";
import { Layout, Icon } from "@ui-kitten/components";
import { Image, TouchableOpacity, Dimensions, Modal, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import SideMenu from "../sideMenu"; 

export default function HeaderMenu() {
  const { width } = Dimensions.get("window");
  const navigation = useNavigation<NativeStackNavigationProp<RoutesParams>>();
  const [isMenuVisible, setIsMenuVisible] = useState(false); 

  return (
    <Layout style={styles.container}>
      <Layout style={styles.header}>
        <TouchableOpacity onPress={() => setIsMenuVisible(true)}> 
          <Icon
            name="menu"
            fill="#A037FC"
            style={{ width: width * 0.1, height: width * 0.1 }}
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
        colors={["rgba(0,0,0,0.08)", "rgba(0,0,0,0)"]}
        style={styles.shadowOverlay}
      />

      <Modal visible={isMenuVisible} animationType="fade" transparent>
        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}> 
          <SideMenu 
            isVisible={isMenuVisible}
            onClose={() => setIsMenuVisible(false)} 
          />
        </View>
      </Modal>
    </Layout>
  );
}
