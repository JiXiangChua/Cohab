import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import newTaskButton from "../../assets/Task-assets/NewTaskButton.png";
import TaskCard from "./TaskCard";

export default function MyTasks() {
  return (
    <View style={styles.myTasks}>
      <View style={styles.title}>
        <Text style={styles.subHeaderText}>Claim Tasks</Text>

        <TouchableOpacity style={styles.newTask}>
          <Text style={styles.subHeaderText}>New Task</Text>
          <Image source={newTaskButton} style={styles.newTaskButton} />
          {/*icon is a lil off center cause the image is off center. if the new icon is centered it should be centered*/}
        </TouchableOpacity>
      </View>

      <View style={styles.tasksContainer}>
        <TaskCard />
        <TaskCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myTasks: {
    marginTop: 20,
    width: "95%",
    alignItems: "center",
  },
  title: {
    width: "95%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  subHeaderText: {
    fontSize: 22,
    alignItems: "center",
  },
  newTask: {
    alignItems: "center",
    minHeight: 40,
    flexDirection: "row",
  },
  newTaskButton: {
    minWidth: 30,
    minHeight: 30,
    resizeMode: "center",
  },
  tasksContainer: {
    width: "90%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
