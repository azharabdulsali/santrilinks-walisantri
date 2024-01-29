import { Text, View,Pressable, StyleSheet, Image,FlatList } from "react-native";
import { Colors } from "../constants/colors";
import { screenWidth, screenHeight } from "../constants/scale";
import ButtonBack from "../components/ButtonBack";
export default function LaporanAbsensi({navigation}) {
  const dummy = [
    {
      id: 1,
      jenisAbsensi: "Absensi Kamar",
      nama: "Abu Bakar Assidiq",
      santri: 20
    },
    {
      id: 2,
      jenisAbsensi: "Absensi Kamar",
      nama: "Abu Bakar Assidiq",
      jumlah: 20
    },
    {
      id: 3,
      jenisAbsensi: "Absensi Kamar",
      nama: "Abu Bakar Assidiq",
      jumlah: 20
    },
    {
      id: 4,
      jenisAbsensi: "Absensi Kamar",
      nama: "Abu Bakar Assidiq",
      jumlah: 20
    },
    {
      id: 5,
      jenisAbsensi: "Absensi Kamar",
      nama: "Abu Bakar Assidiq",
      jumlah: 20
    },
  ]

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.viewBack}>
          <ButtonBack onPress={() => navigation.goBack()} />
        </View>
        <Image style={styles.rectangle} source={require("../assets/images/AbsensiSantri/Frame185.png")}/>
        <Image style={styles.logoAbsen} source={require("../assets/images/AbsensiSantri/logoAbsen.png")}/>
        <View style={styles.viewJudul}>
          <Text style={styles.textJudul}>Absen Santri</Text>
        </View>
      </View>
      <View style={styles.viewBody}>
        <FlatList
          data={dummy}
          renderItem={({item}) => (
            <Pressable style={styles.viewAbsen}>
              <View style={styles.viewLogo}>
                <Image source={require("../assets/images/AbsensiSantri/VectorLogo.png")}/>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.textJenisAbsensi}>{item.jenisAbsensi}</Text>
                <Text style={styles.textNama}>{item.nama}</Text>
                <Text style={styles.textJumlah}>{`${item.jumlah} santri`}</Text>
              </View>
              <View style={styles.viewButtonNext}>
                <ButtonBack/>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={{ height: screenHeight / (812 / 15) }} />
          )}
          showsVerticalScrollIndicator={false}
        >

        </FlatList>
      </View>
      <View style={styles.viewButton}>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>+ Absensi Baru</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
  },
  rectangle:{
    position: "absolute",
  },
  viewBack:{
    position: "absolute",
    top: screenHeight / (812 / 21),
    left: screenWidth / (375 / 27),
    zIndex: 2,    
  },
  logoAbsen:{
    position: "absolute",
    top: screenHeight / (812 / 23),
    left: screenWidth / (375 / 12),
  },
  viewJudul:{
    marginTop: screenHeight / (812 / 84),
    marginLeft: screenWidth / (375 / 209),
    width: screenWidth / (375 / 130),

  },
  textJudul:{
    fontFamily: "Poppins_600SemiBold",
    fontSize: screenWidth / (375 / 40),
    textAlign: "right",
    color: Colors.greenPrimary,
  },
  viewBody:{
    flex:1,
    marginTop: screenHeight / (812 / 75),
    paddingHorizontal: screenWidth / (375 / 27),
  },
  viewAbsen:{
    flex:1,
    // marginTop: screenHeight / (812 / 15),
    borderRadius: screenWidth / (375 / 20),
    paddingVertical: screenHeight / (812 / 9),
    paddingLeft: screenWidth / (375 / 10),
    flexDirection: "row",
    columnGap: screenWidth / (375 / 17),
    borderColor: Colors.greenBg,
    borderWidth: 1.5,
  },
  viewLogo:{
    paddingTop: screenHeight / (812 / 22),
    paddingHorizontal: screenWidth / (375 / 18),
    paddingBottom: screenHeight / (812 / 17),
    backgroundColor: Colors.greenBg,
    borderRadius: screenWidth / (375 / 15),
  },
  viewButtonNext:{
    position: "absolute",
    top:"50%",
    right: screenWidth / (375 / 20),
    transform: [{rotateY: "180deg"}],
    opacity: 0.5,
  },
  textJenisAbsensi:{
    fontFamily: "Poppins_500Medium",
    fontSize: screenWidth / (375 / 14),
    // color: Colors.greenPrimary,
  },
  textNama:{
    fontFamily: "Poppins_400Regular",
    fontSize: screenWidth / (375 / 12),
  },
  textJumlah:{
    fontFamily: "Poppins_400Regular",
    fontSize: screenWidth / (375 / 12),
  },
  viewButton:{
    marginTop: screenHeight / (812 / 40),
    marginBottom: screenHeight / (812 / 32),
    marginHorizontal: screenWidth / (375 / 27),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#F7F7F7",
    padding: screenWidth / (375 / 5),
    borderRadius: screenWidth / (375 / 15),
  },
  button:{
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
    // height:"100%"    
  },
  textButton:{
    fontFamily: "Poppins_500Medium",
    fontSize: screenWidth / (375 / 12),
    // color: Colors.greenPrimary,
  }
});
