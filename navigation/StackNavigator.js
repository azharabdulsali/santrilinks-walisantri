import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LaporanHafalan from "../screen/LaporanHafalan";
import LaporanAbsensi from "../screen/LaporanAbsensi";
import DataSantri from "../screen/DataSantri";
import LaporanPoint from "../screen/LaporanPoint";
import TebakAyat from "../screen/TebakAyat";
import TebakAyatScreen2 from "../screen/TebakAyatScreen2";
import TebakAyatHasil from "../screen/TebakAyatHasil";
import SetorHafalan2 from "../screen/SetorHafalan2";
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LaporanHafalan" component={LaporanHafalan} options={{ headerShown: false }}/>
      <Stack.Screen name="LaporanAbsensi" component={LaporanAbsensi} options={{ headerShown: false }} />
      <Stack.Screen name="DataSantri" component={DataSantri} options={{ headerShown: false }}/>
      <Stack.Screen name="LaporanPoint" component={LaporanPoint} options={{ headerShown: false }}/>
      <Stack.Screen name="TebakAyat" component={TebakAyat} options={{ headerShown: false }}/>
      <Stack.Screen name="TebakAyatScreen2" component={TebakAyatScreen2} options={{ headerShown: false }}/>
      <Stack.Screen name="TebakAyatHasil" component={TebakAyatHasil} options={{ headerShown: false }}/>
      <Stack.Screen name="SetorHafalan2" component={SetorHafalan2} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
