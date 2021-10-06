import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

import BasicText from "./BasicText";

export default function GeneralButton(props) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.ButtonStyle, { backgroundColor: props.color }]}
      >
        <BasicText style={styles.ButtonTextStyle}>{props.buttonText}</BasicText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonStyle: {
    width: 100,
    height: 32,
    borderRadius: 10,
    justifyContent: "center",
  },
  ButtonTextStyle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
