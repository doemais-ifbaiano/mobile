import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import LandingPageScreen from "../screens/landingPage";
import RegisterScreen1 from "../screens/registerPage1";
import RegisterScreen2 from "../screens/registerPage2";
import LoginScreen from "../screens/login";
import RecoverPasswordScreen from "../screens/recoverPassword";
import NewPasswordScreen from "../screens/newPassword";
import HomePageScreen from "../screens/HomePage";
import ProfileScreen from "../screens/ProfilePage";
import InstitutionPage1Screen from "../screens/InstitutionPage1";
import FinancialDonationScreen from "../screens/FinancialDonation";
import MaterialDonationScreen from "../screens/MaterialDonation"
import { checkUserSession } from "../services/authService";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const [initialRoute, setInitialRoute] = useState<string | null>(null);

    useEffect(() => {
        checkUserSession((user) => {
            setInitialRoute(user ? "HomePage" : "LandingPage");
        });
    }, []);

    if (!initialRoute) return null;

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LandingPage" component={LandingPageScreen} />
                <Stack.Screen name="Login" component={LoginScreen} /> 
                <Stack.Screen name="Register1" component={RegisterScreen1} /> 
                <Stack.Screen name="Register2" component={RegisterScreen2} /> 
                <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} /> 
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> 
                <Stack.Screen name="HomePage" component={HomePageScreen} /> 
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="InstitutionPage1" component={InstitutionPage1Screen} />
                <Stack.Screen name="FinancialDonation" component={FinancialDonationScreen} />
                <Stack.Screen name="MaterialDonation" component={MaterialDonationScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
