import { View,Text,Pressable, StyleSheet, TextInput } from "react-native";
import { useFonts } from 'expo-font';


export default LoginScreen = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        // "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
        // "ABeeZee-Regular": require("../assets/fonts/ABeeZee-Regular.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
      });
      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }
    return (
        <View style={styles.container}>          
            <Text style={styles.textLogin}>Login</Text>
            <View style={{paddingHorizontal: 27, marginTop: 55, display: 'flex', gap:25}}>
                <View>
                    <TextInput placeholder="Phone number" placeholderTextColor="#696969" style={styles.inputText}/>
                </View>
                <View>
                    <TextInput placeholder="Password" secureTextEntry={true} placeholderTextColor="#696969" style={styles.inputText}/>
                </View>
            </View>
            <View style={styles.containerBawah}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Landing')}>
                <Text style={styles.textButton}>Masuk</Text>
            </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#fff",
    },
    textLogin:{
      color: '#000000',
      fontSize: 24,
      fontFamily: "Poppins-Regular",
      textAlign: "center",
      marginTop:74+44
    },
    inputText:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#F2FFE9",
        height: 38,
        fontSize:12,
        fontFamily: "Poppins-Medium",
    },
    button: {
        position: "absolute",
        bottom: 58,
        display: "flex",
        gap: 10,
        width: 201,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        // color: "#fff",
        backgroundColor: "#46A175",
      },
      containerBawah: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: "center",
      },
      textButton: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        color: "white",
      },
});
