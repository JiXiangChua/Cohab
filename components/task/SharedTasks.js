import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import CompletedTab from "./CompletedTab";
import SharedTab from "./SharedTab";
import Individual1Tab from "./Individual1Tab";

import Kimberly from "../../assets/Finance-assets/Kimberly.png";

export default function SharedTasks() {
  const [currentTab, setCurrentTab] = useState("shared");

  var shared = [styles.shared];
  var individual1 = [styles.individual1];
  var completed = [styles.completed];

  if (currentTab === "shared") {
    shared.push(styles.currentTab);
  } else if (currentTab === "individual1") {
    individual1.push(styles.currentTab);
  } else if (currentTab === "completed") {
    completed.push(styles.currentTab);
  }

  function handleShared() {
    setCurrentTab("shared");
    console.log(currentTab);
  }

  function handleIndividual1() {
    setCurrentTab("individual1");
    console.log(currentTab);
  }

  function handleCompleted() {
    setCurrentTab("completed");
    console.log(currentTab);
  }

  return (
    <View style={styles.taskContainer}>
      <View style={styles.title}>
        <TouchableOpacity style={shared} onPress={handleShared}>
          <Text style={styles.subHeaderText}>Others</Text>
        </TouchableOpacity>

        <TouchableOpacity style={individual1} onPress={handleIndividual1}>
          <Text style={styles.subHeaderText}>My Task</Text>
        </TouchableOpacity>

        <TouchableOpacity style={completed} onPress={handleCompleted}>
          <Text style={styles.subHeaderText}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Shared Task Container */}
      <SharedTab visible={currentTab === "shared"} />
      <CompletedTab visible={currentTab === "completed"} />
      <Individual1Tab visible={currentTab === "individual1"} />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  title: {
    width: "95%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  shared: {
    alignItems: "center",
    padding: 10,
    maxWidth: 100,
    height: 50,
    flexDirection: "row",
  },
  currentTab: {
    backgroundColor: "white",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  individual1: {
    minHeight: 20,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  individual2: {
    minHeight: 20,
    padding: 10,
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
