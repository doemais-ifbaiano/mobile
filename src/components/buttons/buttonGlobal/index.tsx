import React from "react";
import { Button } from "@ui-kitten/components";
import { StyleProp, ViewStyle, Text } from "react-native";
import styles from "./styles";

interface ButtonGlobalProps {
  title: string;
  appeareances: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textColor?: string; // Adicionando a opção para personalizar a cor do texto
}

export default function ButtonGlobal({ title, onPress, appeareances, style, textColor }: ButtonGlobalProps) {
  return (
    <Button style={[styles.button, style]} onPress={onPress} appearance={appeareances}>
      {() => <Text style={{ color: textColor, fontWeight: "bold" }}>{title}</Text>} 
      {/* Envolvendo o texto em um <Text> estilizado */}
    </Button>
  );
}
