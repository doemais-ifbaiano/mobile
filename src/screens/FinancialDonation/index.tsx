import { Layout, Text, Button, Input } from "@ui-kitten/components";
import React, { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import HeaderMenu from "../../components/menus/headerMenu";

export default function FinancialDonation() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  return (
    <Layout style={styles.container}>
      <HeaderMenu />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text category="h1" style={styles.title}>
          Doação Financeira
        </Text>
        <Text style={styles.description}>
          Transforme empatia em ação. Doe e veja como a generosidade pode mudar vidas.
        </Text>
        
        <Layout style={styles.amountContainer}>
          {[5, 20, 30, 40, 50, 100].map((amount) => (
            <TouchableOpacity
              key={amount}
              style={[styles.amountButton, selectedAmount === amount && styles.selectedAmount]}
              onPress={() => handleAmountSelect(amount)}
            >
              <Text style={[styles.amountText, selectedAmount === amount && styles.selectedText]}>
                R$ {amount},00
              </Text>
            </TouchableOpacity>
          ))}
        </Layout>

        <Text style={styles.inputLabel}>Para outros valores, digite abaixo</Text>
        <Input
          style={styles.input}
          placeholder="R$ Digite um valor"
          keyboardType="numeric"
          value={customAmount}
          onChangeText={(text) => {
            setCustomAmount(text);
            setSelectedAmount(null);
          }}
        />
        
        <Button style={styles.donateButton} onPress={() => {}}>
          Doar via Mercado Pago
        </Button>
      </ScrollView>
    </Layout>
  );
}
