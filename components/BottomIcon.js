import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { screenWidth } from "../constants/scale";
import { Colors } from "../constants/colors";

export default function BottomIcon({ icon, text, focused }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name={icon}
        size={screenWidth / 15}
        color={focused ? Colors.greenPrimary : "black"}
      />
      <Text style={[styles.text, focused && { color: Colors.greenPrimary }]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: screenWidth / 30,
  },
});
