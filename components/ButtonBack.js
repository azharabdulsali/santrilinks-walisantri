import { Pressable,Image } from "react-native";

export default function ButtonBack({onPress}) {
    return(
        <Pressable onPress={onPress}>
            <Image source={require("../assets/images/vector-back.png")}/>
        </Pressable>
    )
}