import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CheckBox, Layout, Text, Button } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import ButtonGlobal from "../../components/buttons/buttonGlobal";
import styles from "./styles";
import InputIconLeft from "../../components/inputs/inputIconLeft";
import InputIconLeftAndRight from "../../components/inputs/inputIconsLeftAndRight";
import ButtonEnterGoogle from "../../components/buttons/buttonEnterGoogle";

type LoginParamsList = NativeStackNavigationProp<RoutesParams, "Login">;

export default function LoginScreen() {
  const navigation = useNavigation<LoginParamsList>();
  const [checked, setChecked] = React.useState(false);

  return (
    <Layout style={styles.container}>
      {/* Logo */}
      <Layout style={styles.logo}>
        <Image
          source={require("../../../assets/logos/logo-media.png")}
        />
      </Layout>

      {/* Caixa de textos */}
      <Layout style={styles.box}>
        <Text category="h1" style={styles.title}>
          Login
        </Text>
        <Text category="h6" style={styles.text}>
          Por favor, insira um email/CPF e senha para entrar.
        </Text>
      </Layout>

      <Layout style={styles.inputs}>
        <InputIconLeft label="" placeholder="Email/CPF" textColor="#000000" iconName="person-outline"></InputIconLeft>
        <InputIconLeftAndRight label="" placeholder="Senha" textColor="#000000" iconLeft="lock" iconRight="eye-outline"></InputIconLeftAndRight>
      </Layout>

      <Layout style={styles.checkboxContainer}>
        <CheckBox
          checked={checked}
          onChange={nextChecked => setChecked(nextChecked)}>
            Manter-me conectado(a)
        </CheckBox>
        <Button appearance="ghost" onPress={() => navigation.navigate("RecoverPassword")}>Esqueceu sua senha?</Button>
      </Layout>

      {/* Botão */}
      <Layout style={styles.buttonContainer}>
        <ButtonGlobal
          title="Entrar"
          appeareances=""
          onPress={() => navigation.navigate("Register")}
        />
        <ButtonEnterGoogle></ButtonEnterGoogle>
        <Text category="h6" style={styles.textButtonRegister}>
          Caso ainda não possua uma conta:
        </Text>
        <ButtonGlobal
          title="Cadastrar-se"
          appeareances="outline"
          onPress={() => navigation.navigate("Register")}
        />
      </Layout>
    </Layout>
  );
}
