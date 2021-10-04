import React, { useState } from "react";

import {
  View ,
  StyleSheet ,
  TouchableOpacity ,
  Image ,
  ScrollView,
  Modal,
  Button,
  Pressable,
  TextInput,
} from "react-native";

import newTaskButton from "../../assets/Task-assets/NewTaskButton.png";

import BasicText from "../BasicText.js";
import TaskCard from './TaskCard.js';

import TaskModal from './TaskModal.js';

export default function MyTasks() {
  const [modalVisible, setModalVisible] = useState(false)
  //Toggle on and off modal screeen

  return (
    <View style={styles.myTasks}>
      <View style={styles.title}>
        <BasicText style={styles.subHeaderText}>Claim Tasks</BasicText>

        <TouchableOpacity
        style={styles.newTask}
        onPress={() => setModalVisible(true)}
        >
          <BasicText style={styles.subHeaderText}>New Task</BasicText>
          <Image source={newTaskButton} style={styles.newTaskButton} />
          {/*icon is a lil off center cause the image is off center. if the new icon is centered it should be centered*/}
        </TouchableOpacity>
      </View>

      <View style={styles.tasksContainer}>
        <TaskCard />
        <TaskCard />
      </View>
      <TaskModal modalVisible = {modalVisible} setModalVisible = {setModalVisible} />
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
