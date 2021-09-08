import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MenuBar from "../components/MenuBar";
import TaskCard from "../components/TaskCard";
import newTaskButton from "../assets/Task-assets/NewTaskButton.png";

export default function TaskScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <MenuBar navigation = {navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          width: 400,
        }}
      >
        <Text style={styles.taskText}> Tasks </Text>

        {/* My Task Section */}
        <View style={styles.taskContainer}>
          <View
            style={{
              width: "100%",
              height: 50,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.subHeaderText}>Claim Tasks</Text>
            <Text
              style={[
                styles.createNewButton,
                { position: "absolute", right: 50 },
              ]}
            >
              New Task
            </Text>
            <TouchableOpacity
              style={{ position: "absolute", right: 0, top: 5 }}
            >
              <Image
                source={newTaskButton}
                style={{ width: 40, height: 40 }}
              ></Image>
            </TouchableOpacity>
          </View>

          {/* My Task Container */}
          <View>
            {/* Swiping Left and Right to display payees and payers */}
            <View
              style={{
                width: "90%",
                paddingVertical: 5,
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "col", justifyContent: "space-evenly" }}
              >
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
              </View>
            </View>
          </View>
        </View>

        {/* Shared Task Section */}
        <View style={styles.taskContainer}>
          <View
            style={{
              width: "100%",
              height: 50,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.subHeaderText}>Shared</Text>

            <TouchableOpacity>
              <Text style={styles.createNewButton}>Completed</Text>
            </TouchableOpacity>
          </View>

          {/* Shared Task Container */}
          <View>
            {/* Swiping Left and Right to display payees and payers */}
            <View style={[styles.sharedTaskDisplayPanel]}>
              <TaskCard></TaskCard>
              <TaskCard></TaskCard>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD897",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  taskText: {
    color: "#E16363",
    fontSize: 20,
    fontWeight: "bold",
  },
  taskContainer: {
    marginTop: 20,
    width: "95%",
    alignItems: "center",
  },
  subHeaderText: {
    fontSize: 24,
    marginTop: 7,
  },
  createNewButton: {
    fontSize: 24,
    marginTop: 7,
    color: "#826335",
  },
  sharedTaskDisplayPanel: {
    width: "100%",
    height: 400,
    backgroundColor: "#777",
  },
});
