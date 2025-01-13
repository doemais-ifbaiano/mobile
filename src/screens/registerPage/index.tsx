import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Layout, Text, Button } from "@ui-kitten/components";
import { Image } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { styles } from "./styles";
import InputGlobal from "../../components/inputs/inputGlobal";
import ButtonGlobal from "../../components/buttons/buttonGlobal"; 

type RegisterParamsList = NativeStackNavigationProp<RoutesParams, "Register">;

export default function RegisterScreen() {
  const navigation = useNavigation<RegisterParamsList>();

  return (
    <Layout style={styles.container}>
      {/* Logo */}
      <Layout style={styles.header}>
        <Image
          source={require("../../../assets/logos/logo-grande.png")}
          style={styles.logo}
        />
      </Layout>

      {/* Subtítulo */}
      <Text category="h6" style={styles.subtitle}>
        Insira seus dados para ser registrado
      </Text>

      {/* Formulário */}
      <Layout style={styles.form}>
        <InputGlobal
          label="Nome completo"
          placeholder="Digite seu nome completo"
        />
        <InputGlobal
          label="E-mail"
          placeholder="Digite seu email"
        />
        <InputGlobal
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
        <InputGlobal
          label="Confirmar senha"
          placeholder="Confirme sua senha" 
          secureTextEntry={true}
        />
        <InputGlobal
          label="CPF/CNPJ"
          placeholder="Digite seu CPF/CNPJ"
        />
        <InputGlobal
          label="Data de Nascimento"
          placeholder="DD/MM/YYYY"
        />
        <InputGlobal
          label="Telefone"
          placeholder="(xx) xxxx-xxxx"
        />

        {/* Botão Global */}
        <ButtonGlobal
          title="Cadastrar"
          onPress={() => navigation.navigate("LandingPage")}
        />
      </Layout>
    </Layout>
  );
}
