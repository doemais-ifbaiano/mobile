import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Layout, Text, useTheme, Icon } from "@ui-kitten/components"; 
import {
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RoutesParams } from "../../navigation/routesParams";
import { styles } from "./styles";
import InputGlobal from "../../components/inputs/inputGlobal";
import ButtonGlobal from "../../components/buttons/buttonGlobal";

type RegisterParamsList = NativeStackNavigationProp<RoutesParams, "Register">;

export default function RegisterScreen() {
  const navigation = useNavigation<RegisterParamsList>();
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Layout style={styles.container}>
            {/* Botão de voltar */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Icon
                name="arrow-back"
                fill={theme["black"]} 
                style={{ width: 30, height: 30 }} 
              />
            </TouchableOpacity>

            {/* Logo e Título */}
            <Layout style={styles.header}>
              <Image
                source={require("../../../assets/logos/logo-grande.png")}
                style={styles.logo}
              />
              <Text
                category="h4"
                style={[styles.title, { color: theme["text-basic-color"] }]}
              >
                Cadastro
              </Text>
              <Text
                category="s1"
                style={[styles.subtitle, { color: theme["text-subtitle-color"] }]}
              >
                Insira seus dados para ser registrado
              </Text>
            </Layout>

            {/* Formulário */}
            <Layout style={styles.form}>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label="Nome completo"
                  placeholder="Digite seu nome completo"
                />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal label="E-mail" placeholder="Digite seu email" />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label="Senha"
                  placeholder="Digite sua senha"
                  secureTextEntry
                />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label="Confirmar senha"
                  placeholder="Confirme sua senha"
                  secureTextEntry
                />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal label="CPF/CNPJ" placeholder="Digite seu CPF/CNPJ" />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label="Data de Nascimento"
                  placeholder="DD/MM/YYYY"
                />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal label="Telefone" placeholder="(xx) xxxx-xxxx" />
              </Layout>

              {/* Botão Global */}
              <ButtonGlobal
                title="Cadastrar"
                appeareances=""
                onPress={() => navigation.navigate("LandingPage")}
              />
            </Layout>
          </Layout>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
