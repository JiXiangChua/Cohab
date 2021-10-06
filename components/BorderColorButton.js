import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import BasicText from "./BasicText";

export default function BorderColorButton(props) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.ButtonStyle, { borderColor: props.color }]}
        onPress={props.onPress}
      >
        <BasicText style={[styles.ButtonTextStyle, { color: props.color }]}>
          {props.buttonText}
        </BasicText>
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
    borderWidth: 1,
  },
  ButtonTextStyle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
