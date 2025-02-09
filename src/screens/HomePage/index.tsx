import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Layout, Input, useTheme, Icon, Text, Button, Popover, List, ListItem } from "@ui-kitten/components";
import React, { useState } from "react";
import { TouchableOpacity, Image} from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import HeaderMenu from "../../components/menus/headerMenu";
import styles from "./styles";

type LandingPageParamsList = NativeStackNavigationProp<RoutesParams, "HomePage">;

export default function HomePageScreen() {
  const navigation = useNavigation<LandingPageParamsList>();
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Filtrar");

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setVisible(false);
  };

  // Lista de instituições com imagens e descrições
  const apaeImg = require("../../../assets/logos/apae.png");
  const sosAnimaisImg = require("../../../assets/logos/sosAnimaisDeRua.png");
  const fundacaoArtesImg = require("../../../assets/logos/fundacaoCantosDasArtes.png");
  const institutions = [
    { id: 1, name: "APAE", image: apaeImg, description: "APAE - Associação de Pais e Amigos dos Excepcionais" },
    { id: 2, name: "SOS Animais de Rua", image: sosAnimaisImg, description: "SOS Animais de Rua" },
    { id: 3, name: "Fundação Canto das Artes", image: fundacaoArtesImg, description: "Fundação Cantos das Artes" },
  ];

  return (
    <Layout style={styles.container}>
        <HeaderMenu/>
        <Input 
            style={styles.input}
            placeholder="Pesquisar instituição"
            accessoryLeft={(props) => (
              <Icon 
                {...props} 
                name="search" 
                fill="#A037FC" 
                style={{ width: 24, height: 24 }} 
              />
            )}
        />

        <Layout style={styles.box}>
            <Text category="h1" style={styles.title}>
                Instituições Parceiras
            </Text>
        </Layout>
        
        {/* Botão Dropdown */}
        <Popover
          visible={visible}
          anchor={() => (
            <Button  
            style={styles.buttonDropDowm}
            onPress={() => setVisible(!visible)}
            accessoryRight={(props) => (
              <Icon {...props} name={visible ? "chevron-up" : "chevron-down"} 
              style={{ width: 20, height: 24 }} />
            )}>
              {selectedOption}
            </Button>
          )}
          onBackdropPress={() => setVisible(false)}
        >
          <Layout style={{ padding: 10, borderRadius: 8 }}>
            {["Opção 1", "Opção 2", "Opção 3"].map((option, index) => (
              <TouchableOpacity key={index} onPress={() => handleSelectOption(option)}>
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </Layout>
        </Popover>

        {/* Cards de Instituições */}
        <Layout style={styles.cardsContainer}>
          {institutions.map((institution) => (
            <Layout key={institution.id} style={styles.card}>
              <Image 
                source={institution.image} 
                style={styles.cardImage} 
                resizeMode="cover"
              />
              <Text style={styles.cardDescription}>
                {institution.description}
              </Text>
              <Button style={styles.cardButton}>
                Veja Mais
              </Button>
            </Layout>
          ))}
        </Layout>

        {/* Cards de Instituições */}
        <Layout style={styles.cardsContainer}>
          {institutions.map((institution) => (
            <Layout key={institution.id} style={styles.card}>
              <Image 
                source={institution.image} 
                style={styles.cardImage} 
                resizeMode="cover"
              />
              <Text style={styles.cardDescription}>
                {institution.description}
              </Text>
              <Button style={styles.cardButton}>
                Veja Mais
              </Button>
            </Layout>
          ))}
        </Layout>
      
    </Layout>
  );
}
