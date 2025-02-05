import React, { ReactNode } from "react";
import { Input, Icon, IconElement } from "@ui-kitten/components";
import { styles } from "./styles";

// Expansão do tipo InputGlobalProps para incluir value e onChangeText
interface InputGlobalProps {
  label: ReactNode;
  placeholder: string;
  secureTextEntry?: boolean;
  textColor?: string;
  iconName?: string;
  value: string; // Adiciona a propriedade value para controlar o valor do input
  onChangeText: (text: string) => void; // Adiciona a função onChangeText para atualizar o valor
}

export default function InputIconLeft({
  label,
  placeholder,
  secureTextEntry = false,
  textColor,
  iconName,
  value,
  onChangeText,
}: InputGlobalProps) {

  // Função para renderizar o ícone
  const icon = (props: any): IconElement => (
    <Icon
      {...props}
      name={iconName || "home"} // Ícone padrão caso o iconName não seja passado
      fill="#ACACAC"
    />
  );

  return (
    <>
      {/* Título (Label) */}
      {label}

      {/* Input */}
      <Input
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={textColor}
        accessoryLeft={icon}
        value={value} // Passa o valor para o input
        onChangeText={onChangeText} // Passa a função para atualizar o valor
      />
    </>
  );
}
