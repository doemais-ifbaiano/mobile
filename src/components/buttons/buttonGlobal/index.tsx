import React from "react";
import { Button } from "@ui-kitten/components";
import styles from "./styles";

interface ButtonGlobalProps {
  title: string;
  appeareances: string;
  onPress: () => void;
}

export default function ButtonGlobal({ title, onPress, appeareances }: ButtonGlobalProps) {
  return (
    <Button 
    style={styles.button} 
    onPress={onPress}
    appearance={appeareances}>
      {title}
    </Button>
  );
}
