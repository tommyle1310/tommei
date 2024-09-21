
import { createStackNavigator } from "@react-navigation/stack";
import { StackCartCheckoutPurchaseList, StackHomeProductList } from "./types";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import AddressScreen from "../screens/AddressScreen";

const Stack = createStackNavigator<StackCartCheckoutPurchaseList>();


function HomeProductDetailsNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{ headerShown: false }}  // Hides the header
            />
            <Stack.Screen
                name="Address"
                component={AddressScreen}
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