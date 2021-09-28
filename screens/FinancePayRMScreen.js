import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import { BasicText } from "../components";
import backButton from "../assets/back-to-room-button.png";

export default function FinancePayRMScreen({ navigation }) {
  const [selectedState, setSelectedState] = useState({
    selectedColor: "green",
    deselectedColor: "white",
    pressed: false,
  });

  const [roommateName, setRoommateName] = useState([
    {
      name: "Alexa",
    },
    {
      name: "Thomas",
    },
  ]);

  function goToFinanceScreen() {
    navigation.navigate("Finance");
  }

  function selectedButton() {
    setSelectedState({ pressed: !selectedState.pressed });
  }

  function requestButtonPressed() {
    //update database
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuBar}>
        <TouchableOpacity style={styles.backButton} onPress={goToFinanceScreen}>
          <Image source={backButton} style={styles.backButtonLogo} />
          <BasicText style={styles.backButtonText}>Back</BasicText>
        </TouchableOpacity>
      </View>

      {/* Write your code here */}
      <BasicText style={{ color: "#943855", fontSize: 40, paddingLeft: 20 }}>
        Room Mates
      </BasicText>
      <View>
        <ScrollView contentContainerStyle={{ height: 300, marginBottom: 10 }}>
          {roommateName.map((roommate, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.card,
                  {
                    alignSelf: "center",
                  },
                  selectedState.pressed
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "white" },
                ]}
                onPress={selectedButton}
              >
                <BasicText>{roommate.name}</BasicText>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <BasicText style={[styles.subHeader, { fontSize: 30 }]}>Amount</BasicText>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <BasicText style={styles.subHeader}>$</BasicText>
        <TextInput
          style={styles.inputMoneyField}
          placeholder="0"
          maxLength={7}
        ></TextInput>
      </View>
      <TextInput
        style={styles.inputNoteField}
        placeholder="Add a note"
      ></TextInput>
      <TouchableOpacity style={styles.payButton} onPress={requestButtonPressed}>
        <BasicText style={[styles.subHeader, { color: "#FFF", fontSize: 30 }]}>
          Request
        </BasicText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD897",
  },
  menuBar: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  backButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    right: 15,
  },
  backButtonLogo: {
    minHeight: 40,
    minWidth: 40,
    resizeMode: "center",
  },
  backButtonText: {
    color: "#E16363",
    fontSize: 20,
    alignSelf: "center",
    right: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: "90%",
    marginVertical: 10,
    borderWidth: 0.1,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  cardDisplayColumnFormat: {
    flexDirection: "column",
    justifyContent: "center",
  },
  cardText: {
    alignSelf: "center",
    marginRight: 20,
    fontSize: 25,
  },
  subHeader: {
    color: "#943855",
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "900",
  },
  inputMoneyField: {
    height: 50,
    width: "20%",
    textAlign: "center",
    fontSize: 40,
  },
  inputNoteField: {
    marginTop: 20,
    borderWidth: 0.8,
    borderColor: "#943855",
    width: "50%",
    height: 40,
    alignSelf: "center",
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  payButton: {
    backgroundColor: "#943855",
    width: 200,
    paddingVertical: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 20,
  },
});
