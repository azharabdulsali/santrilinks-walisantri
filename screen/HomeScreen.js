import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#46A175", "#75AA50"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.viewAtas}>
          <View style={styles.viewText1}>
            <Text style={styles.text1}>Assalamu’alaikum Syaifani</Text>
          </View>
          <Pressable style={styles.buttonTebakAyat}>
            <Text style={styles.textButtonTebakAyat}>Mari tebak ayat</Text>
          </Pressable>
          <View style={styles.lingkaran}></View>
          <Image
            source={require("../assets/images/foto-orang.png")}
            style={styles.fotoOrang}></Image>
        </View>
        <View style={styles.viewBawah}>
          <View></View>
          <View></View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
  },
  viewAtas: {
    flex: 1,
  },
  viewBawah: {
    flex: 2.5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  viewText1: {
    width: 195,
    marginLeft: 27,
    marginTop: 23,
  },
  text1: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
    color: "#fff",
  },
  buttonTebakAyat: {
    marginLeft: 27,
    marginTop: 36,
    backgroundColor: "#DEFFC9",
    shadowColor: "#666",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    padding: 10,
    width: 116,
    borderRadius: 15,
    zIndex: 3,
  },
  textButtonTebakAyat: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "#000000",
  },
  lingkaran: {
    width: 116,
    height: 116,
    borderRadius: 116 / 2,
    backgroundColor: "#59CD95",
    opacity: 0.12,
    position: "absolute",
    left: 61,
    top: 72,
    zIndex: 2,
  },
  fotoOrang: {
    width: 194,
    height: 194,
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 4,
  },
});
