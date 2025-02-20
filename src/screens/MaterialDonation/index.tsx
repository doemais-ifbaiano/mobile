import React, { useState } from "react";
import { ScrollView, Text, Modal, View, TouchableOpacity } from "react-native";
import { Layout } from "@ui-kitten/components";
import HeaderMenu from "../../components/menus/headerMenu";
import ItemSelectionBox from "../../components/ItemSelectionBox/page";
import ButtonGlobal from "../../components/buttons/buttonGlobal";
import styles from "./styles";

export default function MaterialDonation() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});

    // Atualiza os itens selecionados
    const handleItemSelection = (items: Record<string, number>) => {
        setSelectedItems(items);
    };

    const handleConfirm = () => {
        const selected = Object.entries(selectedItems).filter(([_, quantity]) => quantity > 0);
        if (selected.length > 0) {
            setModalVisible(true);
        }
    };

    return (
        <Layout style={styles.container}>
            <HeaderMenu />

            {/* Botão Confirmar no topo */}
            <ButtonGlobal appeareances="" title="Confirmar" onPress={handleConfirm} />

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Doação Material</Text>
                <Text style={styles.description}>
                    Confirme os itens para saber o endereço da instituição que receberá sua ajuda. Leve as
                    doações aos Correios e envie para o endereço indicado. Sua generosidade fará a diferença!
                </Text>

                {/* Passando a função para atualizar os itens */}
                <ItemSelectionBox
                    title="Produtos de Limpeza"
                    items={["Água sanitária", "Álcool 70%", "Panos de limpeza", "Sabão em pó ou em barra"]}
                    onItemChange={(updatedItems) =>
                        setSelectedItems((prev) => ({
                            ...prev,
                            ...Object.fromEntries(
                                Object.entries(updatedItems).map(([key, value]) => [key, value])
                            )
                        }))
                    }
                />

                <ItemSelectionBox
                    title="Vestuário"
                    items={["Camisetas", "Calças", "Casacos", "Meias", "Sapatos"]}
                    onItemChange={(updatedItems) =>
                        setSelectedItems((prev) => ({
                            ...prev,
                            ...Object.fromEntries(
                                Object.entries(updatedItems).map(([key, value]) => [key, value])
                            )
                        }))
                    }
                />

                <ItemSelectionBox
                    title="Alimentos"
                    items={["Arroz", "Feijão", "Macarrão", "Óleo", "Leite em pó"]}
                    onItemChange={(updatedItems) =>
                        setSelectedItems((prev) => ({
                            ...prev,
                            ...Object.fromEntries(
                                Object.entries(updatedItems).map(([key, value]) => [key, value])
                            )
                        }))
                    }
                />

            </ScrollView>

            {/* Modal de Confirmação */}
            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Resumo da doação</Text>
                        <TouchableOpacity style={styles.modalClose} onPress={() => setModalVisible(false)}>
                            <Text>X</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalText}>
                            Os produtos devem ser enviados para o endereço da instituição através dos Correios ou outras empresas de logística e transporte.
                        </Text>
                        <Text style={styles.modalText}>
                            <Text style={{ fontWeight: "bold" }}>Endereço:</Text> Travessa Snows, Bairro Nogueira, nº 30 - 45800-000{"\n"}
                            <Text style={{ fontWeight: "bold" }}>Telefone:</Text> (77) 99090-0909{"\n"}
                            <Text style={{ fontWeight: "bold" }}>E-mail:</Text> Apae@gmail.com
                        </Text>

                        <Text style={styles.modalSubtitle}>Itens escolhidos:</Text>
                        {Object.entries(selectedItems)
                            .filter(([_, quantity]) => quantity > 0)
                            .map(([item, quantity]) => (
                                <Text key={item} style={styles.modalItem}>• {item} ({quantity})</Text>
                            ))}

                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity style={styles.modalButtonAdd} onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonTextAdd}>Adicionar Itens</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButtonConfirm} onPress={() => console.log("Doação Confirmada")}>
                                <Text style={styles.modalButtonText}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </Layout>
    );
}
