import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasicText } from "../components";

import ProfilePicture from "../assets/Finance-assets/Kimberly.png";
import BuildingPicture from "../assets/Building.png";
import AddButtonLogo from "../assets/Finance-assets/AddButton.png";
import dog1Gif from "../assets/Home-assets/doggo.gif";
import DayBackground from "../assets/Group-assets/DayBG.png";
import EveningBackground from "../assets/Group-assets/EveningBG.png";
import NightBackground from "../assets/Group-assets/NightSkyBG.png";
import BuildingAfternoonLogo from "../assets/Group-assets/grpbuildingafternoon.png";
import BuildingMorningLogo from "../assets/Group-assets/grpbuildingmorning.png";

import { AddGroupModal, JoinGroupModal } from "../components";
import {
  copilot,
  walkthroughable,
  CopilotStep,
  copilotEvents,
} from "react-native-copilot";
// import { moderateScale } from "react-native-size-matters";

export function GroupSelectScreen(props) {
  const { navigation } = props;
  const [copilotStatus, setCopilotStatus] = useState(false);
  const [avatarSpeechInterval, setAvatarSpeechInterval] = useState(true);
  const CopilotText = walkthroughable(Text);
  const [secondStepActive, setsecondStep] = useState(true);
  const WalkthroughableText = walkthroughable(Text);
  const WalkthroughableImage = walkthroughable(Image);
  const WalkthroughableView = walkthroughable(View);
  const WalkthroughableButton = walkthroughable(TouchableOpacity);

  useEffect(() => {
    props.copilotEvents.on("stepChange", handleStepChange);
  }, []);

  const handleStepChange = (step) => {
    console.log(`current step is: ${step.name}`);
  };

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
  var currentTime = new Date(); //"2011-04-20T13:30:51.01" for troubleshooting
  var backgroundImage;
  var rectangleMaskColor;
  var buildingImage;

  if (currentTime.getHours() >= 8 && currentTime.getHours() <= 16) {
    backgroundImage = DayBackground;
    rectangleMaskColor = "#B3E1F7";
    buildingImage = BuildingAfternoonLogo;
  } else if (currentTime.getHours() >= 19 || currentTime.getHours() <= 5) {
    backgroundImage = NightBackground;
    rectangleMaskColor = "#536D9E";
    buildingImage = BuildingMorningLogo;
  } else {
    backgroundImage = EveningBackground;
    rectangleMaskColor = "#7E98EF";
    buildingImage = BuildingMorningLogo;
  }

  //Set Dog speech bubble interval
  function avatarSpeechBubble() {
    setTimeout(() => {
      setAvatarSpeechInterval(!avatarSpeechInterval);
    }, 4000);
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
>>>>>>> jixiang
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

        {/* {Dog Avatar} */}
        <TouchableOpacity
          style={{
            width: 30,
            height: 130,
            position: "absolute",
            top: 650,
            left: 60,
          }}
          onPress={() => {
            // assignCustomFunctionsToFurniture(furniture[2].functionName);
            setCopilotStatus(!copilotStatus);
            props.start();
          }}
        >
          <Image
            source={dog1Gif}
            style={{
              resizeMode: "contain",
              width: 180,
              height: 80,
              alignSelf: "center",
              shadowColor: "#FFF",
              shadowOffset: { width: -2, height: 3 },
              shadowOpacity: 0.6,
              shadowRadius: 3,
            }}
          ></Image>
        </TouchableOpacity>

        {/* old speeech */}
        {/* <View
          style={[
            styles.item,
            styles.itemOut,
            { positon: "absolute", top: 410, right: 60 },
          ]}
        >
          <View style={[styles.balloon, { backgroundColor: "#FFF" }]}>
            <Text style={{ paddingTop: 5, color: "black" }}>
              Welcome to Cohab! Click me.
            </Text>
            <View
              style={[styles.arrowContainer, styles.arrowRightContainer]}
            ></View>
          </View> */}

        {/* New speech bubble */}
        {avatarSpeechBubble()}
        <View
          style={{
            width: 300,
            height: 100,
            position: "absolute",
            top: 600,
            left: 80,
          }}
        >
          {avatarSpeechInterval && (
            <View
              style={[
                {
                  backgroundColor: "#fff",
                  padding: 10,
                  // top: 420,
                  // left: 180,
                  maxWidth: "50%",
                  borderRadius: 20,
                },
              ]}
            >
              <View style={styles.leftArrow}></View>

              <View style={styles.leftArrowOverlap}></View>
              <Text style={{ fontSize: 14, color: "black" }}>
                Welcome to Cohab! Click me for guide!
              </Text>
            </View>
          )}
        </View>

        {/* </View> */}

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
                left: -50,
                top: 90,
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
                left: 120,
                top: 20,
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
                left: 100,
                top: 250,
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
      {/* Copilot View */}
      {copilotStatus && (
        <View>
          {/* Tut step 1 */}
          <View style={{ position: "absolute", left: 80, bottom: 480 }}>
            <CopilotStep
              text="Select which group you want to view"
              order={1}
              name="group"
            >
              <WalkthroughableView>
                <View style={{ width: 70, height: 50 }}></View>
              </WalkthroughableView>
            </CopilotStep>
          </View>
          {/* Tut step 2 */}
          <View style={{ top: -5, right: 90 }}>
            <CopilotStep text="Create a new group" order={2} name="add group">
              <WalkthroughableView>
                <View style={{ width: 180, height: 50 }}></View>
              </WalkthroughableView>
            </CopilotStep>
          </View>
          {/* Tut step 3 */}
          <View style={{ position: "absolute", left: 95, top: -5 }}>
            <CopilotStep
              text="Join an existing group"
              order={3}
              name="join group"
            >
              <WalkthroughableText>
                <View style={{ width: 180, height: 50 }}></View>
              </WalkthroughableText>
            </CopilotStep>
          </View>
        </View>
      )}
    </View>
  );
}

