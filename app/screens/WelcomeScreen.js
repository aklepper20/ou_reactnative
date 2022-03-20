import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";
import StyleSheetValidation from "react-native/Libraries/StyleSheet/StyleSheetValidation";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
