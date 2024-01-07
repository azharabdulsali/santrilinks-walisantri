import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useRef, useState } from "react";
import { screenWidth, screenHeight } from "../constants/scale";
import { Colors } from "../constants/colors";
import { Picker } from "@react-native-picker/picker";
import ButtonMulai from "../components/ButtonMulai";
import ButtonBack from "../components/ButtonBack";
import { juz } from "../constants/juzAndJumlahAyat";

export default function TebakAyat({ navigation }) {
  const [selectedDariJuz, setSelectedDariJuz] = useState(null);
  const [selectedSampaiJuz, setSelectedSampaiJuz] = useState(null);
  const [isDisable, setIsDisable] = useState(true);
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const handleMulai = () => {
    navigation.navigate("TebakAyatScreen2", {
      dariJuz: selectedDariJuz,
      sampaiJuz: selectedSampaiJuz,
    });
  };
  useEffect(() => {
    isMulai();
  }, [selectedDariJuz, selectedSampaiJuz]);
  const isMulai = () => {
    if (
      !(selectedDariJuz === null) &&
      !(selectedSampaiJuz === null) &&
      selectedDariJuz <= selectedSampaiJuz
    ) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };
  const handlePickerDariJuz = (itemValue) => {
    setSelectedDariJuz(itemValue);
    isMulai();
  };
  const handlePickerSampaiJuz = (itemValue) => {
    setSelectedSampaiJuz(itemValue);
    isMulai();
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewBack}>
        <ButtonBack onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.kotak1}>
        <Image
          source={require("../assets/images/RectangleGreenSecondary.png")}
        />
      </View>
      <View style={styles.kotak2}>
        <Image
          source={require("../assets/images/RectangleGreenBg.png")}
        />
      </View>
      <View>
        <View style={styles.viewJudul}>
          <View style={styles.viewTextJudul}>
            <Text style={styles.textJudul}>TebakAyat</Text>
          </View>
          <Image
            source={require("../assets/images/foto-alquran_tebak-ayat-screen.png")}
            style={styles.foto}
          />
        </View>
        <View>
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
                onValueChange={handlePickerDariJuz}
                itemStyle={{ color: "black" }}
                style={{
                  height: "auto",
                  width: screenWidth / (375 / 121),
                  fontSize: screenWidth / (375 / 14),
                  color: "black",
                }}
              >
                <Picker.Item
                  label="......"
                  value="disabled"
                  style={{
                    fontSize: screenWidth / (375 / 12),
                    fontFamily: "Poppins_400Regular",
                  }}
                ></Picker.Item>
                {juz.map((juz) => (
                  <Picker.Item
                    label={`Juz ${juz.juz}`}
                    value={juz.juz}
                    key={juz.juz}
                    style={{
                      fontSize: screenWidth / (375 / 12),
                      fontFamily: "Poppins_400Regular",
                    }}
                  ></Picker.Item>
                ))}
              </Picker>
            </View>
            <View style={styles.pilihJuz}>
              <Picker
                ref={pickerRef}
                mode="dropdown"
                selectedValue={selectedSampaiJuz}
                onValueChange={handlePickerSampaiJuz}
                // style={{ height: 50, width: 150 }}
                itemStyle={{ color: "black" }}
                style={{
                  height: "auto",
                  width: screenWidth / (375 / 121),
                  fontSize: screenWidth / (375 / 14),
                  color: "black",
                }}
              >
                <Picker.Item
                  label="......"
                  value="disable"
                  style={{
                    fontSize: screenWidth / (375 / 12),
                    fontFamily: "Poppins_400Regular",
                  }}
                ></Picker.Item>
                {juz.map((juz) => (
                  <Picker.Item
                    label={`Juz ${juz.juz}`}
                    value={juz.juz}
                    key={juz.juz}
                    style={{
                      fontSize: screenWidth / (375 / 12),
                      fontFamily: "Poppins_400Regular",
                    }}
                  ></Picker.Item>
                ))}
              </Picker>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewButton}>
        <ButtonMulai onPress={() => handleMulai()} disabled={isDisable} width={275}/>
      </View>
      <View style={{flex: 1}}>
        <Image source={require("../assets/images/TebakAyat/RectangleBawahGreenBg.png")}
          style={{
            position: "absolute",
            // marginTop: screenHeight / (812 / 78),
            bottom:0,
            zIndex: -1,
          }}
        />
          <Image source={require("../assets/images/TebakAyat/RectangleBawahGreenSecondary.png")}
            style={{
              position: "absolute",
              // marginTop: screenHeight / (812 / 79),
              bottom:0,
              zIndex: 2,
            }}
          />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: screenHeight / (812 / 10),
  },
  viewBack: {
    position: "absolute",
    top: screenHeight / (812 / 27),
    left: screenWidth / (375 / 26),
  },
  viewJudul: {
    display: "flex",
    flexDirection: "row",
    columnGap: screenWidth / (375 / 26),

  },
  foto: {
    width: screenWidth / (375 / 170),
    height: screenHeight / (812 / 214),
    top: screenHeight / (812 / 37),
    right: screenWidth / (375 / 4),
    position: "absolute",
  },
  kotak1: {
    position: "absolute",
    top: screenHeight / (812 / 39.74),
    right:0
  },
  kotak2: {
    position: "absolute",
    right:0,
    top: screenHeight / (812 / 35),
    zIndex: -1,
  },
  textJudul: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: screenWidth / (375 / 40),
    // textAlign: "center",
    color: Colors.greenPrimary,
    marginTop: screenHeight / (812 / 100),
    marginLeft: screenWidth / (375 / 48),
    width: screenWidth / (375 / 128),
  },
  textSubJudul: {
    fontFamily: "Poppins_400Regular",
    fontSize: screenWidth / (375 / 12),
    textAlign: "center",
    paddingHorizontal: screenWidth / (375 / 50),
    marginTop: screenHeight / (812 / 57),
    opacity: 0.8,
    // color: Colors.greenPrimary
  },
  viewTextJuz: {
    display: "flex",
    flexDirection: "row",
    gap: screenWidth / (375 / 107),
    marginLeft: screenWidth / (375 / 58),
    marginTop: screenHeight / (812 / 29),
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
    marginLeft: screenWidth / (375 / 52),
  },
  pilihJuz: {
    backgroundColor: Colors.greenBg,
    borderRadius: screenWidth / (375 / 10),
  },
  viewButton: {
    marginTop: screenHeight / (812 / 71),
    display: "flex",
    alignItems: "center",
  },

});
