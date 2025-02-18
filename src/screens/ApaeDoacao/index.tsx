import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import HeaderMenu from "../../components/menus/headerMenu";
import styles from "./styles";

type ApaeParamsList = NativeStackNavigationProp<RoutesParams, "Apae">;

const ApaeScreen: React.FC = () => {
  const navigation = useNavigation<ApaeParamsList>();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <HeaderMenu /> 
      <Image source={require("../../../assets/logos/apae.png")} style={styles.logo} />
      <Text style={styles.title}>Associação de Pais e Amigos dos Excepcionais (APAE)</Text>
      <Text style={styles.text}>
        A Associação de Pais e Amigos dos Excepcionais (Apae) Itapetinga é uma instituição filantrópica,
        sem fins lucrativos, que tem a finalidade de prestar assistência integral às pessoas com
        deficiência intelectual.
      </Text>
      <Text style={styles.text}>
        Para manter a sua atividade fim, a instituição oferece diversos serviços à comunidade que
        propiciam a sua viabilidade econômica. Os recursos arrecadados com os serviços são revertidos
        para o atendimento à pessoa com deficiência.
      </Text>
      <Text style={styles.subtitle}>Missão do CER II/APAE</Text>
      <Text style={styles.text}>
        Proporcionar autonomia e independência, reduzir as incapacidades e prevenir possíveis agravamentos
        respeitando os limites, potencialidades e habilidades do usuário, contribuindo para a sua inclusão
        social e melhor qualidade de vida.
      </Text>

      <Text style={styles.subtitle}>Sua doação transforma vidas!</Text>
      <Text style={styles.text}>
        Com a sua ajuda, podemos proporcionar mais autonomia, inclusão e qualidade de vida para pessoas
        que precisam. Seja parte dessa mudança e ajude a construir um futuro melhor para todos!
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Doação Financeira</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Doação Material</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ApaeScreen;