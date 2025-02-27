import React from "react";
import { Button } from "@ui-kitten/components";
import { StyleProp, ViewStyle, Text } from "react-native";
import styles from "./styles";

interface ButtonGlobalProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
}

export default function ButtonGlobal({ title, onPress, style, textColor = "#FFF" }: ButtonGlobalProps) {
  return (
    <Button style={[styles.button, style]} onPress={onPress}>
      {() => <Text style={{ color: textColor, fontWeight: "bold" }}>{title}</Text>}
    </Button>
  );
}
