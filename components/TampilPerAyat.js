import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { screenWidth, screenHeight } from "../constants/scale";
import { View, Text, StyleSheet,Pressable } from "react-native";
import { Colors } from "../constants/colors";

export default function TampilPerAyat(props) {
  const { isFirst = false, ayat, ayatKe, onPress, isSalah=false } = props;

  const textAyat = () => {
    return (
    <>
      <Text
        style={[
          styles.textAyat,
          { color: isFirst === true ? "white" : "black" },
          {fontFamily: isFirst === true ? "Inter_600SemiBold" : "Inter_500Medium"},
          
        ]}
      >
        {ayat}
        <View style={{backgroundColor: isFirst === true ? "white" : Colors.greenPrimary, borderRadius: 10,position: "relative", paddingHorizontal: 5, bottom: 5}}>
            <Text style={[{color: isFirst === true ? Colors.greenPrimary : "white"}]}>{ayatKe.toLocaleString("ar-AE", { useGrouping: false })}</Text>
        </View>
      </Text>
      </>
    );
  };
  return (
    <>
      {isFirst === true && (
        <LinearGradient
          colors={["#46A175", "#6DAD5C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
        >
          {textAyat()}
        </LinearGradient>
      )}
      {isFirst === false && (
        <Pressable onPress={onPress}>
        <View style={[styles.container, { backgroundColor: isSalah ? "#F3505080": Colors.greenBg }]}>
          <View style={{ justifyContent: "center" }}>{textAyat()}</View>
        </View>
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: screenWidth / (375 / 26),
    paddingRight: screenWidth / (375 / 26),
    paddingLeft: screenWidth / (375 / 12),
    borderRadius: screenWidth / (375 / 10),
    paddingVertical: screenHeight / (812 / 10),
  },
  containerFalse: {
    backgroundColor: Colors.greenBg,
  },
  textAyat: {
    color: "white",
    // fontFamily: "Poppins_600SemiBold",
    // fontSize: screenWidth / (375 / 14),
    lineHeight: screenHeight / (812 / 23),
  },
  textAyatKe: {
    color: "white",
    fontFamily: "Inter_600SemiBold",
    fontSize: screenWidth / (375 / 14),
    borderRadius: 100,
  },
});
