import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

import newTaskButton from "../../assets/Task-assets/NewTaskButton.png";
import { TaskCard , BasicText } from "..";

export default function MyTasks() {
  return (
    <View style={styles.myTasks}>
      <View style={styles.title}>
        <BasicText style={styles.subHeaderText}>Claim Tasks</BasicText>

        <TouchableOpacity style={styles.newTask}>
          <BasicText style={styles.subHeaderText}>New Task</BasicText>
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