export default copilot()(GroupSelectScreen);

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#FFD897",
    alignItems: "center",
  },
  profilePicture: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  buildingPicture: {
    width: 420,
    height: 760,
    resizeMode: "contain",
    position: "absolute",
    top: "15%",
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
    marginTop: 55,
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
    position: "absolute",
    alignSelf: "center",
    bottom: "-5%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottomButton: {
    width: "40%",
    flexDirection: "row",
  },
  backgroundImageRectMask: {
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#536D9E",
    width: 500,
    height: 320,
    bottom: 0,
  },
  // old speech
  // item: {
  //   marginVertical: moderateScale(7, 2),
  //   flexDirection: "row",
  // },
  // itemIn: {
  //   marginLeft: 20,
  // },
  // itemOut: {
  //   alignSelf: "flex-end",
  //   marginRight: 20,
  // },
  // balloon: {
  //   maxWidth: moderateScale(300, 2),
  //   paddingHorizontal: moderateScale(10, 2),
  //   paddingTop: moderateScale(5, 2),
  //   paddingBottom: moderateScale(7, 2),
  //   borderRadius: 20,
  // },
  // arrowContainer: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   zIndex: -1,
  //   flex: 1,
  // },
  // arrowLeftContainer: {
  //   justifyContent: "flex-end",
  //   alignItems: "flex-start",
  // },

  // arrowRightContainer: {
  //   justifyContent: "flex-end",
  //   alignItems: "flex-end",
  // },

  // arrowLeft: {
  //   left: moderateScale(-6, 0.5),
  // },

  // arrowRight: {
  //   right: moderateScale(-6, 0.5),
  // },

  //New speech bubble
  // rightArrow: {
  //   position: "absolute",
  //   backgroundColor: "#fff",
  //   //backgroundColor:"red",
  //   width: 20,
  //   height: 25,
  //   bottom: 0,
  //   borderBottomLeftRadius: 25,
  //   right: -10,
  // },

  // rightArrowOverlap: {
  //   position: "absolute",
  //   backgroundColor: "#eeeeee",
  //   //backgroundColor:"green",
  //   width: 20,
  //   height: 35,
  //   bottom: -6,
  //   borderBottomLeftRadius: 18,
  //   right: -20,
  // },

  /*Arrow head for recevied messages*/
  leftArrow: {
    position: "absolute",
    backgroundColor: "#fff",
    //backgroundColor:"red",
    width: 20,
    height: 15,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: 0,
  },

  leftArrowOverlap: {
    position: "absolute",
    backgroundColor: "#fff",
    //backgroundColor:"green",
    width: 20,
    height: 15,
    bottom: -3,
    borderBottomRightRadius: 18,
    left: 0,
  },
});
