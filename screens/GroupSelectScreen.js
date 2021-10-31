import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasicText } from "../components";
import ProfilePicture from "../assets/Finance-assets/Kimberly.png";
import BuildingPicture from "../assets/Building.png";
import AddButtonLogo from "../assets/Finance-assets/AddButton.png";

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

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Image source={ProfilePicture} style={styles.profilePicture} />
      <BasicText style={styles.headerText}>Hello, Jane!</BasicText>
      <BasicText style={styles.subHeaderText}>
        Where will you be today?
      </BasicText>
      <View style={styles.bottomContainer}>
        <Image source={BuildingPicture} style={styles.buildingPicture} />
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
              left: 140,
              top: -30,
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
              left: 320,
              top: 60,
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
    height: 650,
    width: 410,
    resizeMode: "contain",
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
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottomButton: {
    width: "40%",
    marginTop: 10,
    flexDirection: "row",
  },
});
