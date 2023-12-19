import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Login</Text>
      <View
        style={{
          paddingHorizontal: 27,
          marginTop: 55,
          display: "flex",
          gap: 25,
        }}>
        <View>
          <TextInput
            placeholder="Phone number"
            placeholderTextColor="#696969"
            style={styles.inputText}
          />
        </View>
        <View>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#696969"
            style={styles.inputText}
          />
        </View>
      </View>
      <View style={styles.containerBawah}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.replace("Main", { screen: "Beranda" })}>
          <Text style={styles.textButton}>Masuk</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 44,
  },
  textLogin: {
    color: "#000000",
    fontSize: 24,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    marginTop: 74,
  },
  inputText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#F2FFE9",
    height: 38,
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
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
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "white",
  },
});
