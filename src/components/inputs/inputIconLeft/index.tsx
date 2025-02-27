import React, { ReactNode } from "react";
import { Input, Icon, IconElement } from "@ui-kitten/components";
import { styles } from "./styles";

interface InputGlobalProps {
  label: ReactNode;
  placeholder?: string;
  secureTextEntry?: boolean;
  textColor?: string;
  iconName?: string;
  value: string;
  onChangeText?: (text: string) => void;
  editable?: boolean; // Adicionado para permitir inputs desativados
}

export default function InputIconLeft({
  label,
  placeholder = "",
  secureTextEntry = false,
  textColor,
  iconName,
  value,
  onChangeText,
  editable = true,
}: InputGlobalProps) {
  const icon = (props: any): IconElement => (
    <Icon
      {...props}
      name={iconName || "home"}
      fill="#ACACAC"
    />
  );

  return (
    <>
      {label}
      <Input
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={textColor}
        accessoryLeft={icon}
        value={value}
        onChangeText={onChangeText}
        editable={editable} // Agora suporta inputs desativados corretamente
      />
    </>
  );
}
