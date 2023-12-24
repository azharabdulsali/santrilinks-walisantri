import { Pressable, Text } from "react-native";
import { screenWidth } from "../constants/scale";
import { Colors } from "../constants/colors";

export default function ButtonMulai({ navigation, onPress, disabled = false }) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={{
        backgroundColor: Colors.greenPrimary,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: screenWidth / (375 / 146),
        borderRadius: screenWidth / (375 / 10),
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Text
        style={{
          fontSize: screenWidth / (375 / 12),
          fontFamily: "Poppins_600SemiBold",
          color: "white",
        }}
      >
        Mulai
      </Text>
    </Pressable>
  );
}
