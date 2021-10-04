import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import ProfilePic from "../../assets/Finance-assets/Kimberly.png";

import BasicText from "../BasicText.js";

export default function TaskCard(props) {
  return (
    <View style={styles.taskCardContainer}>
      <BasicText>Do the dishes</BasicText>
      <BasicText>Set own deadline</BasicText>
    </View>
  );
}

const styles = StyleSheet.create({
  taskCardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
    borderWidth: 0.1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    justifyContent: "space-between",
    flexDirection: 'row',
  },
});
