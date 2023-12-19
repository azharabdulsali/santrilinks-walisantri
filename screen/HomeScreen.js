import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ButtonHomeContent from "../components/ButtonHomeContent";
import { Colors } from "../constants/colors";
import { screenWidth, screenHeight } from "../constants/scale";
import HaditsCarousel from "../components/HaditsCarousel";
export default function HomeScreen({ navigation }) {
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
          <Pressable style={styles.buttonTebakAyat} onPress={() => navigation.navigate("Stack", { screen: "TebakAyat" })}>
            <Text style={styles.textButtonTebakAyat}>Mari tebak ayat</Text>
          </Pressable>
          <View style={styles.lingkaran}></View>
          <Image
            source={require("../assets/images/foto-orang.png")}
            style={styles.fotoOrang}></Image>
        </View>
        <View style={styles.viewBawah}>
          <View style={{ flex: 1, flexDirection: "column", marginTop: 43 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-evenly",
                // alignItems: "center",
              }}>
              <ButtonHomeContent
                color={Colors.greenBg}
                shadowColor={Colors.greenSecondary}
                text="Setor Hafalan"
                onPress={() =>
                  navigation.navigate("Stack", { screen: "SetorHafalan" })
                }
              />
              <ButtonHomeContent
                color={Colors.greenSecondary}
                shadowColor={Colors.greenBg}
                text="Absensi Santri"
                onPress={() =>
                  navigation.navigate("Stack", { screen: "AbsensiSantri" })
                }
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-evenly",
                // alignItems: "center",
              }}>
              <ButtonHomeContent
                color={Colors.greenSecondary}
                shadowColor={Colors.greenBg}
                text="Point Santri"
                onPress={() =>
                  navigation.navigate("Stack", { screen: "PointSantri" })
                }
              />
              <ButtonHomeContent
                color={Colors.greenBg}
                shadowColor={Colors.greenSecondary}
                text="Data Santri"
                onPress={() =>
                  navigation.navigate("Stack", { screen: "DataSantri" })
                }
              />
            </View>
          </View>
          <View style={styles.carousel}>
            <HaditsCarousel
              hadits="خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
              terjemahan="Sebaik-baik kalian adalah orang yang belajar Al-Qur`an dan mengajarkannya."
            />
            {/* Belum dibuat sambungan carousel nya masi sederhana */}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: screenHeight / 812 / 44,
    paddingBottom: screenHeight / 13,
  },
  viewAtas: {
    flex: 1,
    overflow: "hidden",
  },
  viewBawah: {
    flex: 2.3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  viewText1: {
    width: screenWidth / (375 / 195),
    marginLeft: screenWidth / (375 / 27),
    marginTop: screenHeight / (812 / 23),
  },
  text1: {
    fontFamily: "Poppins_500Medium",
    fontSize: screenWidth / (375 / 20),
    color: "#fff",
  },
  buttonTebakAyat: {
    marginLeft: screenWidth / (375 / 27),
    marginTop: screenHeight / (812 / 36),
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
    left: screenWidth / (375 / 61),
    top: screenHeight / (812 / 72),
    zIndex: 2,
  },
  fotoOrang: {
    width: screenWidth / (375 / 194),
    height: screenWidth / (375 / 194),
    position: "absolute",
    right: screenWidth / (375 / 10),
    top: screenHeight / (812 / 10),
    zIndex: 4,
  },
  carousel: {
    flex: 1,
    // backgroundColor: "black",
    justifyContent: "center",
    // alignItems: "center",
    // marginTop: screenHeight/(812/47),
    paddingHorizontal: screenWidth / (375 / 37),
    paddingBottom: screenHeight / (812 / 12),
  },
});
