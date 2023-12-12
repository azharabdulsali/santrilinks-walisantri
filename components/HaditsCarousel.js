import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import { screenWidth, screenHeight } from "../constants/scale";

export default HaditsCarousel = ({hadits, terjemahan}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.lingkaran}></View>
            <Text style={styles.judul}>Hadits pilihan</Text>
            <Text style={styles.hadits}>
            {hadits}
            </Text>
            <Text style={styles.terjemahan}>
            "{terjemahan}"
            </Text>
            <View style={styles.lingkaran2}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.greenBg,
        borderRadius: screenWidth/(375/10),
        overflow: "hidden",
    },
    judul:{
        fontSize: screenWidth/(375/15),
        fontFamily: "Poppins_500Medium",
        marginTop: screenHeight/(812/15),
    },
    hadits:{
        marginTop: screenHeight/(812/38),
        fontSize: screenWidth/(375/16),
    },
    terjemahan:{
        marginTop: screenHeight/(812/25),
        fontSize: screenWidth/(375/12),
        fontFamily: "Poppins_500Medium",
        marginHorizontal: screenWidth/(375/17),
    },
    lingkaran:{
        backgroundColor: "#AED791",
        opacity: 0.3,
        width: screenWidth/(375/96),
        height: screenWidth/(375/95),
        borderRadius: screenWidth/(375/95),
        position: "absolute",
        zIndex: -1, 
        right: screenWidth/(375/230),
        bottom: screenHeight/(812/130),
    },
    lingkaran2:{
        backgroundColor: "#AED791",
        opacity: 0.3,
        width: screenWidth/(375/130),
        height: screenWidth/(375/130),
        borderRadius: screenWidth/(375/130),
        position: "absolute",
        zIndex: -1, 
        left: screenWidth/(375/211),
        top: screenHeight/(812/73),
    }
})