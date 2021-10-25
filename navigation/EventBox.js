import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import Card from "../navigation/inviteCard.js";

export default function EventBox() {
  const [currentTab, setCurrentTab] = useState("out");

  var received = [styles.in];
  var sent = [styles.out];

  if (currentTab === "in") {
    sent.push(styles.currentTab);
  } else if (currentTab === "out") {
    received.push(styles.currentTab);
  }

  function handleSent() {
    setCurrentTab("in");
    console.log(currentTab);
  }

  function handleReceived() {
    setCurrentTab("out");
    console.log(currentTab);
  }

  return (
  <View
    style={[styles.card, styles.shadowProp, { justifyContent: "center" }]}
  >
    <View style={styles.taskContainer}>
      <View style={styles.title}>
        <TouchableOpacity style={received} onPress={handleReceived}>
          <Text style={styles.subHeaderText}>In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={sent} onPress={handleSent}>
          <Text style={styles.subHeaderText}>Out</Text>
        </TouchableOpacity>
      </View>

      <Card
         name="Play Basketball"
         date_created="18 Aug"
         time = "8pm"
         fdCheck={false}
      />

      <Card
        name="Buy   Groceries"
        date_created="20 Aug"
        time = "5pm"
        fdCheck={false}
      />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFAF2",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: "105%",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  taskContainer: {
    marginTop: 0,
    width: "100%",
    alignItems: "center",
  },
  title: {
    width: "95%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
    alignItems: "center",
  },
  received: {
    alignItems: "center",
    padding: 20,
    maxWidth: 100,
    height: 50,
    flexDirection: "row",
  },
  currentTab: {
    backgroundColor: "white",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  sent: {
    minHeight: 20,
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  completed: {
    minHeight: 50,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  profileImage: {
    marginLeft: 5,
    minWidth: 8,
    minHeight: 8,
    alignSelf: "center",
  },
  subHeaderText: {
    fontSize: 22,
    alignItems: "center",
  },
  backgroundContainer: {
    width: "105%",
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
  },
  taskCardContainer: {
    width: "90%",
  },
});
