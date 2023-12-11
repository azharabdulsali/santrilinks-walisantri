import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import Pesan from "../screen/Pesan";
import Akun from "../screen/Akun";
import { screenHeight } from "../constants/scale";
import BottomIcon from "../components/BottomIcon";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: "absolute",
          position: "absolute",
          backgroundColor: "white",
          height: screenHeight / 13,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Beranda"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomIcon icon="home" focused={focused} text="Beranda" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Pesan"
        component={Pesan}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomIcon
              icon="chatbubble-ellipses"
              focused={focused}
              text="Pesan"
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Akun"
        component={Akun}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomIcon icon="person" focused={focused} text="Akun" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
