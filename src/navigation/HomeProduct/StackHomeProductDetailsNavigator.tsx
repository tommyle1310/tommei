
import { createStackNavigator } from "@react-navigation/stack";
import { StackHomeProductList } from "../types";
import HomeScreen from "../../screens/HomeScreen";
import ProductDetails from "../../screens/Products/ProductDetails";
import CartScreen from "../../screens/CartScreen";
import CheckoutScreen from "../../screens/CheckoutScreen";

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
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{ headerShown: false }}  // Hides the header
            />
            <Stack.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{ headerShown: false }}  // Hides the header
            />
        </Stack.Navigator>
    );
}

export default HomeProductDetailsNavigator