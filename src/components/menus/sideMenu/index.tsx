import React, { useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../../navigation/routesParams";
import styles from "./styles";
import ButtonGlobal from "../../buttons/buttonGlobal";
import { useUser } from "../../../hooks/useUser";
import { Icon } from "@ui-kitten/components";

export default function SideMenu({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) {
    const navigation = useNavigation<NativeStackNavigationProp<RoutesParams>>();
    const { user } = useUser();
    
    const translateX = useRef(new Animated.Value(-250)).current;

    useEffect(() => {
        Animated.timing(translateX, {
            toValue: isVisible ? 0 : -250, 
            duration: 300, 
            useNativeDriver: true,
        }).start();
    }, [isVisible]);

    return (
        <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
            <View style={styles.header}>
                <Image source={require("../../../../assets/logos/logo-media.png")} style={styles.logo} />
                <Text style={styles.userName}>{user?.name || "Usuário"}</Text>
            </View>
            
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate("HomePage"); onClose(); }}>
                    <Icon name="home-outline" fill="#FFFFFF" style={styles.menuIcon} />
                    <Text style={styles.menuText}>Home</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate("Profile"); onClose(); }}>
                    <Icon name="person-outline" fill="#FFFFFF" style={styles.menuIcon} />
                    <Text style={styles.menuText}>Perfil</Text> 
                </TouchableOpacity>
            </View>
            
            <View style={styles.logoutButtonContainer}>
                <ButtonGlobal
                    title="Sair"
                    onPress={() => { navigation.navigate("Login"); onClose(); }}
                    appeareances=""
                    style={styles.logoutButton}
                    textColor="#B562FE"
                />
            </View>
        </Animated.View>
    );
}
