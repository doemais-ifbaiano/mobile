import React, { ReactNode } from "react";
import { Input, Icon } from "@ui-kitten/components";
import { View } from "react-native";
import { styles } from "./styles";

interface InputGlobalProps {
  label: ReactNode;
  placeholder: string;
  secureTextEntry?: boolean;
  textColor?: string;
  iconName?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad"; 
}

export default function InputGlobal({
  label,
  placeholder,
  secureTextEntry = false,
  textColor,
  iconName,
  value,
  onChangeText,
  keyboardType = "default", 
}: InputGlobalProps) {

  const renderIcon = (props: any) => (
    <>{iconName && <Icon {...props} name={iconName} fill="#ACACAC" />}</>
  );

  return (
    <View>
      {/* Título (Label) */}
      {label}

      {/* Input com ícone à esquerda */}
      <Input
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={textColor}
        accessoryLeft={iconName ? renderIcon : undefined}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType} 
      />
    </View>
  );
}
