import React, { useState } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Button,
  Pressable,
  TextInput,
} from "react-native";

import newTaskButton from "../../assets/Task-assets/NewTaskButton.png";

import BasicText from "../BasicText.js";
import TaskCard from "./TaskCard.js";

import TaskModal from "./TaskModal.js";

export default function MyTasks() {
  const [modalVisible, setModalVisible] = useState(false); //Toggle on and off modal screeen
  const [laundryCard, setlaundryCard] = useState(true);
  const [dishCard, setdishCard] = useState(true);

  function toggleLaundryTask() {
    setlaundryCard(!laundryCard);
  }

  function toggleDishTask() {
    setdishCard(!dishCard);
  }

  return (
    <View style={styles.tasksContainer}>
      <View style={styles.myTasks}>
        <View style={styles.title}>
          <BasicText style={styles.subHeaderText}>Claim Tasks</BasicText>

          <TouchableOpacity
            style={styles.newTask}
            onPress={() => setModalVisible(true)}
          >
            <BasicText style={styles.subHeaderText}>New Task</BasicText>
            <Image source={newTaskButton} style={styles.newTaskButton} />
          </TouchableOpacity>
        </View>

        {/* <View style={styles.tasksContainer}> */}
        <View style={styles.laundryContainer}>
          {laundryCard && (
            <TaskCard
              name="Laundry"
              description="we have no clothes :(("
              set="Set own deadline"
              date_created="18 Aug"
              toggle={toggleLaundryTask}
              fdCheck={false}
            />
          )}

          {dishCard && (
            <TaskCard
              name="Do the dishes"
              description="our sink is clogging !!!"
              deadline="Deadline:26 Aug"
              date_created="18 Aug"
              fdCheck={true}
              toggle={toggleDishTask}
            />
          )}
        </View>
        <TaskModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
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
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  laundryContainer: {
    height: 300,
  },
});
