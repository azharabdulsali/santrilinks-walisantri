import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SetorHafalan from "../screen/SetorHafalan";
import AbsensiSantri from "../screen/AbsensiSantri";
import DataSantri from "../screen/DataSantri";
import PointSantri from "../screen/PointSantri";
import TebakAyat from "../screen/TebakAyat";
import TebakAyatScreen2 from "../screen/TebakAyatScreen2";
import TebakAyatHasil from "../screen/TebakAyatHasil";
import SetorHafalan2 from "../screen/SetorHafalan2";
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SetorHafalan" component={SetorHafalan} options={{ headerShown: false }}/>
      <Stack.Screen name="AbsensiSantri" component={AbsensiSantri} options={{ headerShown: false }} />
      <Stack.Screen name="DataSantri" component={DataSantri} options={{ headerShown: false }}/>
      <Stack.Screen name="PointSantri" component={PointSantri} options={{ headerShown: false }}/>
      <Stack.Screen name="TebakAyat" component={TebakAyat} options={{ headerShown: false }}/>
      <Stack.Screen name="TebakAyatScreen2" component={TebakAyatScreen2} options={{ headerShown: false }}/>
      <Stack.Screen name="TebakAyatHasil" component={TebakAyatHasil} options={{ headerShown: false }}/>
      <Stack.Screen name="SetorHafalan2" component={SetorHafalan2} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
