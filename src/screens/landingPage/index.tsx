import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import ButtonGlobal from "../../components/buttons/buttonGlobal";
import styles from "./styles";

type LandingPageParamsList = NativeStackNavigationProp<RoutesParams, "LandingPage">;

export default function LandingPageScreen() {
  const navigation = useNavigation<LandingPageParamsList>();

  return (
    <Layout style={styles.container}>
      {/* Caixa de textos */}
      <Layout style={styles.box}>
        <Text category="h1" style={styles.title}>
          Faça a diferença, seja solidário
        </Text>
        <Text category="h6" style={styles.text}>
          Sua contribuição ajuda a transformar vidas
        </Text>
      </Layout>

      {/* Logo */}
      <Layout style={styles.logo}>
        <Image
          source={require("../../../assets/logos/logo-grande.png")}
        />
      </Layout>

      {/* Botão */}
      <Layout style={styles.buttonContainer}>
        <ButtonGlobal
          title="Clique e seja um doador"
          onPress={() => navigation.navigate("Login")}
        />
      </Layout>
    </Layout>
  );
}
