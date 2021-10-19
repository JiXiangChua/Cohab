import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import CompletedTaskCard from "./CompletedTaskCard";

export default function CompletedTab({ visible }) {
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.taskCardContainer}>
        {/*<CompletedTaskCard
          name="Fix chair"
          description="the leg broke lol"
          deadline="Completed:10 Aug"
          date_created="1 Aug"
        ></CompletedTaskCard>
        <CompletedTaskCard
          name="Restore pantry"
          description="we got no snackkss :("
          deadline="Completed:8 Aug"
          date_created="2 Aug"
        ></CompletedTaskCard>*/}
        <CompletedTaskCard
          name="Install shelves"
          description="package in the living room"
          deadline="Completed:3 Aug"
          date_created="Claimed:"
        ></CompletedTaskCard>
      </View>

      {/* See all button
      <TouchableOpacity style={[styles.SeeAll, { marginLeft: 300 }]}>
        <Text style={styles.SeeAllText}>See All</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    width: "100%",
    backgroundColor: "#FFFAF2",
    borderRadius: 8,
    alignItems: "center",
  },
  taskCardContainer: {
    width: "90%",
  },
  SeeAll: {
    minHeight: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  SeeAllText: {
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
