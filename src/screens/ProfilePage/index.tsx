import React from "react";
import { Layout, Text, Button, Avatar, Spinner } from "@ui-kitten/components";
import { View, ScrollView } from "react-native";
import { useAuth } from "../../hooks/useAuth"; // Corrigido o import
import HeaderMenu from "../../components/menus/headerMenu";
import InputIconLeft from "../../components/inputs/inputIconLeft";
import styles from "./styles";

export default function ProfileScreen() {
  const { user, loading } = useAuth(); // Corrigido para useAuth

  if (loading) {
    return (
      <Layout style={styles.container}>
        <HeaderMenu />
        <View style={styles.loadingContainer}>
          <Spinner />
          <Text>Carregando...</Text>
        </View>
      </Layout>
    );
  }

  return (
    <Layout style={styles.container}>
      <HeaderMenu />
      <Text style={styles.meuPerfilText}>Meu Perfil</Text>

      <ScrollView style={{ flex: 1 }}>
        {/* Avatar e Nome */}
        <View style={styles.profileHeader}>
          <Avatar source={{ uri: user?.photoURL || "https://via.placeholder.com/150" }} style={styles.avatar} />
          <Text style={styles.userName}>{user?.name || "Usuário"}</Text>
        </View>

        {/* Dados Pessoais */}
        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        <InputIconLeft label="Nome completo" value={user?.name || ""} iconName="person" editable={false} />
        <InputIconLeft label="Telefone" value={user?.phone || ""} iconName="phone" editable={false} />
        <InputIconLeft label="CPF/CNPJ" value={user?.cpf || ""} iconName="file-text" editable={false} />
        <InputIconLeft label="Data de Nascimento" value={user?.birthDate || ""} iconName="calendar" editable={false} />

        {/* Atualizar Dados */}
        <Button style={styles.updateButton}>Atualizar</Button>

        {/* Detalhes de Login */}
        <Text style={styles.sectionTitle}>Detalhes de Login</Text>
        <InputIconLeft label="E-mail" value={user?.email || ""} iconName="email" editable={false} />
        <InputIconLeft label="Senha" value="********" iconName="lock" secureTextEntry editable={false} />
      </ScrollView>
    </Layout>
  );
}
