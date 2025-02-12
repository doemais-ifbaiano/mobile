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
  Alert,
  Keyboard
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RoutesParams } from "../../navigation/routesParams";
import { styles } from "./styles";
import InputGlobal from "../../components/inputs/inputGlobal";
import InputIconLeftAndRight from "../../components/inputs/inputIconsLeftAndRight";
import ButtonGlobal from "../../components/buttons/buttonGlobal";
import { signUp } from "../../services/authService"; 
import { useRoute } from "@react-navigation/native";

type RegisterParamsList = NativeStackNavigationProp<RoutesParams, "Register2">;

export default function RegisterScreen2() {
  const navigation = useNavigation<RegisterParamsList>();
  const theme = useTheme();
  const route = useRoute();

  const { fullName, cpfCnpj, birthDate, phone } = route.params as {
    fullName: string;
    cpfCnpj: string;
    birthDate: string;
    phone: string;
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkedPrivacy, setCheckedPrivacy] = useState(false);
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(prevState => !prevState);
  };

  const handleRegister = async () => {
    Keyboard.dismiss(); 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email || !password || !confirmPassword) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "E-mail inválido. Use um formato válido.");
      return;
    }
  
    if (password.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
      return;
    }
  
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }
  
    if (!checkedPrivacy || !checkedTerms) {
      Alert.alert("Erro", "Você deve aceitar as políticas de privacidade e os termos de uso.");
      return;
    }
  
    try {
      await signUp(email, password);
  
      console.log("Usuário cadastrado com:", { fullName, cpfCnpj, birthDate, phone, email });
  
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate("Login");
    } catch (error: any) {
      Alert.alert("Erro ao cadastrar", error.message);
    }
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
                style={[
                  styles.subtitle,
                  { color: theme["text-subtitle-color"] },
                ]}
              >
                Informe seus dados para acesso ao Doe+
              </Text>
            </Layout>

            <Layout style={styles.form}>
              <Layout style={styles.inputWrapper}>
                <InputGlobal
                  label={<Text>E-mail <Text style={{ color: "red" }}>*</Text></Text>}
                  placeholder="ex. email@exemplo.com"
                  iconName="email-outline"
                  textColor={theme["text-basic-color"]}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
              </Layout>

              <Layout style={styles.inputWrapper}>
                <InputIconLeftAndRight
                  label={<Text>Senha <Text style={{ color: "red" }}>*</Text></Text>}
                  placeholder="Digite sua senha"
                  iconLeft="lock-outline"
                  iconRight={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                  secureTextEntry={!isPasswordVisible}
                  onIconRightPress={togglePasswordVisibility}
                  textColor={theme["text-basic-color"]}
                  value={password}
                  onChangeText={setPassword}
                />
              </Layout>

              <Layout style={styles.inputWrapper}>
                <InputIconLeftAndRight
                  label={<Text>Confirmar senha <Text style={{ color: "red" }}>*</Text></Text>}
                  placeholder="Confirme sua senha"
                  iconLeft="lock-outline"
                  iconRight={isConfirmPasswordVisible ? "eye-off-outline" : "eye-outline"}
                  secureTextEntry={!isConfirmPasswordVisible}
                  onIconRightPress={toggleConfirmPasswordVisibility}
                  textColor={theme["text-basic-color"]}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </Layout>

              <Layout style={styles.checkboxContainer}>
                <Layout style={styles.checkboxWrapper}>
                  <CheckBox
                    checked={checkedPrivacy}
                    onChange={(nextChecked) => setCheckedPrivacy(nextChecked)}
                  />
                  <Text style={{ marginLeft: 8 }}>
                    Aceito as{" "}
                    <Text style={{ color: "#A037FC" }}>
                      Políticas de Privacidade
                    </Text>
                  </Text>
                </Layout>

                <Layout style={styles.checkboxWrapper}>
                  <CheckBox
                    checked={checkedTerms}
                    onChange={(nextChecked) => setCheckedTerms(nextChecked)}
                  />
                  <Text style={{ marginLeft: 8 }}>
                    Aceito os{" "}
                    <Text style={{ color: "#A037FC" }}>Termos de Uso</Text>
                  </Text>
                </Layout>
              </Layout>

              <ButtonGlobal title="Cadastrar" appeareances="" onPress={handleRegister} />
            </Layout>
          </Layout>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
