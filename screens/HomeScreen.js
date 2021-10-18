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

// import CustomizeFurniture from "./CustomizeFurniture";

// import RoomPicture from "../assets/Home-assets/roomdraft.png";
// import BankPicture from "../assets/Home-assets/pigdraft.png";
// import ChorePicture from "../assets/Home-assets/washingmachinedraft.png";
// import GroupPicture from "../assets/Home-assets/doordraft.png";
// import TaskPicture from "../assets/Home-assets/boarddraft.png";
// import CalendarPicture from "../assets/Home-assets/cardboard.png";
// import CloudGif from "../assets/Home-assets/clouds.gif";

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  function CustomizeFurniture() {
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
          "Planning a huge party and need your housemate(s)’ approval? Send a polite request here!",
      },
      {
        id: 2,
        name: "Task Board",
        image: TaskBoardLogo,
        functionName: "Task",
        description:
          "Planning a huge party and need your housemate(s)’ approval? Send a polite request here!",
      },
      {
        id: 3,
        name: "Calendar",
        image: CalendarLogo,
        functionName: "Calendar",
        description:
          "Planning a huge party and need your housemate(s)’ approval? Send a polite request here!",
      },
      {
        id: 4,
        name: "Piggy Bank",
        image: PiggyBankLogo,
        functionName: "Finance",
        description:
          "Planning a huge party and need your housemate(s)’ approval? Send a polite request here!",
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

    function renderOverviewModal() {
      console.log(itemID);
      console.log(furniture);
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

    return (
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
    );
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

      <View style={styles.header}>
        <BasicText style={{ color: "#E16363", fontSize: 30 }}>Hall</BasicText>
      </View>
      <View style={styles.backgroundAnimContainer}>
        <Image style={styles.backgroundAnim} />
      </View>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.roomContainer}>
            <Image style={styles.roomStyle} />
            <TouchableOpacity
              onPress={goToFinance}
              style={[
                styles.buttonContainer,
                {
                  top: "57%",
                  left: "42%",
                  width: "4%",
                  height: "4%",
                },
              ]}
            >
              <Image style={styles.buttonStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goToTask}
              style={[
                styles.buttonContainer,
                {
                  top: "48%",
                  left: "57%",
                  width: "8%",
                  height: "8%",
                },
              ]}
            >
              <Image style={styles.buttonStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goToChore}
              style={[
                styles.buttonContainer,
                {
                  top: "48%",
                  left: "22%",
                  width: "12%",
                  height: "12%",
                },
              ]}
            >
              <Image style={styles.buttonStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goToCalendar}
              style={[
                styles.buttonContainer,
                {
                  top: "48%",
                  left: "37%",
                  width: "6%",
                  height: "6%",
                },
              ]}
            >
              <Image style={styles.buttonStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goToGroupSelect}
              style={[
                styles.buttonContainer,
                {
                  top: "36.9%",
                  left: "50.7%",
                  width: "10%",
                  height: "10%",
                },
              ]}
            >
              <Image style={styles.buttonStyle} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
      <CustomizeFurniture />
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
    zIndex: 1,
    alignSelf: "center",
    top: 90,
  },
  backgroundAnimContainer: {
    position: "absolute",
    zIndex: 0,
    height: Dimensions.get("window").height * 1,
    top: 90,
    justifyContent: "center",
  },
  backgroundAnim: {
    resizeMode: "cover",
    height: "100%",
  },
  scrollView: {
    zIndex: 1,
  },
  roomContainer: {
    height: Dimensions.get("window").height * 1,
    width: Dimensions.get("window").height * 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    backgroundColor: "black",
  },
  roomStyle: {
    resizeMode: "contain",
    height: "120%",
    width: "120%",
    zIndex: 2,
  },
  buttonStyle: {
    resizeMode: "contain",
    height: "200%",
    width: "200%",
  },
  text: {
    fontSize: 42,
    zIndex: 1,
  },
  CardboardButton: {
    // backgroundColor: "#FFF",
    justifyContent: "center",
    marginLeft: "60%",
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
