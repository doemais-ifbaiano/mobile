import React, { ReactNode } from "react";
import { Input, Text, IconElement, Icon } from "@ui-kitten/components";
import { styles } from "./styles";

interface InputGlobalProps {
  label: ReactNode;
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
      fill="#ACACAC"
    />
  );

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
      />
    </>
  );
}
