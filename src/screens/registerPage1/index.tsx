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
                fill={theme["color-basic-800"]} 
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
                Cadastrar usuário
              </Text>
              <Text
                category="s1"
                style={[styles.subtitle, { color: theme["text-subtitle-color"] }]}
              >
                Informe seus dados pessoais
              </Text>
            </Layout>

            {/* Formulário */}
            <Layout style={styles.form}>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label="Nome completo *"
                  placeholder="ex. Maria Pereira Santos"
                  iconName="person-outline"
                  textColor={theme["text-basic-color"]}
                />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label="CPF/CNPJ *"
                  placeholder="ex. 123.456.789-10"
                  iconName="credit-card-outline"
                  textColor={theme["text-basic-color"]}
                />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label="Data de nascimento *"
                  placeholder="ex. 01/02/2002"
                  iconName="calendar-outline"
                  textColor={theme["text-basic-color"]}
                />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label="Telefone *"
                  placeholder="ex. (77) 9 1234-5678"
                  iconName="phone-outline"
                  textColor={theme["text-basic-color"]}
                />
              </Layout>
              <ButtonGlobal
                title="Próximo"
                appeareances=""
                onPress={() => navigation.navigate("Login")}
              />
            </Layout>
          </Layout>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
