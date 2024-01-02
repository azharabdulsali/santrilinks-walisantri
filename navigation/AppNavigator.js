import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import {
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";

import BottomTabNavigator from "./BottomTabNavigator";
import StackNavigator from "./StackNavigator";
import { useCallback } from "react";

const RootNavigator = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function AppNavigation() {
  const [loaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    "Arab": require("../assets/font/LPMQ_IsepMisbah.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <RootNavigator.Navigator screenOptions={{ headerShown: false }}>
        <RootNavigator.Screen name="Auth" component={AuthNavigator} />
        <RootNavigator.Screen name="Main" component={BottomTabNavigator} />
        <RootNavigator.Screen name="Stack" component={StackNavigator} />
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}
