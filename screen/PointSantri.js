import { Text, View,Pressable } from "react-native";

export default function PointSantri({navigation}) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Point Santri</Text>
      <Pressable onPress={() => navigation.replace("Main", { screen: "Beranda" })}>
        <Text>Kembali</Text>
      </Pressable>
    </View>
  );
}
