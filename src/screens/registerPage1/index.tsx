import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Layout, Text, useTheme, Icon } from "@ui-kitten/components";
import {
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message"; 
import { RoutesParams } from "../../navigation/routesParams";
import { styles } from "./styles";
import InputGlobal from "../../components/inputs/inputGlobal";
import ButtonGlobal from "../../components/buttons/buttonGlobal";
import { maskCpfCnpj, maskDate, maskPhone } from "../../utils/masks";

type RegisterParamsList = NativeStackNavigationProp<RoutesParams, "Register1">;

export default function RegisterScreen() {
  const navigation = useNavigation<RegisterParamsList>();
  const theme = useTheme();

  const [fullName, setFullName] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");

  function isValidCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return false;
    }
    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false;
    }
    return true;
  }

  const handleNext = () => {
    Keyboard.dismiss(); 
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  
    if (!fullName || !cpfCnpj || !birthDate || !phone) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Erro",
        text2: "Por favor, preencha todos os campos obrigatórios.",
      });
      return;
    }
  
    if (!nameRegex.test(fullName)) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Erro",
        text2: "Nome inválido. Use apenas letras e espaços.",
      });
      return;
    }
  
    if (!isValidCPF(cpfCnpj)) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Erro",
        text2: "CPF inválido. Verifique o formato.",
      });
      return;
    }
  
    if (!dateRegex.test(birthDate)) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Erro",
        text2: "Data de nascimento inválida. Use o formato DD/MM/AAAA.",
      });
      return;
    }
  
    if (!phoneRegex.test(phone)) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Erro",
        text2: "Número de telefone inválido. Use o formato (99) 99999-9999.",
      });
      return;
    }
  
    navigation.navigate("Register2", {
      fullName,
      cpfCnpj,
      birthDate,
      phone,
    });
  };

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
              <Text category="h4" style={[styles.title, { color: theme["text-basic-color"] }]}>
                Cadastrar usuário
              </Text>
              <Text category="s1" style={[styles.subtitle, { color: theme["text-subtitle-color"] }]}>
                Informe seus dados pessoais
              </Text>
            </Layout>

            {/* Formulário */}
            <Layout style={styles.form}>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label={<Text>Nome completo <Text style={{ color: "red" }}>*</Text></Text>}
                  placeholder="ex. Maria Pereira Santos"
                  iconName="person-outline"
                  textColor={theme["text-basic-color"]}
                  value={fullName}
                  onChangeText={setFullName}
                  keyboardType="default"
                />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label={<Text>CPF/CNPJ <Text style={{ color: "red" }}>*</Text></Text>}
                  placeholder="ex. 123.456.789-10"
                  iconName="credit-card-outline"
                  textColor={theme["text-basic-color"]}
                  value={cpfCnpj}
                  onChangeText={(text) => setCpfCnpj(maskCpfCnpj(text))}
                  keyboardType="numeric"
                />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label={<Text>Data de nascimento <Text style={{ color: "red" }}>*</Text></Text>}
                  placeholder="ex. 01/02/2002"
                  iconName="calendar-outline"
                  textColor={theme["text-basic-color"]}
                  value={birthDate}
                  onChangeText={(text) => setBirthDate(maskDate(text))}
                  keyboardType="numeric"
                />
              </Layout>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label={<Text>Telefone <Text style={{ color: "red" }}>*</Text></Text>}
                  placeholder="ex. (77) 9 1234-5678"
                  iconName="phone-outline"
                  textColor={theme["text-basic-color"]}
                  value={phone}
                  onChangeText={(text) => setPhone(maskPhone(text))}
                  keyboardType="phone-pad"
                />
              </Layout>
              <ButtonGlobal title="Próximo" appeareances="" onPress={handleNext} />
            </Layout>
          </Layout>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Toast component */}
      <Toast />
    </SafeAreaView>
  );
}