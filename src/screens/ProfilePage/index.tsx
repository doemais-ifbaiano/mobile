import React from "react";
import { Layout, Text, Button, Avatar, Spinner, Input } from "@ui-kitten/components";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import HeaderMenu from "../../components/menus/headerMenu";
import InputIconLeft from "../../components/inputs/inputIconLeft";
import styles from "./styles";

export default function ProfileScreen() {
  const { user, loading } = useAuth();

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

      <ScrollView style={styles.scrollViewContainer}>
        {/* Avatar e Foto */}
        <View style={styles.profileHeader}>
          <Avatar source={{ uri: user?.photoURL || "https://via.placeholder.com/150" }} style={styles.avatar} />
          <TouchableOpacity style={styles.photoButton}>
            <Text style={styles.photoButtonText}>Escolher foto</Text>
          </TouchableOpacity>
        </View>

        {/* Dados Pessoais */}
        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        <InputIconLeft label="Nome completo" value={user?.name || "Sem nome definido"} iconName="person" editable={false} />
        <InputIconLeft label="Telefone" value={user?.phone || "Não informado"} iconName="phone" editable={false} />
        <InputIconLeft label="CPF/CNPJ" value={user?.cpf || "Não informado"} iconName="file-text" editable={false} />
        <InputIconLeft label="Data de Nascimento" value={user?.birthDate || "Não informado"} iconName="calendar" editable={false} />
        <Button style={styles.updateButton}>Atualizar</Button>

        {/* Detalhes de Login */}
        <Text style={styles.sectionTitle}>Detalhes de Login</Text>
        <InputIconLeft label="E-mail" value={user?.email || "Sem e-mail"} iconName="email" editable={false} />
        <InputIconLeft label="Senha" value="********" iconName="lock" secureTextEntry editable={false} />
        <Button style={styles.updateButton}>Atualizar</Button>

        {/* Zona de Perigo */}
        <View style={styles.dangerZone}>
          <Text style={styles.dangerTitle}>Zona de Perigo</Text>
          <Text style={styles.dangerText}>
            Depois de clicar no botão "Excluir perfil", sua conta será agendada para exclusão em 30 dias.
          </Text>
          <Button style={styles.deleteButton}>Excluir</Button>
        </View>
      </ScrollView>
    </Layout>
  );
}