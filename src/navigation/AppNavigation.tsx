import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPageScreen from "../screens/landingPage";
import RegisterScreen from "../screens/registerPage";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LandingPage" component={LandingPageScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}