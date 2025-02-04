import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPageScreen from "../screens/landingPage";
import RegisterScreen1 from "../screens/registerPage1";
import RegisterScreen2 from "../screens/registerPage2";
import LoginScreen from "../screens/login";
import RecoverPasswordScreen from "../screens/recoverPassword";
import NewPasswordScreen from "../screens/newPassword";
import HomeScreen from "../screens/home"

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LandingPage" component={LandingPageScreen} />
                <Stack.Screen name="Login" component={LoginScreen} /> 
                <Stack.Screen name="Register1" component={RegisterScreen1} /> 
                <Stack.Screen name="Register2" component={RegisterScreen2} /> 
                <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} /> 
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> 
                <Stack.Screen name="Home" component={HomeScreen} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}