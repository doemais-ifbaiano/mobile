import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import * as Google from "expo-auth-session/providers/google";
import Constants from "expo-constants";
import { signInWithGoogle } from "../../../services/authService";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function ButtonEnterGoogle() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: Constants.expoConfig?.extra?.expoClientId,
    androidClientId: Constants.expoConfig?.extra?.androidClientId,
    iosClientId: Constants.expoConfig?.extra?.iosClientId,
    redirectUri: "https://doe-mais-8892d.firebaseapp.com/__/auth/handler",
  });

  useEffect(() => {
    const handleGoogleSignIn = async () => {
      if (response?.type === "success") {
        await signInWithGoogle(response);
      }
    };

    handleGoogleSignIn();
  }, [response]); 

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
        <Image
          style={styles.icon}
          source={require("../../../../assets/flat-color-icons_google.png")}
        />
        <Text>Entrar com Google</Text>
      </TouchableOpacity>
    </View>
  );
}
