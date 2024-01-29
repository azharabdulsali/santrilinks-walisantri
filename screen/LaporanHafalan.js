import { Text, View, StyleSheet,Pressable,Image, FlatList } from "react-native";
import { Colors } from "../constants/colors";
import { screenWidth, screenHeight } from "../constants/scale";

export default function LaporanHafalan({navigation}) {
  const dummy = [
    {
      nama: "Nasi Goreng",
      setoranTerakhir : {
        juz: 30,
        halaman: 602
      }
    },
    {
      nama: "Gongso Ayam",
      setoranTerakhir : {
        juz: 1,
        halaman: 2
      }
    },
    {
      nama: "Ayam Geprek",
      setoranTerakhir : {
        juz: 1,
        halaman: 3
      }
    },
    {
      nama: "Nasi Bakar",
      setoranTerakhir : {
        juz: 30,
        halaman: 602
      }
    },
    {
      nama: "Nasi Bakar Lagi",
      setoranTerakhir : {
        juz: 30,
        halaman: 602
      }
    },
    {
      nama: "Nasi Padang",
      setoranTerakhir : {
        juz: 30,
        halaman: 602
      }
    },
    {
      nama: "Mie Godog",
      setoranTerakhir : {
        juz: 30,
        halaman: 602
      }
    }
  ]
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/SetoranHafalan/Rectangle.png")} style={styles.rectangle}/>
      <Image source={require("../assets/images/SetoranHafalan/Quran.png")} style={styles.quran}/>
      {/* <Image source={require("../assets/images/SetoranHafalan/statistik.svg")} style={styles.statistik}/> */}
      <View style={styles.viewJudul}>
        <Text style={styles.textJudul}>{`Laporan \nHafalan`}</Text>
      </View>
      {/* <View style={styles.body}>
        <View style={styles.viewHeaderBody}>
          <Text style={styles.textHeaderBody}>Nama Santri</Text>
          <Text style={styles.textHeaderBody}>Setoran Terakhir</Text>
          <View style={styles.viewIcon}>
            <Image source={require("../assets/images/SetoranHafalan/settingIcon.png")}/>
          </View>
        </View>
        <View style={styles.viewMainBody}>
          <FlatList
            data={dummy}
            renderItem={({item, index}) => (
              <View style={styles.viewList} key={index}>
                <View style={styles.viewTextList}>
                  <Text style={styles.textNama}>{item.nama}</Text>
                </View>
                <View style={styles.viewSetoranList}>
                  <Text style={styles.textSetoran}>{`Juz ${item.setoranTerakhir.juz}, Hal ${item.setoranTerakhir.halaman}`}</Text>
                </View>
                <View>
                  <Pressable style={styles.buttonLanjut} onPress={() => navigation.navigate("SetorHafalan2", { data: item })}>
                    <Text style={styles.textLanjut}>Lanjut</Text>
                  </Pressable>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View style={{ height: screenHeight / (812 / 11) }} />
            )}
            keyExtractor={(item) => item.nama}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false} 
          />
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  rectangle:{
    position: "absolute",
    left: 0,
  },
  quran:{
    position: "absolute",
    left: screenWidth / (375 / 34),
    top: screenWidth / (375 / 34)
  },
  statistik:{
    position: "absolute",
    top: screenHeight / (375 / 16),
    right: screenWidth / (375 / 34),
  },
  viewJudul:{
    marginLeft: screenWidth / (375 / 176),
    marginTop: screenHeight / (812 / 84),
    width: screenWidth / (375 / 180),
  },
  textJudul:{
    fontSize: screenWidth / (375 / 40),
    fontFamily: "Poppins_600SemiBold",
    color: Colors.greenPrimary,
    textAlign:"left"
  },
  body:{
    flex: 1,
    marginTop: screenHeight / (812 / 86),
  },
  viewHeaderBody:{
    paddingHorizontal: screenWidth / (375 / 32),
    justifyContent: "space-between",
    width:"100%",
    flexDirection: "row",
    alignItems: "center",
  },
  textHeaderBody:{
    fontSize: screenWidth / (375 / 14),
    fontFamily: "Poppins_500Medium",
  },
  viewIcon:{
    paddingHorizontal: screenWidth / (375 / 4),
    paddingVertical: screenHeight / (375 / 3),
    borderRadius: screenWidth / (375 / 30),
    backgroundColor: Colors.greenBg,
  },
  viewMainBody:{
    flex: 1,
    marginTop: screenHeight / (812 / 19),
    marginLeft: screenWidth / (375 / 32),
    marginRight: screenWidth / (375 / 22),
    // marginBottom: screenHeight / (812 / 22),
    // width:"100%",
  },
  viewList:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: screenWidth / (375 / 9),
    paddingLeft: screenWidth / (375 / 15),
    paddingVertical: screenHeight / (812 / 14),
    backgroundColor:"#F7F7F7",
    borderRadius: screenWidth / (375 / 10),
    alignItems: "center",
  },
  viewTextList:{
    width: screenWidth / (375 / 101),

  },
  viewSetoranList:{
    // width: screenWidth / (375 / 91),
  },
  buttonLanjut:{
    backgroundColor: Colors.greenPrimary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: screenWidth / (375 / 10),
    paddingHorizontal: screenWidth / (375 / 10),
    paddingVertical: screenHeight / (812 / 5),
  },
  textNama:{
    fontSize: screenWidth / (375 / 12),
    fontFamily: "Poppins_400Regular",
  },
  textSetoran:{
    fontSize: screenWidth / (375 / 12),
    fontFamily: "Poppins_400Regular",
  },
  textLanjut:{
    fontSize: screenWidth / (375 / 10),
    fontFamily: "Poppins_600SemiBold",
    color: "white",
  }
})