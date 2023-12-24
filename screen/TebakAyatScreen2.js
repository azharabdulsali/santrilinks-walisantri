import { Text, View, Pressable, FlatList, StyleSheet } from "react-native";
import { getJuzQuran } from "../services/alquranJuz.services";
import { useEffect, useState } from "react";
import { juz } from "../constants/juzAndJumlahAyat";
import TampilPerAyat from "../components/TampilPerAyat";
import { screenHeight, screenWidth } from "../constants/scale";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../constants/colors";
import ButtonBack from "../components/ButtonBack";

export default function TebakAyatScreen2({ route, navigation }) {
  const { dariJuz, sampaiJuz } = route.params;
  const [hasil, setHasil] = useState([]);
  const [gantiSoal, setGantiSoal] = useState(true);
  const [salah,setSalah] = useState(0);
  async function fetchData(randomJuz, calculatedOffset) {
    try {
      const data = await getJuzQuran(randomJuz, calculatedOffset);
      setHasil(data.data.ayahs);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (gantiSoal === true) {
      const randomJuz =
        dariJuz === sampaiJuz
          ? dariJuz
          : Math.floor(Math.random() * (sampaiJuz - dariJuz + 1)) + dariJuz;
      const calculatedOffset = Math.floor(
        Math.random() * juz[randomJuz - 1].jumlahAyatKurang10
      );
      fetchData(randomJuz, calculatedOffset);
      setGantiSoal(false);
    }
  }, [gantiSoal]);
  const handleOnPress = () => {
    setGantiSoal(true);
  };
  const renderItem = ({ item, index }) => (
    <TampilPerAyat
      ayat={item.text}
      ayatKe={item.numberInSurah}
      isFirst={index === 0}
    ></TampilPerAyat>
  );
  return (
    <View style={styles.container}>
      <View>
        <LinearGradient
          colors={["#46A175", "#6DAD5C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={{position: "absolute", top: screenHeight / (812 / 24), left: screenWidth / (375 / 27), zIndex: 3}}>
            <ButtonBack onPress={() => navigation.goBack()}></ButtonBack>
          </View>
          <Text style={styles.judul}>Tebak Ayat</Text>
          <View>
            <View style={styles.viewSubJudul}>
              <View style={styles.viewJuz}>
                <Text style={styles.textJuz}>
                  {dariJuz === sampaiJuz
                    ? `Juz ${dariJuz}`
                    : `Juz ${dariJuz} - Juz ${sampaiJuz}`}
                </Text>
              </View>
              <View style={styles.viewGantiSoal}>
                <Pressable
                  style={styles.buttonGantiSoal}
                  onPress={handleOnPress}
                >
                  <Text style={styles.textGantiSoal}>Ganti Soal</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={{ marginTop: screenHeight / (812 / 10), flex: 1 }}>
        <FlatList
          data={hasil}
          renderItem={renderItem}
          keyExtractor={(item) => item.number}
          ItemSeparatorComponent={() => (
            <View style={{ height: screenHeight / (812 / 10) }} />
          )}
        />
      </View>
      <View style={styles.viewBottom}>
        <Pressable style={styles.buttonSelesai}>
          <Text style={styles.textSelesai}>Selesai</Text>
        </Pressable>
        <View style={styles.viewSalah}>
          <Text style={styles.textSalah}>Salah: {salah}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: screenHeight / (812 / 17),
  },
  judul: {
    marginTop: screenHeight / (812 / 24),
    fontSize: screenWidth / (375 / 20),
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    color: "#fff",
  },
  viewSubJudul: {
    marginTop: screenHeight / (812 / 16),
    display: "flex",
    flexDirection: "row",
    gap: screenWidth / (375 / 22),
    paddingHorizontal: screenWidth / (375 / 28),
    marginBottom: screenHeight / (812 / 20),
  },
  viewJuz: {
    borderColor: "white",
    borderWidth: screenWidth / (375 / 1),
    borderRadius: screenWidth / (375 / 10),
    width: screenWidth / (375 / 161),
    paddingVertical: screenWidth / (375 / 5),
    paddingHorizontal: screenWidth / (375 / 5),
  },
  textJuz: {
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontSize: screenWidth / (375 / 14),
  },
  viewGantiSoal: {
    backgroundColor: "white",
    borderRadius: screenWidth / (375 / 10),
  },
  buttonGantiSoal: {
    width: screenWidth / (375 / 137),
    paddingVertical: screenWidth / (375 / 5),
    paddingHorizontal: screenWidth / (375 / 5),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textGantiSoal: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: screenWidth / (375 / 14),
    color: Colors.greenPrimary,
  },
  viewBottom: {
    display: "flex",
    flexDirection: "row",
    gap: screenWidth / (375 / 13),
    paddingHorizontal: screenWidth / (375 / 85),
    paddingTop: screenHeight / (812 / 17),
  },
  buttonSelesai:{
    padding: screenWidth / (375 / 10),
    width: screenWidth / (375 / 95),
    borderColor: Colors.greenPrimary,
    borderWidth: screenWidth / (375 / 2),
    borderRadius: screenWidth / (375 / 10),
  },
  textSelesai:{
    color:Colors.greenPrimary,
    textAlign:"center",
    fontSize: screenWidth / (375 / 12),
    fontFamily:"Poppins_600SemiBold",
  },
  viewSalah:{
    backgroundColor:"#F3505080",
    padding: screenWidth / (375 / 10),
    borderRadius: screenWidth / (375 / 10),
    width: screenWidth / (375 / 95),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textSalah:{
    color:"white",
    textAlign:"center",
    fontSize: screenWidth / (375 / 12),
    fontFamily:"Poppins_600SemiBold",
  }
});
