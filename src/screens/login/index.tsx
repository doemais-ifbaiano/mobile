import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CheckBox, Layout, Text, Button } from "@ui-kitten/components";
import React, { useState, useEffect } from "react";
import { 
  Image, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  View, 
  Alert, 
  Keyboard 
} from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import ButtonGlobal from "../../components/buttons/buttonGlobal";
import styles from "./styles";
import InputIconLeft from "../../components/inputs/inputIconLeft";
import InputIconLeftAndRight from "../../components/inputs/inputIconsLeftAndRight";
import ButtonEnterGoogle from "../../components/buttons/buttonEnterGoogle";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LoginParamsList = NativeStackNavigationProp<RoutesParams, "Login">;

export default function LoginScreen() {
  const navigation = useNavigation<LoginParamsList>();
  const [checked, setChecked] = useState(false); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Verificar se o usuário já está logado ao abrir o app
  useEffect(() => {
    const checkLoginStatus = async () => {
      const keepLoggedIn = await AsyncStorage.getItem("keepLoggedIn");
      if (keepLoggedIn === "true") {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            navigation.replace("HomePage");
          }
        });
      }
    };
    checkLoginStatus();
  }, []);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  // Função de login
  const handleLogin = async () => {
    Keyboard.dismiss(); 
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (checked) {
        await AsyncStorage.setItem("keepLoggedIn", "true");
      } else {
        await AsyncStorage.removeItem("keepLoggedIn"); 
      }

      navigation.replace("HomePage");
    } catch (error) {
      Alert.alert("Erro", "Credenciais inválidas ou erro ao autenticar.");
      console.error("Erro no login:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <Layout style={styles.container}>
          {/* Logo */}
          <Layout style={styles.logo}>
            <Image source={require("../../../assets/logos/logo-media.png")} />
          </Layout>

          {/* Caixa de textos */}
          <Layout style={styles.box}>
            <Text category="h1" style={styles.title}>
              Login
            </Text>
          </Layout>

          <Layout style={styles.inputs}>
            <InputIconLeft
              label={<Text>Seu e-mail <Text style={{ color: "red" }}>*</Text></Text>}
              placeholder="ex.john@doe.com"
              textColor="#ACACAC"
              iconName="person-outline"
              value={email}
              onChangeText={setEmail}
            />
            <InputIconLeftAndRight
              label={<Text>Sua senha <Text style={{ color: "red" }}>*</Text></Text>}
              placeholder="Sua senha"
              textColor="#ACACAC"
              iconLeft="lock"
              iconRight={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              secureTextEntry={!isPasswordVisible}
              onIconRightPress={togglePasswordVisibility}
              value={password}
              onChangeText={setPassword}
            />
            <Layout style={styles.checkboxContainer}>
              <CheckBox checked={checked} onChange={nextChecked => setChecked(nextChecked)}>
                Manter-me conectado(a)
              </CheckBox>
              <Button appearance="ghost" onPress={() => navigation.navigate("RecoverPassword")}>
                Esqueceu sua senha?
              </Button>
            </Layout>
          </Layout>
          
          {/* Botões */}
          <Layout style={styles.buttonContainer}>
            <ButtonGlobal title="Entrar" appeareances="" onPress={handleLogin} />
            <ButtonEnterGoogle />
            <View style={styles.divider}></View>
            <ButtonGlobal
              title="Cadastrar-me"
              appeareances=""
              onPress={() => navigation.navigate("Register1")}
            />
          </Layout>
        </Layout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
