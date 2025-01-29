import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { CheckBox, Layout, Text, useTheme, Icon } from "@ui-kitten/components";
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

type RegisterParamsList = NativeStackNavigationProp<RoutesParams, "Register2">;

export default function RegisterScreen() {
  const navigation = useNavigation<RegisterParamsList>();
  const theme = useTheme();

  const [checkedPrivacy, setCheckedPrivacy] = useState(false); // Estado para Políticas de Privacidade
  const [checkedTerms, setCheckedTerms] = useState(false); // Estado para Termos de Uso

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
                Informe seus dados para acesso ao Doe+
              </Text>
            </Layout>

            {/* Formulário */}
            <Layout style={styles.form}>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label={<Text>E-mail <Text style={{ color: "red" }}>*</Text></Text>}
                  placeholder="ex. Maria Pereira Santos"
                  iconName="person-outline"
                  textColor={theme["text-basic-color"]}
                />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label={<Text>Senha <Text style={{ color: "red" }}>*</Text></Text>}
                  placeholder="ex. 123.456.789-10"
                  iconName="credit-card-outline"
                  textColor={theme["text-basic-color"]}
                />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label={<Text>Confirmar senha <Text style={{ color: "red" }}>*</Text></Text>}
                  placeholder="ex. 01/02/2002"
                  iconName="calendar-outline"
                  textColor={theme["text-basic-color"]}
                />
              </Layout>

              {/* Checkboxes */}
              <Layout style={styles.checkboxContainer}>
                <Layout style={styles.checkboxWrapper}>
                  <CheckBox
                    checked={checkedPrivacy}
                    onChange={nextChecked => setCheckedPrivacy(nextChecked)}
                  />
                  <Text style={{ marginLeft: 8 }}>
                    Aceito as{" "}
                    <Text style={{ color: "#A037FC" }}>Políticas de Privacidade</Text>
                  </Text>
                </Layout>

                <Layout style={styles.checkboxWrapper}>
                  <CheckBox
                    checked={checkedTerms}
                    onChange={nextChecked => setCheckedTerms(nextChecked)}
                  />
                  <Text style={{ marginLeft: 8 }}>
                    Aceito os{" "}
                    <Text style={{ color: "#A037FC" }}>Termos de Uso</Text>
                  </Text>
                </Layout>
              </Layout>

              <ButtonGlobal
                title="Cadastrar"
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
