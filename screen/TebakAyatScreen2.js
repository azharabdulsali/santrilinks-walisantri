import { Text, View, Pressable, FlatList, StyleSheet } from "react-native";
import { getJuzQuran } from "../services/alquranJuz.services";
import { useEffect, useState} from "react";
import { juz } from "../constants/juzAndJumlahAyat";
import TampilPerAyat from "../components/TampilPerAyat";
import { screenHeight, screenWidth } from "../constants/scale";
import ButtonMulai from "../components/ButtonMulai";
import { Colors } from "../constants/colors";
import ButtonBack from "../components/ButtonBack";

export default function TebakAyatScreen2({ route, navigation }) {
  const { dariJuz, sampaiJuz } = route.params;
  const [hasil, setHasil] = useState([]);
  const [gantiSoal, setGantiSoal] = useState(true);
  const [salah,setSalah] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [ayatDitekan, setAyatDitekan] = useState([]);
  async function fetchData(randomJuz, calculatedOffset) {
    try {
      const data = await getJuzQuran(randomJuz, calculatedOffset);
      setHasil(data.data.ayahs.map((item) => {
        if (item.numberInSurah === 1 && item.surah.number !== 1) {
          return { ...item, text: item.text.replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', '') };
        }
        return item;
      }));
      setIsLoading(false);
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
        Math.random() * (juz[randomJuz - 1].jumlahAyat-11)
      );
      setIsLoading(true);
      fetchData(randomJuz, calculatedOffset);
      setGantiSoal(false);
    }
  }, [gantiSoal]);
  const handleGantiSoal = () => {
    setGantiSoal(true);
  };
  
  const handleSalah = (item) =>{
    const isAlreadySalah = salah.find((i) => i.id === item.number) 
    if(!isAlreadySalah){
      setSalah([...salah,{
        id : item.number,
        surah : item.surah.englishName,
        ayat : item.numberInSurah,
      }])
    }
    else {
      setSalah(salah.filter((i) => i.id !== item.number));
    }
  }
  const handleSelesai = () => {
    navigation.navigate("TebakAyatHasil", {
      salah : salah
    });
  }
  return (
    <View style={styles.container}>
      <View>
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
                  onPress={handleGantiSoal}
                >
                  <Text style={styles.textGantiSoal}>Ganti Soal</Text>
                </Pressable>
              </View>
            </View>
          </View>
      </View>
      <View style={{ marginTop: screenHeight / (812 / 10), flex: 1 }}>
      {isLoading ? (
          <LoadingFallback />
        ) : (
          <FlatList
            data={hasil}
            renderItem={({ item, index }) => (
              <TampilPerAyat
                ayat={item.text}
                ayatKe={item.numberInSurah}
                isFirst={index === 0}
                onPress={() => handleSalah(item)}
                isSalah={salah.some((i) => i.id === item.number)}
              />
            )}
            keyExtractor={(item) => item.number}
            ItemSeparatorComponent={() => (
              <View style={{ height: screenHeight / (812 / 11) }} />
            )}
          />
        )}
      </View>
      <View style={styles.viewBottom}>
        <View style={styles.viewSalah}>
          <Text style={styles.textSalah}>Salah: {salah.length}</Text>
        </View>
        {/* <Pressable style={styles.buttonSelesai} onPress={handleSelesai}>
          <Text style={styles.textSelesai}>Selesai</Text>
        </Pressable> */}
        <ButtonMulai width={179} onPress={handleSelesai}>Selesai</ButtonMulai>
      </View>
    </View>
  );
}

function LoadingFallback() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "black" , fontFamily: "Poppins_500Medium", fontSize: screenWidth / (375 / 12)}}>Loading...</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: screenHeight / (812 / 17),
  },
  judul: {
    marginTop: screenHeight / (812 / 16),
    fontSize: screenWidth / (375 / 20),
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    color: "#000",
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
    // borderColor: "white",
    // borderWidth: screenWidth / (375 / 1),
    borderRadius: screenWidth / (375 / 10),
    width: screenWidth / (375 / 122),
    paddingVertical: screenWidth / (375 / 5),
    paddingHorizontal: screenWidth / (375 / 5),
    backgroundColor: Colors.greenBg,
    justifyContent: "center",
  },
  textJuz: {
    textAlign: "center",
    color: "black",
    fontFamily: "Poppins_500Medium",
    fontSize: screenWidth / (375 / 14),
  },
  viewGantiSoal: {
    flex:1,
    backgroundColor: Colors.greenPrimary,
    borderRadius: screenWidth / (375 / 10),
    justifyContent: "center",
    alignItems: "center",
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
    color: "white",
  },
  viewBottom: {
    display: "flex",
    flexDirection: "row",
    gap: screenWidth / (375 / 13),
    paddingHorizontal: screenWidth / (375 / 38),
    paddingTop: screenHeight / (812 / 17),
  },
  buttonSelesai:{
    padding: screenWidth / (375 / 10),
    width: screenWidth / (375 / 95),
    
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
    // backgroundColor:"#F3505080",
    padding: screenWidth / (375 / 10),
    borderRadius: screenWidth / (375 / 10),
    width: screenWidth / (375 / 95),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textSalah:{
    // color:"white",
    opacity:0.8,
    textAlign:"center",
    fontSize: screenWidth / (375 / 12),
    fontFamily:"Poppins_600SemiBold",
  }
});