import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { screenWidth, screenHeight } from "../constants/scale";

export default ButtonHomeContent = ({ color, shadowColor, text, onPress }) => {
    const styles = StyleSheet.create({
        container: {
            position: "relative", // Make the container relative for absolute positioning of shadow
        },
        button: {
            backgroundColor: color,
            width: screenWidth/3,
            height: screenHeight/10,
            borderRadius: 20,
            display: "flex",
            flexDirection: "row",
            rowGap: 11,
        },
        shadow: {
            backgroundColor: shadowColor,
            width: screenWidth/3,
            height: screenHeight/10,
            borderRadius: 20,
            position: "absolute",
            zIndex: -1,
            top: 8,
            left: 9,
        },
    });

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <View style={{ display: "flex", justifyContent: "center", marginLeft: screenWidth/(375/21) }}>
                    <Image source={require("../assets/images/vector-alquran.png")} />
                </View>
                <View style={{ display: "flex", justifyContent: "center", width: screenWidth/6.7, marginLeft: screenWidth/(375/11), fontFamily: "Poppins_500Medium" }}>
                    <Text style={{ fontSize: screenWidth/26.7 }}>{text}</Text>
                    {/* <Text style={{ fontSize: 10 }}>{screenWidth}</Text> */}
                </View>
            </Pressable>
            <View style={styles.shadow}></View>
        </View>
    );
};
