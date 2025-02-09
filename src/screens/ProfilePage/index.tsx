import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Layout, Input, useTheme, Icon, Text, Button, Popover, List, ListItem } from "@ui-kitten/components";
import React, { useState } from "react";
import { TouchableOpacity, Image} from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import HeaderMenu from "../../components/menus/headerMenu";
import styles from "./styles";

type LandingPageParamsList = NativeStackNavigationProp<RoutesParams, "Profile">;

export default function ProfileScreen() {

  return (
    <Layout style={styles.container}>
        <HeaderMenu/>
    </Layout>
  );
}
