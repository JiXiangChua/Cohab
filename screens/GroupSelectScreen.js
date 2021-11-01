import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasicText } from "../components";

import ProfilePicture from "../assets/Finance-assets/Kimberly.png";
import BuildingPicture from "../assets/Building.png";
import AddButtonLogo from "../assets/Finance-assets/AddButton.png";
import DayBackground from "../assets/Group-assets/DayBG.png";
import EveningBackground from "../assets/Group-assets/EveningBG.png";
import NightBackground from "../assets/Group-assets/NightSkyBG.png";
import BuildingAfternoonLogo from "../assets/Group-assets/grpbuildingafternoon.png";
import BuildingMorningLogo from "../assets/Group-assets/grpbuildingmorning.png";
import BuildingNightLogo from "../assets/Group-assets/grpbuildingnight.png";
import CarMorningLogo from "../assets/Group-assets/carMorning.gif";
import CarAfternoonLogo from "../assets/Group-assets/carAfternoon.gif";

import { AddGroupModal, JoinGroupModal } from "../components";

export default function GroupSelectScreen({ navigation }) {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [joinModalVisible, setJoinModalVisible] = useState(false);
  const [group1, setGroup1] = useState({
    description: "This is for all NTU EEE students",
    id: 1,
    groupname: "EEE",
  });
  const [group2, setGroup2] = useState({
    description: "This is for all hall 3 students",
    id: 8,
    groupname: "Hall",
  });
  const [group3, setGroup3] = useState({});

  function getGroups(userId) {
    const getGroupsURL = `http://10.27.124.66:9999/cohab/getGroupsByUser?userId=${userId}`;

    const init = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    function updateGroups(json) {
      const groups = json.groups;
      for (let i = 0; i < groups.length; i++) {
        if (i === 0) {
          setGroup1(group);
        }
        if (i === 1) {
          setGroup2(group);
        }
        if (i === 2) {
          setGroup3(group);
        }
      }
    }

    (async () => {
      try {
        const response = await fetch(getGroupsURL, init);
        const json = await response.json();
        console.log(json);
        updateGroups(json);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  function goToHome(selectedGroup) {
    navigation.navigate("Home", {
      groupName: selectedGroup,
    });
  }
  //getData();

  function handleAddGroup() {
    setAddModalVisible(true);
  }

  function handleJoinGroup() {
    setJoinModalVisible(true);
  }

  function handleGroup1() {
    goToHome(group1.groupname);
  }

  function handleGroup2() {
    goToHome(group2.groupname);
  }

  function handleGroup3() {
    goToHome("Friends");
  }

  useEffect(() => {
    getGroups(1);
  }, []);

  //Get Current Time
  var currentTime = new Date("2011-04-20T20:30:51.01"); //"2011-04-20T13:30:51.01" for troubleshooting
  console.log(currentTime.getHours());
  var backgroundImage;
  var rectangleMaskColor;
  var buildingImage;
  var carGIF;

  if (currentTime.getHours() >= 8 && currentTime.getHours() <= 16) {
    backgroundImage = DayBackground;
    rectangleMaskColor = "#B3E1F7";
    buildingImage = BuildingAfternoonLogo;
    carGIF = CarAfternoonLogo;
  } else if (currentTime.getHours() >= 19 || currentTime.getHours() <= 5) {
    backgroundImage = NightBackground;
    rectangleMaskColor = "#536D9E";
    buildingImage = BuildingNightLogo;
    carGIF = CarMorningLogo;
  } else {
    backgroundImage = EveningBackground;
    rectangleMaskColor = "#7E98EF";
    buildingImage = BuildingMorningLogo;
    carGIF = CarMorningLogo;
  }

  return (
    <View style={styles.backgroundContainer}>
      <View style={{ justifyContent: "center", position: "absolute" }}>
        <Image
          source={backgroundImage}
          style={{ height: 1000, width: 500 }}
        ></Image>
      </View>

      {/* <View
        style={[
          styles.backgroundImageRectMask,
          { backgroundColor: rectangleMaskColor },
        ]}
      ></View> */}
      <SafeAreaView>
        <Image source={ProfilePicture} style={styles.profilePicture} />
        <BasicText
          style={[styles.headerText, { color: "#FFF", alignSelf: "center" }]}
        >
          Hello, Jane!
        </BasicText>
        <BasicText
          style={[styles.subHeaderText, { color: "#FFF", alignSelf: "center" }]}
        >
          Where will you be today?
        </BasicText>
        <Image source={buildingImage} style={styles.buildingPicture} />
        <View style={{ position: "absolute", top: 55, left: -20 }}>
          <Image source={carGIF} />
        </View>
        <View style={styles.bottomContainer}>
          {/* <Image
            source={BuildingAfternoonLogo}
            style={styles.buildingPicture}
          /> */}
          <TouchableOpacity
            style={[
              styles.groupButton,
              {
                position: "absolute",
                left: 30,
                top: 100,
                backgroundColor: "#852C2C",
              },
            ]}
            onPress={handleGroup1}
          >
            <BasicText style={styles.groupButtonText}>
              {group1.groupname}
            </BasicText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.groupButton,
              {
                position: "absolute",
                left: 190,
                top: 30,
                backgroundColor: "#3E852C",
              },
            ]}
            onPress={handleGroup2}
          >
            <BasicText style={styles.groupButtonText}>
              {group2.groupname}
            </BasicText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.groupButton,
              {
                position: "absolute",
                left: 180,
                top: 260,
                backgroundColor: "#2C4085",
              },
            ]}
            onPress={handleGroup3}
          >
            <BasicText style={styles.groupButtonText}>Friends</BasicText>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity
            style={[styles.groupButton, styles.bottomButton]}
            onPress={handleAddGroup}
          >
            <Image source={AddButtonLogo} style={styles.buttonLogo} />
            <BasicText style={[styles.subHeaderText]}>Add Group</BasicText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.groupButton, styles.bottomButton]}
            onPress={handleJoinGroup}
          >
            <Image source={AddButtonLogo} style={styles.buttonLogo} />
            <BasicText style={[styles.subHeaderText]}>Join Group</BasicText>
          </TouchableOpacity>
        </View>
        <AddGroupModal
          addModalVisible={addModalVisible}
          setAddModalVisible={setAddModalVisible}
        />
        <JoinGroupModal
          joinModalVisible={joinModalVisible}
          setJoinModalVisible={setJoinModalVisible}
        />
      </SafeAreaView>
    </View>
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
    width: 400,
    height: 740,
    resizeMode: "contain",
    position: "absolute",
    top: "16%",
    alignSelf: "center",
  },
  headerText: {
    fontSize: 40,
    color: "#6E2142",
    fontFamily: "MontserratSemiBold",
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
  buttonLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
    alignSelf: "center",
  },
  bottomButtonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottomButton: {
    width: "40%",
    flexDirection: "row",
    marginTop: 50,
  },
  backgroundImageRectMask: {
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#536D9E",
    width: 500,
    height: 320,
    bottom: 0,
  },
});
