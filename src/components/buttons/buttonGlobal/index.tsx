import React from "react";
import { Button } from "@ui-kitten/components";
import styles from "./styles";

interface ButtonGlobalProps {
  title: string;
  onPress: () => void;
}

export default function ButtonGlobal({ title, onPress }: ButtonGlobalProps) {
  return (
    <Button style={styles.button} onPress={onPress}>
      {title}
    </Button>
  );
}
