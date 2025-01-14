import React from "react";
import { Input, Text, IconElement, Icon } from "@ui-kitten/components"; 
import { styles } from "./styles";

interface InputGlobalProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  textColor?: string;
  iconLeft?: string;
  iconRight?: string;
}

export default function InputIconLeftAndRight({
  label,
  placeholder,
  secureTextEntry = false,
  textColor,
  iconLeft,
  iconRight,
}: InputGlobalProps) {

  const left = (props: any): IconElement => (
    <Icon
      {...props}
      name={iconLeft || "home"}
    />
  );

  const right = (props: any): IconElement => (
    <Icon
      {...props}
      name={iconRight || "home"}
    />
  );

  return (
    <>
      {/* Título (Label) */}
      <Text>{label}</Text>
      
      {/* Input */}
      <Input
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={textColor}
        accessoryLeft={left} 
        accessoryRight={right}
      />
    </>
  );
}
