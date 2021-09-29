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
import { SafeAreaView } from "react-native-safe-area-context";

import { MenuBar , MyTasks , SharedTasks , BasicText } from "../components";

export default function TaskScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <MenuBar navigation = {navigation} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewStyle}>
        <BasicText style = {styles.taskText}> Tasks </BasicText>
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
  },
});
