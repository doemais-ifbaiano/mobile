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
  onIconRightPress?: () => void;
}

export default function InputIconLeftAndRight({
  label,
  placeholder,
  secureTextEntry = false,
  textColor,
  iconLeft,
  iconRight,
  onIconRightPress, 
}: InputGlobalProps) {

  const left = (props: any): IconElement => (
    <Icon
      {...props}
      name={iconLeft || "home"}
      fill="black" 
    />
  );

  const right = (props: any): IconElement => (
    <Icon
      {...props}
      name={iconRight || "eye-outline"} 
      fill="#B562FE" 
    />
  );

  return (
    <>
      {/* Título (Label) */}
      <Text category="h6" style={styles.labelText}>{label}</Text>
      
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
            fill="#B562FE"
            onPress={onIconRightPress} 
          />
        )}
      />
    </>
  );
}
