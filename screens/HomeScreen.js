import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen({ navigation }) {

  function goToFinance() {
    navigation.navigate("Finance");
  }

  function goToTask() {
    navigation.navigate("Task");
  }

  function goToChore() {
    navigation.navigate("Chore");
  }

  function goToCalandar() {
    navigation.navigate("Calendar");
  }

  return (
    <SafeAreaView style={styles.backgroundContainer}>

      <TouchableOpacity style={styles.buttonContainer} onPress={goToFinance}>
        <Text style = {styles.buttonText}>GO TO FINANCE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={goToTask}>
        <Text style = {styles.buttonText}>GO TO TASK</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={goToChore}>
        <Text style = {styles.buttonText}>GO TO CHORE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={goToCalandar}>
        <Text style = {styles.buttonText}>GO TO CALENDAR</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#FFD897",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 20,
    height: 75,
    width: "75%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#E16363",
  },
  buttonText: {
    color: "#FFD692",
    textAlign: "center",
    fontSize: 18,
  },
});