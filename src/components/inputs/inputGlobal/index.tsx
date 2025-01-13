import React from "react";
import { Input, Text } from "@ui-kitten/components"; 
import { styles } from "./styles";

interface InputGlobalProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

export default function InputGlobal({
  label,
  placeholder,
  secureTextEntry = false,
}: InputGlobalProps) {
  return (
    <>
      {/* Título (Label) */}
      <Text style={styles.label}>{label}</Text>
      
      {/* Input */}
      <Input
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#B0B0B0"
      />
    </>
  );
}
