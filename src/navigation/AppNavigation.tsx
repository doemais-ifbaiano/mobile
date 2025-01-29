import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPageScreen from "../screens/landingPage";
import RegisterScreen from "../screens/registerPage1";
import LoginScreen from "../screens/login";
import RecoverPasswordScreen from "../screens/recoverPassword";
import NewPasswordScreen from "../screens/newPassword";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LandingPage" component={LandingPageScreen} />
                <Stack.Screen name="Login" component={LoginScreen} /> 
                <Stack.Screen name="Register" component={RegisterScreen} /> 
                <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} /> 
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}