import { Text, View,Pressable } from "react-native";

export default function DataSantri({navigation}) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Setor Hafalan</Text>
      <Pressable onPress={() => navigation.navigate("Main", { screen: "Beranda" })}>
        <Text>Kembali</Text>
      </Pressable>
    </View>
  );
}
