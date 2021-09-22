import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context'

import HomeScreenHeader from "../components/HomeScreenHeader";

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

      <HomeScreenHeader navigation = {navigation} />
      
      <ScrollView contentContainerStyle = {styles.scrollView}>
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
      </ScrollView>

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
  scrollView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width:400,
  },
  buttonContainer: {
    margin: 20,
    height: 75,
    width: "90%",
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