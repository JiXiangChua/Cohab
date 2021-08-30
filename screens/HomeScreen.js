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
    navigation.navigate("FinanceStack");
  }

  function goToTask() {
    navigation.navigate("TaskStack");
  }

  function goToChore() {
    navigation.navigate("ChoreStack");
  }

  function goToCalandar() {
    navigation.navigate("CalandarStack");
  }

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View>
        <Text> Hello world !</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={goToFinance}>
          <Text>GO TO FINANCE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={goToTask}>
          <Text>GO TO TASK</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={goToChore}>
          <Text>GO TO CHORE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={goToCalandar}>
          <Text>GO TO CALANDAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#FFD692",
  },
  buttonContainer: {
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
});
