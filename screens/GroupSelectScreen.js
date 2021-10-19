import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasicText } from "../components";
import ProfilePicture from "../assets/Finance-assets/Kimberly.png";
import BuildingPicture from "../assets/Building.png";
import AddButtonLogo from "../assets/Finance-assets/AddButton.png";

export default function GroupSelectScreen({ navigation }) {

  function goToHome() {
    navigation.navigate("Home");
  }

  function handleAddGroup() {

  }

  function handleGroup1() {

  }
  
  function handleGroup2() {

  }

  function handleGroup3() {

  }

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Image source={ProfilePicture} style={styles.profilePicture} />
      <BasicText style={styles.headerText}>Hello, Jane!</BasicText>
      <BasicText style={styles.subHeaderText}>
        Where will you be today?
      </BasicText>
      <View style={styles.bottomContainer}>
        <Image
          source={BuildingPicture}
          style={styles.buildingPicture}
        />
        <TouchableOpacity
          style={[
            styles.groupButton,
            {
              position: "absolute",
              left: 30,
              top: 60,
              backgroundColor: "#852C2C",
            },
          ]}
          onPress={goToHome}
        >
          <BasicText style={styles.groupButtonText}>Hall</BasicText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.groupButton,
            {
              position: "absolute",
              left: 140,
              top: -30,
              backgroundColor: "#3E852C",
            },
          ]}
          onPress={goToHome}
        >
          <BasicText style={styles.groupButtonText}>Family</BasicText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.groupButton,
            {
              position: "absolute",
              left: 320,
              top: 60,
              backgroundColor: "#2C4085",
            },
          ]}
          onPress={goToHome}
        >
          <BasicText style={styles.groupButtonText}>Friends</BasicText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.groupButton, { flexDirection: "row" }]}>
        <Image
          source={AddButtonLogo}
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
            alignSelf: "center",
          }}
        />
        <BasicText style={[styles.subHeaderText]}>Add Group</BasicText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#FFD897",
    alignItems: "center",
  },
  profilePicture: {
    marginTop: 20,
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  buildingPicture: {
    height: 400,
    width: 400,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 40,
    color: "#6E2142",
    fontFamily: 'MontserratSemiBold',
  },
  subHeaderText: {
    fontSize: 20,
    color: "#6E2142",
  },
  bottomContainer: {
    justifyContent: "center",
    width: "100%",
    height: "60%",
    marginTop: 40,
  },
  groupButton: {
    height: 30,
    backgroundColor: "#FFF",
    borderRadius: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  groupButtonText: {
    color: "#FFF",
    fontFamily: "MontserratBold",
  },
});
