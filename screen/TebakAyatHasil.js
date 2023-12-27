import { View,Text,StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import { screenWidth, screenHeight } from "../constants/scale";

export default function TebakAyatHasil({props,navigation,route}) {
    const {salah} = route.params;
    return(
        <View>
            <Text>Salah di ayat :</Text>
            {salah.map((item)=>{
                return <Text key={item.id}>{item.surah} - {item.ayat}</Text>
            })}
        </View>
    )
}