import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import MenuBarLogo from "../assets/Menu.png";

import BasicText from "./BasicText.js";

export default function HomeScreenHeader({ navigation }) {
  return (
    <View style={styles.menuBar}>
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={navigation.openDrawer}
      >
        {/* <BasicText style={styles.navigationButtonText}>navigation</BasicText> */}
        <Image source={MenuBarLogo} style={styles.menuButtonStyle}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    top: 50,
  },
  navigationButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  navigationButtonText: {
    color: "#E16363",
    fontSize: 20,
    alignSelf: "center",
  },
  menuButtonStyle: {
    width: 50,
    height: 50,
    shadowColor: "#FFF",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
});
