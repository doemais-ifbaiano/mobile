import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Layout, Text, useTheme, Icon} from "@ui-kitten/components";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import ButtonGlobal from "../../components/buttons/buttonGlobal";
import styles from "./styles";
import InputGlobal from "../../components/inputs/inputGlobal";

type RecoverPasswordParamsList = NativeStackNavigationProp<RoutesParams, "RecoverPassword">;

export default function RecoverPasswordScreen() {
  const navigation = useNavigation<RecoverPasswordParamsList>();
  const theme = useTheme();

  return (
    <Layout style={styles.container}>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Icon
          name="arrow-back"
          fill={theme["black"]}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>

      {/* Logo */}
      <Layout style={styles.logo}>
        <Image
          source={require("../../../assets/logos/logo-media.png")}
        />
      </Layout>

      {/* Caixa de textos */}
      <Layout style={styles.box}>
        <Text category="h1" style={styles.title}>
          Recuperar senha
        </Text>
        <Text category="h6" style={styles.text}>
          Insira um email/CPF para iniciar o processo de recuperação
        </Text>
      </Layout>

      <Layout style={styles.inputs}>
        <InputGlobal label="" placeholder="Email/CPF"></InputGlobal>
      </Layout>

      {/* Botão */}
      <Layout style={styles.buttonContainer}>
        <ButtonGlobal
          title="Enviar"
          appeareances=""
          onPress={() => navigation.navigate("NewPassword")}
        />
      </Layout>
    </Layout>
  );
}
