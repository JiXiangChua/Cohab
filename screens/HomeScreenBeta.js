import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
  Text,
  Animated,
  Easing,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";

import { BasicText, HomeScreenHeader } from "../components";
import CardboardLogo from "../assets/Home-assets/cardboard.png";
import BackButton from "../assets/back-to-room-button.png";
import GeneralButton from "../components/GeneralButton";
import WashingMachineLogo from "../assets/Home-assets/washingmachinerender.png";
import CalendarLogo from "../assets/Home-assets/calendarrender.png";
import TaskBoardLogo from "../assets/Home-assets/taskboardrender.png";
import PiggyBankLogo from "../assets/Home-assets/piggybankrender.png";

import TreePicture from "../assets/Home-assets/background.png";
import RoomPicture from "../assets/Home-assets/roomPicture.png";
import BankPicture from "../assets/Home-assets/piggybank.png";
import ChorePicture from "../assets/Home-assets/washingmachine.png";
import GroupPicture from "../assets/Home-assets/door.png";
import TaskPicture from "../assets/Home-assets/taskboard.png";
import CalendarPicture from "../assets/Home-assets/calendar.png";
import dog1Gif from "../assets/Home-assets/dog1.gif";

export default function HomeScreenBeta({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const [taskBoard, setTaskBoard] = useState(false);
  const [piggyBank, setPiggyBank] = useState(false);
  const [washingMachine, setWashingMachine] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [dogImage, setDogImage] = useState(true);

  const [furnitureModal, setFurnitureModal] = useState(true);
  const [overviewModal, setOverviewModal] = useState(false);
  const [functionModal, setFunctionModal] = useState(false);
  const [itemID, setItemID] = useState(-1);

  const [furniture, setFurniture] = useState([
    {
      id: 1,
      name: "Washing Machine",
      image: WashingMachineLogo,
      functionName: "Chore",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 2,
      name: "Task Board",
      image: TaskBoardLogo,
      functionName: "Task",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 3,
      name: "Calendar",
      image: CalendarLogo,
      functionName: "Calendar",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 4,
      name: "Piggy Bank",
      image: PiggyBankLogo,
      functionName: "Finance",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
  ]);

  const furnitureFunction = [
    {
      name: "Wallet",
      Description: "This is a Wallet",
    },
    {
      name: "Chore",
      Description: "This is a Chore",
    },
    {
      name: "Task",
      Description: "This is a Task",
    },
    {
      name: "Calendar",
      Description: "This is a Calandar",
    },
  ];

  function renderChooseFurniture() {
    if (furnitureModal == true) {
      return (
        <ScrollView style={{ width: "100%" }}>
          <BasicText style={{ color: "#E16363" }}>
            Customise your furniture!
          </BasicText>
          <View
            style={{
              flexDirection: "row",
              resizeMode: "contain",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              marginLeft: "6%",
              marginBottom: 20,
            }}
          >
            {furniture.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.furnitureButton,
                    // { backgroundColor: item.image },
                  ]}
                  onPress={() => {
                    setFurnitureModal(!furnitureModal);
                    setOverviewModal(!overviewModal);
                    // renderOverviewModal(item.id);
                    setItemID(item.id);
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: "100%", height: "120%" }}
                    resizeMode="contain"
                  ></Image>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      );
    }
  }

  function setVisibilityOfSelectedFurniture(selectedFurniture) {
    switch (selectedFurniture) {
      case 1:
        setWashingMachine(true);
        break;
      case 2:
        setTaskBoard(true);
        break;
      case 3:
        setCalendar(true);
        break;
      case 4:
        setPiggyBank(true);
        break;
      default:
        console.log("Error while setting visibility of button");
    }
  }

  function renderOverviewModal() {
    console.log(itemID);
    console.log(furniture);
    var selectedFurniture;

    if (overviewModal == true && itemID > 0) {
      return (
        <View style={{ width: "100%" }}>
          {/* Menu Items */}
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                setOverviewModal(!overviewModal);
                setFurnitureModal(!furnitureModal);
              }}
            >
              <Image
                source={BackButton}
                style={{ width: 30, height: 30 }}
              ></Image>
            </TouchableOpacity>
            <BasicText
              style={{ color: "#E16363", fontSize: 18, alignSelf: "center" }}
            >
              {furniture[itemID - 1].name}
            </BasicText>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View
              style={[
                styles.furnitureButton,
                {
                  width: 100,
                  height: 100,
                  marginRight: 30,
                },
              ]}
            >
              {furniture.map((item, index) => {
                if (item.id == itemID) {
                  return (
                    <Image
                      key={index}
                      source={item.image}
                      style={{ width: "100%", height: "120%" }}
                      resizeMode="contain"
                    ></Image>
                  );
                }
              })}
            </View>
            <View style={{ flexDirection: "column", width: "50%" }}>
              {furniture.map((item, index) => {
                if (item.id == itemID) {
                  selectedFurniture = item.id;
                  return (
                    <View key={index}>
                      <View style={styles.functionCardStyle}>
                        <BasicText style={{ fontSize: 18 }}>
                          {item.functionName}
                        </BasicText>
                      </View>
                      <BasicText style={{ marginVertical: 10 }}>
                        {item.description}
                      </BasicText>
                    </View>
                  );
                }
              })}
            </View>
          </View>

          {/* Buttons Section */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              style={styles.functionModalButtonStyle}
              onPress={() => {
                setOverviewModal(!overviewModal);
                setFunctionModal(!functionModal);
              }}
            >
              <BasicText style={styles.functionModalButtonText}>
                Change Function
              </BasicText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.functionModalButtonStyle}
              onPress={() => {
                setOverviewModal(!overviewModal);
                setModalVisible(!modalVisible);
                setFurnitureModal(true);
                setVisibilityOfSelectedFurniture(selectedFurniture);
              }}
            >
              <BasicText style={styles.functionModalButtonText}>
                Add to Room
              </BasicText>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  function renderChooseFunction() {
    console.log(furniture);
    if (functionModal == true) {
      return (
        <View>
          {/* Menu Items */}
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                setOverviewModal(!overviewModal);
                setFunctionModal(!functionModal);
              }}
            >
              <Image
                source={BackButton}
                style={{ width: 30, height: 30 }}
              ></Image>
            </TouchableOpacity>
            <BasicText
              style={{ color: "#E16363", fontSize: 18, alignSelf: "center" }}
            >
              {furniture[itemID - 1].name}
            </BasicText>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={[
                styles.furnitureButton,
                {
                  width: 140,
                  height: 140,
                  marginRight: 30,
                },
              ]}
            >
              {furniture.map((item, index) => {
                if (item.id == itemID) {
                  return (
                    <Image
                      key={index}
                      source={item.image}
                      style={{ width: "100%", height: "120%" }}
                      resizeMode="contain"
                    ></Image>
                  );
                }
              })}
            </View>
            <ScrollView>
              {furnitureFunction.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.functionModalButtonStyle,
                      { marginBottom: 10, marginLeft: 4.5 },
                    ]}
                    onPress={() => {
                      var updatedFurniture = furniture.map((object) =>
                        object.id == itemID
                          ? {
                              ...object,
                              functionName: item.name,
                            }
                          : object
                      );

                      setFurniture(updatedFurniture);
                      setFunctionModal(!functionModal);
                      setOverviewModal(!overviewModal);
                    }}
                  >
                    <BasicText style={styles.functionModalButtonText}>
                      {item.name}
                    </BasicText>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      );
    }
  }

  function assignCustomFunctionsToFurniture(nameOfFunction) {
    switch (nameOfFunction) {
      case "Finance":
        goToFinance();
        break;
      case "Task":
        goToTask();
        break;
      case "Chore":
        goToChore();
        break;
      case "Calendar":
        goToCalendar();
        break;
      default:
      //asdasd
    }
  }

  function goToFinance() {
    navigation.navigate("Finance");
  }

  function goToTask() {
    navigation.navigate("Task");
  }

  function goToChore() {
    navigation.navigate("Chore");
  }

  function goToCalendar() {
    navigation.navigate("Calendar");
  }

  function goToGroupSelect() {
    navigation.navigate("GroupSelect");
  }

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <HomeScreenHeader navigation={navigation} />
      {/* For troubleshooting customise function, when fully completed can delete */}
      {/* {piggyBank && (
        <TouchableOpacity
          onPress={() => {
            // console.log(furniture[3].functionName);
            assignCustomFunctionsToFurniture(furniture[3].functionName);
          }}
          onLongPress={() => {
            setPiggyBank(false);
          }}
        >
          <Image
            source={BankPicture}
            style={{ width: 200, height: 200 }}
          ></Image>
        </TouchableOpacity>
      )} */}

      <View style={styles.header}>
        <BasicText style={{ color: "#E16363", fontSize: 30 }}>Hall</BasicText>
      </View>

      <ScrollView style={styles.scrollView} horizontal={true}>
        <ScrollView style={styles.scrollView}>
          {/* <View style={styles.roomContainer}>
            <Image source={TreePicture} style={styles.backgroundStyle} />
            <Image source={RoomPicture} style={styles.roomStyle} />

            {piggyBank && (
              <TouchableOpacity
                onPress={() => {
                  // console.log(furniture[3].functionName);
                  assignCustomFunctionsToFurniture(furniture[3].functionName);
                }}
                style={[
                  styles.buttonStyle,
                  {
                    top: Dimensions.get("window").height * 0.75 + 75,
                    left: Dimensions.get("window").height * 0.75 - 30,
                    width: Dimensions.get("window").height * 0.11,
                    height: Dimensions.get("window").height * 0.08,
                  },
                ]}
                onLongPress={() => {
                  setPiggyBank(false);
                }}
              >
                <View
                  style={[
                    styles.buttonContainer,
                    {
                      top: Dimensions.get("window").height * -0.75 - 126,
                      left: Dimensions.get("window").height * -0.75 + 30,
                    },
                  ]}
                >
                  <Image source={BankPicture} style={styles.buttonImageStyle} />
                </View>
              </TouchableOpacity>
            )}
            {taskBoard && (
              <TouchableOpacity
                onPress={() => {
                  // console.log(furniture[3].functionName);
                  assignCustomFunctionsToFurniture(furniture[1].functionName);
                }}
                style={[
                  styles.buttonStyle,
                  {
                    top: Dimensions.get("window").height * 0.75 + 60,
                    left: Dimensions.get("window").height * 0.75 + 50,
                    width: Dimensions.get("window").height * 0.08,
                    height: Dimensions.get("window").height * 0.09,
                  },
                ]}
                onLongPress={() => {
                  setTaskBoard(false);
                }}
              >
                <View
                  style={[
                    styles.buttonContainer,
                    {
                      top: Dimensions.get("window").height * -0.75 - 111,
                      left: Dimensions.get("window").height * -0.75 - 50,
                    },
                  ]}
                >
                  <Image source={TaskPicture} style={styles.buttonImageStyle} />
                </View>
              </TouchableOpacity>
            )}
            {washingMachine && (
              <TouchableOpacity
                onPress={() => {
                  // console.log(furniture[3].functionName);
                  assignCustomFunctionsToFurniture(furniture[0].functionName);
                }}
                style={[
                  styles.buttonStyle,
                  {
                    width: 450,
                    height: 0,
                    // top: Dimensions.get("window").height * 0.75 + 5,
                    // left: Dimensions.get("window").height * 0.75 - 222,
                    // width: Dimensions.get("window").height * 0.1,
                    // height: Dimensions.get("window").height * 0.13,
                  },
                ]}
                onLongPress={() => {
                  setWashingMachine(false);
                }}
              >
                <View
                  style={[
                    styles.buttonContainer,
                    {
                      top: Dimensions.get("window").height * -0.75 - 56,
                      left: Dimensions.get("window").height * -0.75 + 222,
                    },
                  ]}
                >
                  <Image
                    source={ChorePicture}
                    style={styles.buttonImageStyle}
                  />
                </View>
              </TouchableOpacity>
            )}
            {calendar && (
              <TouchableOpacity
                onPress={() => {
                  // console.log(furniture[3].functionName);
                  assignCustomFunctionsToFurniture(furniture[2].functionName);
                }}
                style={[
                  styles.buttonStyle,
                  {
                    top: Dimensions.get("window").height * 0.75 - 45,
                    left: Dimensions.get("window").height * 0.75 + 90,
                    width: Dimensions.get("window").height * 0.08,
                    height: Dimensions.get("window").height * 0.11,
                  },
                ]}
                onLongPress={() => {
                  setCalendar(false);
                }}
              >
                <View
                  style={[
                    styles.buttonContainer,
                    {
                      top: Dimensions.get("window").height * -0.75 - 6,
                      left: Dimensions.get("window").height * -0.75 - 90,
                    },
                  ]}
                >
                  <Image
                    source={CalendarPicture}
                    style={styles.buttonImageStyle}
                  />
                </View>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={goToGroupSelect}
              style={[
                styles.buttonStyle,
                {
                  // top: Dimensions.get("window").height * 0.75 - 95,
                  // left: Dimensions.get("window").height * 0.75 + 10,
                  // width: Dimensions.get("window").height * 0.1,
                  // height: Dimensions.get("window").height * 0.19,
                },
              ]}
            >
              <View
                style={[
                  styles.buttonContainer,
                  {
                    top: Dimensions.get("window").height * -0.75 + 44,
                    left: Dimensions.get("window").height * -0.75 - 10,
                  },
                ]}
              >
                <Image source={GroupPicture} style={styles.buttonImageStyle} />
              </View>
            </TouchableOpacity>

            {dogImage && <Image source={dog1Gif} style={styles.mascotStyle} />}
          </View> */}
          <View style={{ justifyContent: "center" }}>
            <Image
              source={TreePicture}
              style={{ width: 1000, height: 1000 }}
            ></Image>
          </View>
          <View style={{ position: "absolute", top: 300, left: 250 }}>
            <Image
              source={RoomPicture}
              style={{ width: 500, height: 500 }}
            ></Image>
          </View>

          <TouchableOpacity
            style={{
              width: 50,
              height: 100,
              position: "absolute",
              top: 500,
              left: 520,
            }}
            onPress={goToGroupSelect}
          >
            <Image
              source={GroupPicture}
              style={{
                resizeMode: "contain",
                width: 150,
                height: 150,
                alignSelf: "center",
              }}
            ></Image>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
      {/* <CustomizeFurniture /> */}
      <View>
        <TouchableOpacity
          style={styles.CardboardButton}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Image source={CardboardLogo} style={styles.CardboardStyle}></Image>
        </TouchableOpacity>
        <Modal
          isVisible={modalVisible}
          avoidKeyboard={true}
          animationIn="fadeIn"
          animationOut="fadeOut"
          backdropOpacity={0.1}
          onBackdropPress={() => setModalVisible(!modalVisible)}
        >
          <View style={[styles.furnitureModal, { height: 260 }]}>
            {renderChooseFurniture()}
            {renderOverviewModal()}
            {renderChooseFunction()}
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#FFD897",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    // zIndex: 1,
    alignSelf: "center",
    top: 90,
  },
  backgroundAnimContainer: {
    position: "absolute",
    // zIndex: 0,
    height: Dimensions.get("window").height * 1,
    top: 90,
    justifyContent: "center",
  },
  backgroundAnim: {
    resizeMode: "cover",
    height: "100%",
  },
  scrollView: {
    // zIndex: 0,
  },
  roomContainer: {
    height: Dimensions.get("window").height * 1.5,
    width: Dimensions.get("window").height * 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  roomStyle: {
    resizeMode: "contain",
    height: "80%",
    width: "80%",
    // zIndex: 2,
    marginBottom: 100,
  },
  backgroundStyle: {
    position: "absolute",
    resizeMode: "contain",
    height: "100%",
    width: "100%",
    // zIndex: 1,
  },
  buttonStyle: {
    position: "absolute",
    // zIndex: 3,
  },
  buttonContainer: {
    position: "absolute",
    height: Dimensions.get("window").height * 1.5,
    width: Dimensions.get("window").height * 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImageStyle: {
    resizeMode: "contain",
    height: "80%",
    width: "80%",
  },
  mascotStyle: {
    position: "absolute",
    height: "6.8%",
    width: "6.8%",
    top: Dimensions.get("window").height * 0.75 + 68,
    left: Dimensions.get("window").height * 0.75 - 90,
    // zIndex: 3,
  },
  text: {
    fontSize: 42,
    // zIndex: 1,
  },
  CardboardButton: {
    //backgroundColor: "#FFF",
    justifyContent: "center",
    marginLeft: "60%",
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 10,
    bottom: 30,
  },
  CardboardStyle: {
    width: 180,
    height: 150,
  },
  furnitureModal: {
    height: 200,
    width: "100%",
    backgroundColor: "#FFFAF2",
    alignSelf: "center",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
    top: "17%",
  },
  furnitureButton: {
    height: 120,
    width: 120,
    margin: 10,
  },
  functionCardStyle: {
    backgroundColor: "#F8F0DF",
    width: "100%",
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  functionModalButtonStyle: {
    backgroundColor: "#FFD897",
    borderRadius: 30,
    width: 150,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  functionModalButtonText: {
    color: "#8F201D",
    fontSize: 15,
  },
});
