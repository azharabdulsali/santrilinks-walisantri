import { View,Text,StyleSheet,Pressable } from "react-native";
import { Colors } from "../constants/colors";
import { screenWidth, screenHeight } from "../constants/scale";
import ButtonMulai from "../components/ButtonMulai";

export default function TebakAyatHasil({props,navigation,route}) {
    const {salah} = route.params;
    return(
        <View style={styles.container}>
            <Text style={styles.textJudul}>Ulasan Salah</Text>
            <View style={styles.viewSubJudul}>
                <Text style={styles.textSubJudul}>Surat</Text>
                <Text style={styles.textSubJudul}>Ayat</Text>
            </View>
            <View style={styles.viewBoxListSalah}>
                {
                    salah.map((item, index)=>{
                        return (
                        <View key={item.id} style={[styles.viewListSalah, {borderBottomWidth: index === salah.length - 1 ? 0 : 1 }]}>
                            <Text style={styles.textSurat}>
                                {item.surah}
                            </Text>
                            <View style={styles.viewAyat}>
                                <Text style={styles.textAyat}>
                                    {item.ayat}
                                </Text>
                            </View>
                        </View>
                        )
                    })
                }
            </View>
            <View style={styles.viewBottom}>
                <View>
                    <Pressable style={styles.buttonTutup} onPress={() => navigation.replace("Main", { screen: "Beranda" })}>
                        <Text>Tutup</Text>
                    </Pressable>
                </View>
                <View>
                    <ButtonMulai
                        onPress={() => navigation.navigate("TebakAyat")}
                    >
                        Coba Lagi
                    </ButtonMulai>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        // justifyContent:"center",
        backgroundColor: "#fff",
    },
    textJudul:{
        marginTop: screenHeight / (812 / 28),
        fontFamily: "Poppins_500Medium",
        fontSize: screenWidth / (375 / 20),
    },
    viewSubJudul:{
        marginTop: screenHeight / (812 / 52),
        flexDirection:"row",
        columnGap: screenWidth / (375 / 135),
        backgroundColor: Colors.greenBg,
        width: screenWidth / (375 / 257),
        height: screenHeight / (812 / 33),
        alignItems:"center",
        justifyContent:"center",
        paddingVertical: screenHeight / (812 / 5),
        borderRadius: screenWidth / (375 / 10),
        paddingHorizontal: screenWidth / (375 / 10),
    },
    textSubJudul:{
        fontFamily: "Poppins_400Regular",
        fontSize: screenWidth / (375 / 12),
    },
    viewBoxListSalah:{
        marginTop: screenHeight / (812 / 11),
    },
    viewListSalah:{
        width: screenWidth / (375 / 241),
        flexDirection:"row",
        paddingHorizontal: 22,
        alignItems:"center",
        justifyContent:"space-between",
        paddingBottom: screenHeight / (812 / 11),
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderBottomWidth: 1,
        marginTop: screenHeight / (812 / 12),
    },
    textSurat:{
        fontFamily: "Poppins_400Regular",
        fontSize: screenWidth / (375 / 12),
    },
    viewAyat:{
        marginRight: screenWidth / (375 / 5),
        justifyContent:"center",
    },
    textAyat:{
        fontFamily: "Poppins_400Regular",
        fontSize: screenWidth / (375 / 12),
    },
    viewBottom:{
        flexDirection:"row",
        gap: screenWidth / (375 / 18),
        position:"absolute",
        bottom: screenHeight / (812 / 41),
    },
    buttonTutup:{
        width: screenWidth / (375 / 93),
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        borderRadius: screenWidth / (375 / 10),
        fontFamily: "Poppins_600SemiBold",
        fontSize: screenWidth / (375 / 12),
    }
})