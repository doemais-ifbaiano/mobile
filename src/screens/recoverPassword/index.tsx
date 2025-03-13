import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Layout, Text, useTheme, Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import ButtonGlobal from "../../components/buttons/buttonGlobal";
import styles from "./styles";
import InputGlobal from "../../components/inputs/inputGlobal";
import Toast from 'react-native-toast-message';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

type RecoverPasswordParamsList = NativeStackNavigationProp<RoutesParams, "RecoverPassword">;

export default function RecoverPasswordScreen() {
  const navigation = useNavigation<RecoverPasswordParamsList>();
  const theme = useTheme();
  const [email, setEmail] = useState<string>("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleRecovery = async () => {
    if (!isValidEmail(email)) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Erro!',
        text2: 'Por favor, insira um e-mail válido.',
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'E-mail enviado!',
        text2: 'Um link para recuperação foi enviado para o seu e-mail.',
        visibilityTime: 3000,
        autoHide: true,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Erro ao enviar e-mail!',
        text2: 'Verifique se o e-mail está correto e tente novamente.',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <Layout style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Login")}>
              <Icon name="arrow-back" fill={theme["black"]} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>

            <Layout style={styles.logo}>
              <Image source={require("../../../assets/logos/logo-media.png")} />
            </Layout>

            <Layout style={styles.box}>
              <Text category="h1" style={styles.title}>Esqueci minha senha</Text>
              <Text category="h6" style={styles.text}>Insira seu e-mail cadastrado para iniciar o processo de recuperação de conta.</Text>
            </Layout>

            <Layout style={styles.inputs}>
              <InputGlobal
                label={<Text>Seu e-mail <Text style={{ color: "red" }}>*</Text></Text>}
                placeholder="ex.john@doe.com"
                iconName="person-outline"
                value={email}
                onChangeText={(text: string) => setEmail(text)}
                keyboardType="email-address"
              />
            </Layout>

            <Layout style={styles.buttonContainer}>
              <ButtonGlobal title="Enviar link de recuperação" onPress={handleRecovery} />
            </Layout>
          </Layout>
        </ScrollView>
      </TouchableWithoutFeedback>
      <Toast />
    </KeyboardAvoidingView>
  );
}