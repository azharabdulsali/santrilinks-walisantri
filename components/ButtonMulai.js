import { Pressable,Text } from "react-native";
import { screenWidth } from "../constants/scale";
import { Colors } from "../constants/colors";

export default function ButtonMulai({navigation, onPress}) {
    return (
            <Pressable onPress={onPress} style={{backgroundColor:Colors.greenPrimary,justifyContent:"center",alignItems:"center", padding:10, width:screenWidth/(375/146), borderRadius:screenWidth/(375/10)}}>
                <Text style={{fontSize:screenWidth/(375/12),fontFamily:"Poppins_600SemiBold",color:"white"}}>Masuk</Text>
            </Pressable>
    );
}