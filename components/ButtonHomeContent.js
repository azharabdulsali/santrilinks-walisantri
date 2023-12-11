import { StyleSheet, Text, View, Pressable, Image } from "react-native";

export default ButtonHomeContent = ({ color, shadowColor, text }) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: color,
            width: 125,
            height: 79,
            borderRadius: 20,
            shadowColor: shadowColor,
            shadowOffset: { width: 9, height: 8 },
            // shadowOpacity: 0.8,
            shadowRadius: 20,  
            elevation: 5,
            display: "flex",
            flexDirection: "row",
        },
    });

    return (
        <Pressable style={styles.button}>
            <View style={{display: "flex", justifyContent: "center", marginLeft: 27}}>
                <Image source={require("../assets/images/vector-alquran.png")} />
            </View>
            <View style={{display: "flex", justifyContent: "center"}}>
                <Text style={{fontSize: 14}}>{text}</Text>
            </View>
        </Pressable>
    );
};
