import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { screenWidth, screenHeight } from "../constants/scale";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../constants/colors";

export default function TampilPerAyat(props) {
  const { isFirst = false, ayat, ayatKe, onPress, isSalah = false } = props;

  const textAyat = () => {
    return (
      <>
        <Text
          style={[
            styles.textAyat,
            {
              color:isSalah ? "#CE3636" : "black",
            }
          ]}
        >
          {ayat}
          {ayatKe.toLocaleString("ar-AE", { useGrouping: false })}
        </Text>
      </>
    );
  };
  return (
    <>
        <Pressable onPress={isFirst?undefined:onPress} >
          <View
            style={[
              styles.container,
              {
                backgroundColor: isFirst ? Colors.greenBg : isSalah ? "#FFE9E9" : "white",
              },
              {
                borderBottomColor: isFirst ? "transparent" : Colors.greenBg,
                borderBottomWidth: isFirst ? 0 : screenHeight / (812 / 1),
              }
            ]}
          >
            <View style={{ justifyContent: "center"}}>{textAyat()}</View>
          </View>
        </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: screenWidth / (375 / 26),
    paddingRight: screenWidth / (375 / 17),
    paddingLeft: screenWidth / (375 / 8),
    borderRadius: screenWidth / (375 / 10),
    paddingVertical: screenHeight / (812 / 10),
  },
  containerFalse: {
    backgroundColor: Colors.greenBg,
  },
  textAyat: {
    color: "black",
    fontFamily: "Arab",
    // fontSize: screenWidth / (375 / 14),
    lineHeight: screenHeight / (812 / 23),
  },
  textAyatKe: {
    color: "white",
    fontFamily: "Arab",
    fontSize: screenWidth / (375 / 14),
    borderRadius: 100,
  },
});
