import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MenuBar from "../components/MenuBar";
import MyTasks from "../components/task/MyTasks";
import SharedTasks from "../components/task/SharedTasks";

export default function TaskScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <MenuBar navigation = {navigation} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.taskText}> Tasks </Text>
        <MyTasks />
        <SharedTasks />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 400,
  },
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
});
