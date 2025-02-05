import React, { ReactNode } from "react";
import { Input, Icon, IconElement } from "@ui-kitten/components";
import { styles } from "./styles";

// Expansão do tipo InputGlobalProps para incluir value e onChangeText
interface InputGlobalProps {
  label: ReactNode;
  placeholder: string;
  secureTextEntry?: boolean;
  textColor?: string;
  iconLeft?: string;
  iconRight?: string;
  onIconRightPress?: () => void;
  value: string; // Adiciona a propriedade value para controlar o valor do input
  onChangeText: (text: string) => void; // Adiciona a função onChangeText para atualizar o valor
}

export default function InputIconLeftAndRight({
  label,
  placeholder,
  secureTextEntry = false,
  textColor,
  iconLeft,
  iconRight,
  onIconRightPress,
  value,
  onChangeText,
}: InputGlobalProps) {

  // Função para renderizar o ícone da esquerda
  const left = (props: any): IconElement => (
    <Icon
      {...props}
      name={iconLeft || "home"}
      fill="#ACACAC"
    />
  );

  // Função para renderizar o ícone da direita
  const right = (props: any): IconElement => (
    <Icon
      {...props}
      name={iconRight || "eye-outline"}
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
        accessoryLeft={left}
        accessoryRight={() => (
          <Icon
            name={iconRight || "eye-outline"}
            fill="#ACACAC"
            onPress={onIconRightPress}
          />
        )}
        value={value} // Passa o valor para o input
        onChangeText={onChangeText} // Passa a função para atualizar o valor
      />
    </>
  );
}
