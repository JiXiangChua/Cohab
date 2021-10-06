import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import SharedTaskCard from "./SharedTaskCard";
import MissedTaskCard from "./MissedTaskCard";

export default function SharedTab({ visible }) {
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.taskCardContainer}>
        {/* Missed Task */}
        <View style={styles.missedContainer}>
          <MissedTaskCard
            name="Clean the sheets"
            description="sweat stains everywheree"
            deadline="Overdue:16 Aug"
            date_created="Created:"
          ></MissedTaskCard>
        </View>

        {/* Shared Task */}
        <SharedTaskCard
          name="Mop the floor"
          description="guests coming over this weekend"
          deadline="Deadline:20 Aug"
          date_created="Created"
        ></SharedTaskCard>
        <SharedTaskCard
          name="Go ntuc buy toilet paper"
          description="we ran out :0"
          deadline="Deadline:25 Aug"
          date_created="Created"
        ></SharedTaskCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    width: "100%",
    backgroundColor: "white",
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
  subHeaderText: {
    fontSize: 22,
    alignItems: "flex-start",
  },
  title: {
    width: "95%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
    alignItems: "center",
  },
  missedContainer: {
    width: "100%",
  },
});
