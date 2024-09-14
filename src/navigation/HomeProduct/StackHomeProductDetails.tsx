
import { createStackNavigator } from "@react-navigation/stack";
import { StackHomeProductList } from "../types";
import HomeScreen from "../../screens/HomeScreen";
import ProductDetails from "../../screens/Products/ProductDetails";

const Stack = createStackNavigator<StackHomeProductList>();


function HomeProductDetailsNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}  // Hides the header
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{ headerShown: false }}  // Hides the header
            />
        </Stack.Navigator>
    );
}

export default HomeProductDetailsNavigator