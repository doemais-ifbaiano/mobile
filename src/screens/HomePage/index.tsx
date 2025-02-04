import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Layout, Input, useTheme, Icon, Text } from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity, KeyboardAvoidingView, Platform,ScrollView, Dimensions} from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import HeaderMenu from "../../components/menus/headerMenu";
import styles from "./styles";

type LandingPageParamsList = NativeStackNavigationProp<RoutesParams, "HomePage">;

export default function HomePageScreen() {
  const navigation = useNavigation<LandingPageParamsList>();
  const theme = useTheme();
  const renderIcon = (props: any) => (
    <Icon 
      {...props} 
      name="search" 
      fill="#A037FC" 
      style={{ width: 24, height: 24 }} 
    />
  );

  return (
    <Layout style={styles.container}>
        <HeaderMenu/>
        <Input 
            style={styles.input}
            placeholder="Pesquisar instituição"
            accessoryLeft={renderIcon}
        />

        <Layout style={styles.box}>
            <Text category="h1" style={styles.title}>
                Instituições Parceiras
            </Text>
        </Layout>

        {/* Botão de voltar */}
        <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
        >
        <Icon
            name="arrow-back"
            fill={theme["color-basic-800"]} 
            style={{ width: 30, height: 30 }} 
        />
        </TouchableOpacity>
    </Layout>
  );
}
