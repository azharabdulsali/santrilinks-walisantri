import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerAtas}>
        <View style={styles.viewText1}>
          <Text style={styles.text1}>Santri Links</Text>
        </View>
        <View style={styles.viewText2}>
          <Text style={styles.text2}>
            membangun jembatan Quran, Anak, dan keluarga
          </Text>
        </View>
      </View>
      <View style={styles.containerBawah}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textButton}>Masuk</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 44,
  },
  containerAtas: {
    marginTop: 65,
    marginLeft: 28,
    flex: 1,
    backgroundColor: "#fff",
  },
  viewText1: {
    width: 136,
  },
  text1: {
    fontSize: 48,
    color: "#46A175",
  },
  viewText2: {
    width: 255,
    marginTop: 39,
  },
  text2: {
    color: "#000000",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
  containerBawah: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    bottom: 58,
    display: "flex",
    gap: 10,
    width: 201,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#46A175",
  },
  textButton: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "white",
  },
});
