import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Individual1TaskCard from "./Individual1TaskCard";

export default function Individual1Tab({ visible }) {
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.taskCardContainer}>
        <Individual1TaskCard
          name="Kitchen Duty"
          description="vacuum the floor"
          deadline="28 Aug"
          date_created="Claimed:"
        ></Individual1TaskCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    width: "100%",
    backgroundColor: "#FFFAF2",
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 12,
  },
  taskCardContainer: {
    width: "90%",
  },
});
