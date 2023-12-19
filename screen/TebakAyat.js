import { StyleSheet, Text, View, Image } from "react-native";
import { useRef, useState } from "react";
import { screenWidth, screenHeight } from "../constants/scale";
import { Colors } from "../constants/colors";
import { Picker } from "@react-native-picker/picker";
import ButtonMulai from "../components/ButtonMulai";
import ButtonBack from "../components/ButtonBack";

export default function TebakAyat({navigation}) {
  const juz = Array.from({ length: 30 }, (_, index) => index + 1);
  const [selectedDariJuz, setSelectedDariJuz] = useState();
  const [selectedSampaiJuz, setSelectedSampaiJuz] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewBack}>
        <ButtonBack onPress={() => navigation.replace("Main", { screen: "Beranda" })}/>
      </View>
      <View style={styles.lingkaran}></View>
      <View>
        <Image
          source={require("../assets/images/foto-alquran_tebak-ayat-screen.png")}
          style={styles.foto}
        />
        <View>
          <Text style={styles.textJudul}>TebakAyat</Text>
          <Text style={styles.textSubJudul}>
            Menebak ayat-ayat suci Al-Quran dengan hati penuh ketelitian. Mari
            bersama-sama mengasah pengetahuan dan kecintaan kita pada Firman-Nya
          </Text>
        </View>
        <View>
          <View style={styles.viewTextJuz}>
            <Text style={styles.textJuz}>Dari juz</Text>
            <Text style={styles.textJuz}>Sampai juz</Text>
          </View>
          <View style={styles.viewPilihJuz}>
            <View style={styles.pilihJuz}>
              <Picker
                ref={pickerRef}
                mode="dropdown"
                selectedValue={selectedDariJuz}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedDariJuz(itemValue);
                }}
                itemStyle={{ color: "black" }}
                style={{ height: 50, width: 150 , fontSize:20 , color:"black"}}
              >
                <Picker.Item label="......" value="disabled" style={{ fontSize: 14, fontFamily: "Poppins-Regular"}}></Picker.Item>
                {juz.map((juz) => (
                  <Picker.Item label={`Juz ${juz}`} value={juz} key ={juz} style={{ fontSize: 14, fontFamily: "Poppins-Regular" }}></Picker.Item>
                ))}
              </Picker>
            </View>
            <View style={styles.pilihJuz}>
              <Picker
                ref={pickerRef}
                mode="dropdown"
                selectedValue={selectedSampaiJuz}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedSampaiJuz(itemValue);
                }}
                // style={{ height: 50, width: 150 }}
                itemStyle={{ color: "black" }}
                style={{ height: 50, width: 150 , fontSize:20 , color:"black"}}
              >
                <Picker.Item label="......" value="disable" style={{ fontSize: 14, fontFamily: "Poppins-Regular"}}></Picker.Item>
                {juz.map((juz) => (
                  <Picker.Item label={`Juz ${juz}`} value={juz} key ={juz} style={{ fontSize: 14, fontFamily: "Poppins-Regular"}}></Picker.Item>
                ))}    
              </Picker>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewButton}>
      <ButtonMulai onPress={() => navigation.navigate("TebakAyatScreen2")}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewBack: {
    position: "absolute",
    top: screenHeight / (812 / 27),
    left: screenWidth / (375 / 26),
  },
  foto: {
    width: screenWidth / (375 / 197),
    height: screenHeight / (812 / 190),
    marginLeft: screenWidth / (375 / 81),
    marginTop: screenHeight / (812 / 59),
  },
  lingkaran: {
    width: screenWidth / (375 / 151),
    height: screenWidth / (375 / 161),
    borderRadius: screenWidth / (375 / 151) / 2,
    backgroundColor: Colors.greenBg,
    position: "absolute",
    top: screenHeight / (812 / 46),
    left: screenWidth / (375 / 124),
    // marginLeft:screenWidth/(375/81),
  },
  textJudul: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: screenWidth / (375 / 24),
    textAlign: "center",
    color: Colors.greenPrimary,
  },
  textSubJudul: {
    fontFamily: "Poppins_400Regular",
    fontSize: screenWidth / (375 / 12),
    textAlign: "center",
    paddingHorizontal: screenWidth / (375 / 50),
    marginTop: screenHeight / (812 / 20),
    opacity: 0.8,
    // color: Colors.greenPrimary
  },
  viewTextJuz: {
    display: "flex",
    flexDirection: "row",
    gap: screenWidth / (375 / 107),
    marginLeft: screenWidth / (375 / 58),
    marginTop: screenHeight / (812 / 66),
  },
  textJuz: {
    fontFamily: "Poppins_400Regular",
    fontSize: screenWidth / (375 / 12),
    // textAlign: "center",
    color: "#000000",
  },
  viewPilihJuz: {
    display: "flex",
    flexDirection: "row",
    gap: screenWidth / (375 / 33),
    marginLeft: screenWidth / (375 / 58),
    // marginTop: screenHeight / (812 / 20),
    
  },
  pilihJuz:{
    backgroundColor: Colors.greenBg,
    borderRadius: screenWidth / (375 / 10),
  },
  viewButton:{
    marginTop: screenHeight / (812 / 164),
    display: "flex",
    alignItems: "center",
  }
});
