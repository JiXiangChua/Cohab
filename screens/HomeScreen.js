import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasicText, HomeScreenHeader } from "../components";

import RoomPicture from "../assets/room.png";

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

  function goToGroupSelect() {
    navigation.navigate("GroupSelect");
  }

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <HomeScreenHeader navigation={navigation} />
      <BasicText style={{ color: "#E16363", fontSize: 30 }}>Hall</BasicText>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
          <Image source={RoomPicture} style={styles.roomStyle} />
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              {
                position: "absolute",
                top: 500,
                left: 90,
                width: 50,
                height: 30,
              },
            ]}
            onPress={goToFinance}
          >
            <BasicText style={styles.buttonText}>FINANCE</BasicText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonContainer,
              {
                position: "absolute",
                top: 390,
                left: 260,
                width: 50,
                height: 30,
              },
            ]}
            onPress={goToTask}
          >
            <BasicText style={styles.buttonText}>TASK</BasicText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonContainer,
              {
                position: "absolute",
                top: 410,
                left: 70,
                width: 50,
                height: 30,
              },
            ]}
            onPress={goToChore}
          >
            <BasicText style={styles.buttonText}>CHORE</BasicText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonContainer,
              {
                position: "absolute",
                top: 300,
                left: 210,
                width: 50,
                height: 30,
              },
            ]}
            onPress={goToCalandar}
          >
            <BasicText style={styles.buttonText}>CALENDAR</BasicText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonContainer,
              {
                position: "absolute",
                top: 350,
                left: 140,
                width: 50,
                height: 30,
              },
            ]}
            onPress={goToGroupSelect}
          >
            <BasicText style={styles.buttonText}>GROUP</BasicText>
          </TouchableOpacity>
        </ScrollView>
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
    width: 400,
  },
  buttonContainer: {
    margin: 20,
    height: 75,
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#E16363",
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFD692",
    textAlign: "center",
    fontSize: 10,
  },
  roomStyle: {
    alignSelf: "center",
    position: "absolute",
    flex: 1,
    resizeMode: "contain",
    width: "100%",
  },
});
