import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SetorHafalan from "../screen/SetorHafalan";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SetorHafalan" component={SetorHafalan} />
    </Stack.Navigator>
  );
}
