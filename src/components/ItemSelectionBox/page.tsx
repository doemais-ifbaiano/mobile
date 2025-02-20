import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckBox } from "@ui-kitten/components";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

interface ItemSelectionBoxProps {
  title: string;
  items: string[];
  onItemChange: (items: Record<string, number>) => void; // ✅ Adicionado
}

export default function ItemSelectionBox({ title, items, onItemChange }: ItemSelectionBoxProps) {
  const [selectedItems, setSelectedItems] = useState<Record<string, { checked: boolean; quantity: number }>>(
    items.reduce((acc, item) => {
      acc[item] = { checked: false, quantity: 1 };
      return acc;
    }, {} as Record<string, { checked: boolean; quantity: number }>)
  );

  const updateParentState = (updatedItems: Record<string, { checked: boolean; quantity: number }>) => {
    // Filtra os itens selecionados e mapeia para { item: quantidade }
    const selected = Object.entries(updatedItems)
      .filter(([_, value]) => value.checked)
      .reduce((acc, [key, value]) => {
        acc[key] = value.quantity;
        return acc;
      }, {} as Record<string, number>);

    onItemChange(selected); // ✅ Notifica o componente pai
  };

  const toggleCheck = (item: string) => {
    const updatedItems = {
      ...selectedItems,
      [item]: { ...selectedItems[item], checked: !selectedItems[item].checked },
    };
    setSelectedItems(updatedItems);
    updateParentState(updatedItems);
  };

  const changeQuantity = (item: string, delta: number) => {
    const updatedItems = {
      ...selectedItems,
      [item]: {
        ...selectedItems[item],
        quantity: Math.max(1, selectedItems[item].quantity + delta),
      },
    };
    setSelectedItems(updatedItems);
    updateParentState(updatedItems);
  };

  return (
    <View style={styles.boxContainer}>
      <Text style={styles.boxTitle}>{title}</Text>
      {items.map((item) => (
        <View key={item} style={styles.itemRow}>
          <CheckBox
            checked={selectedItems[item].checked}
            onChange={() => toggleCheck(item)}
          />
          <Text style={styles.itemText}>{item}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => changeQuantity(item, -1)}>
              <AntDesign name="minus" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{selectedItems[item].quantity}</Text>
            <TouchableOpacity onPress={() => changeQuantity(item, 1)}>
              <AntDesign name="plus" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}
