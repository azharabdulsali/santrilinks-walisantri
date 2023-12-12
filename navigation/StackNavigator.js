import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SetorHafalan from "../screen/SetorHafalan";
import AbsensiSantri from "../screen/AbsensiSantri";
import DataSantri from "../screen/DataSantri";
import PointSantri from "../screen/PointSantri";
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SetorHafalan" component={SetorHafalan} />
      <Stack.Screen name="AbsensiSantri" component={AbsensiSantri} />
      <Stack.Screen name="DataSantri" component={DataSantri} />
      <Stack.Screen name="PointSantri" component={PointSantri} />
    </Stack.Navigator>
  );
}
