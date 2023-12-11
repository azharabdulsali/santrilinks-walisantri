import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import StackNavigator from "./StackNavigator";

const RootNavigator = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator.Navigator>
        <RootNavigator.Screen
          name="Auth"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
        <RootNavigator.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <RootNavigator.Screen
          name="Stack"
          component={StackNavigator}
          options={{ headerShown: false }}
        />
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}
