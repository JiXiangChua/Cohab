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

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Image source={ProfilePicture} style={styles.profilePicture} />
      <BasicText style={styles.headerText}>Hello, Jane!</BasicText>
      <BasicText style={styles.subHeaderText}>
        Where will you be today?
      </BasicText>
      <View
        style={{
          justifyContent: "center",
          width: "100%",
          height: "60%",
          marginTop: 40,
        }}
      >
        <Image
          source={BuildingPicture}
          style={{ width: 440, height: 630, top: -20 }}
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
    marginTop: 50,
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  headerText: {
    marginTop: 20,
    fontSize: 40,
    color: "#6E2142",
    fontWeight: "bold",
  },
  subHeaderText: {
    marginTop: 5,
    fontSize: 20,
    color: "#6E2142",
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
    fontWeight: "bold",
  },
});
