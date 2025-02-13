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
  fill?: string;
}

export default function SearchBox({
  label,
  placeholder,
  secureTextEntry = false,
  textColor,
  iconName,
  fill = "#ACACAC",
}: InputGlobalProps) {

  const renderIcon = (props: any) => (
    <>{iconName && <Icon {...props} name={iconName} fill={fill} />}</>
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
      />
    </View>
  );
}
