import React from "react";
import { Input, Text, Icon } from "@ui-kitten/components";
import { View } from "react-native";
import { styles } from "./styles";

interface InputGlobalProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  textColor?: string;
  iconName?: string;
}

export default function InputGlobal({
  label,
  placeholder,
  secureTextEntry = false,
  textColor,
  iconName,
}: InputGlobalProps) {

  const renderIcon = (props: any) => (
    <>{iconName && <Icon {...props} name={iconName} fill="#ACACAC" />}</>
  );

  return (
    <View>
      {/* Título (Label) */}
      <Text>{label}</Text>

      {/* Input com ícone à esquerda */}
      <Input
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={textColor}
        accessoryLeft={iconName ? renderIcon : undefined}
      />
    </View>
  );
}
