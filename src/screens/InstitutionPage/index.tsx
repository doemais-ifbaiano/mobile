import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView, Image } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import HeaderMenu from "../../components/menus/headerMenu";
import styles from "./styles";
import { TouchableOpacity, Text as RNText } from "react-native";

export default function InstitutionPage() {
    const navigation = useNavigation<NativeStackNavigationProp<RoutesParams, "InstitutionPage">>();

    return (
        <Layout style={styles.container}>
            <HeaderMenu />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Layout style={styles.headerSection}>
                    <Image source={require("../../../assets/logos/apae.png")} style={styles.logo} />
                    <Text category="h1" style={styles.title}>
                        Associação de Pais e Amigos do Excepcionais (APAE)
                    </Text>
                    <Text style={styles.description}>
                        A Associação de Pais e Amigos dos Excepcionais (Apae) Itapetinga é uma instituição
                        filantrópica, sem fins lucrativos, que tem a finalidade de prestar assistência integral
                        às pessoas com deficiência intelectual.
                    </Text>
                </Layout>

                <Layout style={styles.contentSection}>
                    <Text style={styles.text}>
                        Para manter a sua atividade fim, a instituição oferece diversos serviços à comunidade
                        que propiciam a sua viabilidade econômica. Os recursos arrecadados com os serviços são
                        revertidos para o atendimento à pessoa com deficiência.
                    </Text>
                </Layout>

                <Layout style={styles.imageGallery}>
                    <Image source={require("../../../assets/logos/apae.png")} style={styles.image} />
                    <Image source={require("../../../assets/logos/apae.png")} style={styles.image} />
                    <Image source={require("../../../assets/logos/apae.png")} style={styles.image} />
                </Layout>

                <Layout style={styles.contentSection}>
                    <Text category="h2" style={styles.subtitle}>
                        Missão do CER II/APAE
                    </Text>
                    <Text style={styles.text}>
                        Proporcionar autonomia e independência, reduzir as incapacidades e prevenir possíveis
                        agravamentos respeitando os limites, potencialidades e habilidades do usuário,
                        contribuindo para a sua inclusão social e melhor qualidade de vida.
                    </Text>
                </Layout>

                <Layout style={styles.donationSection}>
                    <Text category="h2" style={styles.subtitle}>
                        Sua doação transforma vidas!
                    </Text>
                    <Text style={styles.text}>
                        Com a sua ajuda, podemos proporcionar mais autonomia, inclusão e qualidade de vida para
                        pessoas que precisam. Seja parte dessa mudança e ajude a construir um futuro melhor para
                        todos!
                    </Text>
                    <Layout style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.donationButton} onPress={() => navigation.navigate("FinancialDonation")}>
                            <RNText style={styles.buttonText}>Doação Financeira</RNText>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.donationButton} onPress={() => navigation.navigate("MaterialDonation")}>
                            <RNText style={styles.buttonText}>Doação Material</RNText>
                        </TouchableOpacity>


                    </Layout>
                </Layout>
            </ScrollView>
        </Layout>
    );
}
