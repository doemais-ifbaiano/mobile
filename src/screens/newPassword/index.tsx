import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Layout, Text, useTheme, Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert, Keyboard } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import ButtonGlobal from "../../components/buttons/buttonGlobal";
import styles from "./styles";
import InputIconLeftAndRight from "../../components/inputs/inputIconsLeftAndRight";

type NewPasswordParamsList = NativeStackNavigationProp<RoutesParams, "NewPassword">;

export default function NewPasswordScreen() {
  const navigation = useNavigation<NewPasswordParamsList>();
  const theme = useTheme();

  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(prevState => !prevState);
  };

  const handleSave = () => {
    Keyboard.dismiss();
    if (!newPassword.trim() || !confirmPassword.trim()) {
      Alert.alert("Erro", "Os campos não podem estar vazios!");
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert("Erro", "A senha deve ter no mínimo 6 caracteres!");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
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

          <Layout style={styles.logo}>
            <Image source={require("../../../assets/logos/logo-media.png")} />
          </Layout>

          <Layout style={styles.box}>
            <Text category="h1" style={styles.title}>Cadastrar nova senha</Text>
            <Text category="h6" style={styles.text}>Digite sua nova senha</Text>
          </Layout>

          <Layout style={styles.inputs}>
            <InputIconLeftAndRight
              label={<Text>Senha <Text style={{ color: "red" }}>*</Text></Text>}
              placeholder="Sua nova senha"
              iconLeft="lock"
              iconRight={isNewPasswordVisible ? "eye-off-outline" : "eye-outline"}
              secureTextEntry={!isNewPasswordVisible}
              onIconRightPress={toggleNewPasswordVisibility}
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <InputIconLeftAndRight
              label={<Text>Confirmar senha <Text style={{ color: "red" }}>*</Text></Text>}
              placeholder="Confirmar sua nova senha"
              iconLeft="lock"
              iconRight={isConfirmPasswordVisible ? "eye-off-outline" : "eye-outline"}
              secureTextEntry={!isConfirmPasswordVisible}
              onIconRightPress={toggleConfirmPasswordVisibility}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </Layout>

          <Layout style={styles.buttonContainer}>
            <ButtonGlobal title="Salvar" appeareances="" onPress={handleSave} />
          </Layout>
        </Layout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
