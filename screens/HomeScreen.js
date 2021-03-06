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
  Switch,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";
//import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
import {
  copilot,
  walkthroughable,
  CopilotStep,
  copilotEvents,
} from "react-native-copilot";

import { BasicText, HomeScreenHeader } from "../components";
import CardboardLogo from "../assets/Home-assets/cardboard.png";
import BackButton from "../assets/back-to-room-button.png";
import GeneralButton from "../components/GeneralButton";
import BorderColorButton from "../components/BorderColorButton";
import WashingMachineLogo from "../assets/Home-assets/washingmachinerender.png";
import CalendarLogo from "../assets/Home-assets/calendarrender.png";
import TaskBoardLogo from "../assets/Home-assets/taskboardrender.png";
import PiggyBankLogo from "../assets/Home-assets/piggybankrender.png";
import BeansLogo from "../assets/Home-assets/beans.png";
import BigPlants1Logo from "../assets/Home-assets/bigplants1.png";
import BigPlants2Logo from "../assets/Home-assets/bigplants2.png";
import CoffeeMachineLogo from "../assets/Home-assets/coffeemachine.png";
import CoffeeTableLogo from "../assets/Home-assets/coffeetable.png";
import DoorMatLogo from "../assets/Home-assets/doormat.png";
import KitchenCounterLogo from "../assets/Home-assets/kitchencounter.png";
import KitchenSetLogo from "../assets/Home-assets/kitchenset.png";
import MediumPlantsLogo from "../assets/Home-assets/mediumplants.png";
import Painting1Logo from "../assets/Home-assets/painting1.png";
import Painting2Logo from "../assets/Home-assets/painting2.png";
import PetBowlsLogo from "../assets/Home-assets/petbowls.png";
import RefrigeratorLogo from "../assets/Home-assets/refrigerator.png";
import RugLogo from "../assets/Home-assets/rug.png";
import ShelfLogo from "../assets/Home-assets/shelf.png";
import ShoeRackLogo from "../assets/Home-assets/shoerack.png";
import SmallPlantsLogo from "../assets/Home-assets/smallplants.png";
import SofaLogo from "../assets/Home-assets/sofa.png";
import TVSetLogo from "../assets/Home-assets/tvset.png";

import TreePicture from "../assets/Home-assets/building.png";
import RoomPicture from "../assets/Home-assets/roomPicture.png";
import BankPicture from "../assets/Home-assets/piggybank.png";
import ChorePicture from "../assets/Home-assets/washingmachine.png";
import GroupPicture from "../assets/Home-assets/door.png";
import TaskPicture from "../assets/Home-assets/taskboard.png";
import CalendarPicture from "../assets/Home-assets/calendar.png";
import dog1Gif from "../assets/Home-assets/dog1.gif";
import { startDetecting } from "react-native/Libraries/Utilities/PixelRatio";

export function HomeScreen(props) {
  const { navigation, route } = props;
  //console.log(props.copilotEvents);
  // console.log(route.params.groupName);

  const [modalVisible, setModalVisible] = useState(false);

  const [taskBoard, setTaskBoard] = useState(false);
  const [piggyBank, setPiggyBank] = useState(false);
  const [washingMachine, setWashingMachine] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [dogImage, setDogImage] = useState(true);
  const [avatarSpeechInterval, setAvatarSpeechInterval] = useState(true);

  const [furnitureModal, setFurnitureModal] = useState(true);
  const [overviewModal, setOverviewModal] = useState(false);
  const [functionModal, setFunctionModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [itemID, setItemID] = useState(-1);

  const [copilotStatus, setCopilotStatus] = useState(false);
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

  const [furniture, setFurniture] = useState([
    {
      id: 1,
      name: "Washing Machine",
      image: WashingMachineLogo,
      functionName: "Chore",
      description:
        "Getting ready to do some chores? The washing machine is waiting for you!",
    },
    {
      id: 2,
      name: "Task Board",
      image: TaskBoardLogo,
      functionName: "Task",
      description:
        "Plan to do something but cannot remember? Write it down here! ",
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
      functionName: "Wallet",
      description:
        "Pay your friends, manage your finance better! This piggybank will take care of your wealth!",
    },
    {
      id: 5,
      name: "TV set",
      image: TVSetLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 6,
      name: "Sofa",
      image: SofaLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 7,
      name: "Coffee Table",
      image: CoffeeTableLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 8,
      name: "Beans",
      image: BeansLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 9,
      name: "Kitchen Set",
      image: KitchenSetLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 10,
      name: "Kitchen Counter",
      image: KitchenCounterLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 11,
      name: "Refrigerator",
      image: RefrigeratorLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 12,
      name: "Shoe Rack",
      image: ShoeRackLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 13,
      name: "Shelf",
      image: ShelfLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 14,
      name: "Big Plants 1",
      image: BigPlants1Logo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 15,
      name: "Big Plants 2",
      image: BigPlants2Logo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 16,
      name: "Medium Plants",
      image: MediumPlantsLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 17,
      name: "Small Plants",
      image: SmallPlantsLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 18,
      name: "Pet Bowls",
      image: PetBowlsLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 19,
      name: "Coffee Machine",
      image: CoffeeMachineLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 20,
      name: "Painting 1",
      image: Painting1Logo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 21,
      name: "Painting 2",
      image: Painting2Logo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 22,
      name: "Door Mat",
      image: DoorMatLogo,
      functionName: "None",
      description:
        "Planning a huge party and need your housemate(s)??? approval? Send a polite request here!",
    },
    {
      id: 23,
      name: "Rug",
      image: RugLogo,
      functionName: "None",
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
      Description: "This is a Calendar",
    },
  ];

  //Set Dog speech bubble interval
  function avatarSpeechBubble() {
    setTimeout(() => {
      setAvatarSpeechInterval(!avatarSpeechInterval);
    }, 4000);
  }

  function renderChooseFurniture() {
    if (furnitureModal == true) {
      return (
        <ScrollView style={{ width: "100%" }}>
          <BasicText style={{ color: "#E16363", fontSize: 20 }}>
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
                    style={{ width: "100%", height: "100%" }}
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
  function deleteSelectedFurniture(selectedFurniture) {
    switch (selectedFurniture) {
      case 1:
        setWashingMachine(false);
        break;
      case 2:
        setTaskBoard(false);
        break;
      case 3:
        setCalendar(false);
        break;
      case 4:
        setPiggyBank(false);
        break;
      default:
        console.log("Error while setting visibility of button");
    }
  }
  function deleteFurnitureModal() {
    if (deleteModal == true && itemID > 0) {
      return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <BasicText style={{ color: "#E16363", fontSize: 18 }}>
            Are you sure you want to delete?
          </BasicText>
          <View style={styles.furnitureButton}>
            {/* <Image
              source={furniture[selectedFurniture].image}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            /> */}
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
          <View style={styles.deleteModalButton}>
            <View style={{ marginRight: 30 }}>
              <BorderColorButton
                buttonText="Cancel"
                color="#7B98FF"
                onPress={() => {
                  setDeleteModal(false);
                }}
              />
            </View>
            <GeneralButton
              buttonText="Delete"
              color="#FF1A1A"
              onPress={() => {
                deleteSelectedFurniture(itemID);
                setDeleteModal(false);
              }}
            />
          </View>
        </View>
      );
    }
  }

  function renderOverviewModal() {
    //console.log(itemID);
    //console.log(furniture);
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
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
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
    //console.log(furniture);
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
      case "Wallet":
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
    <View style={styles.backgroundContainer}>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
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
          {/* <ReactNativeZoomableView
            maxZoom={1.3}
            minZoom={1}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders={true}
            initialOffsetX={-280}
            initialOffsetY={-50}
          > */}
          <View style={{ justifyContent: "center" }}>
            <Image
              source={TreePicture}
              style={{ width: 1450, height: 1450 }}
            ></Image>
          </View>
          <View style={{ position: "absolute", top: 426, left: 470 }}>
            <Image
              source={RoomPicture}
              style={{ width: 500, height: 500 }}
            ></Image>
          </View>
          {/* {Door Furniture} */}
          <TouchableOpacity
            style={{
              width: 50,
              height: 130,
              position: "absolute",
              top: 633,
              left: 743,
            }}
            onPress={goToGroupSelect}
          >
            <Image
              source={GroupPicture}
              style={{
                resizeMode: "contain",
                width: 140,
                height: 140,
                alignSelf: "center",
              }}
            ></Image>
          </TouchableOpacity>
          {/* {Calandar Furniture} */}
          {calendar && (
            <TouchableOpacity
              style={{
                width: 50,
                height: 80,
                position: "absolute",
                top: 688,
                left: 815,
              }}
              onPress={() => {
                assignCustomFunctionsToFurniture(furniture[2].functionName);
              }}
              onLongPress={() => {
                setDeleteModal(true);
                deleteFurnitureModal();
                setItemID(3);
              }}
            >
              <Image
                source={CalendarLogo}
                style={{
                  resizeMode: "contain",
                  width: 70,
                  height: 70,
                  alignSelf: "center",
                  shadowColor: "#FFF",
                  shadowOffset: { width: -2, height: 3 },
                  shadowOpacity: 0.6,
                  shadowRadius: 3,
                }}
              ></Image>
            </TouchableOpacity>
          )}
          {/* {TaskBoard Furniture} */}
          {taskBoard && (
            <TouchableOpacity
              style={{
                width: 70,
                height: 70,
                position: "absolute",
                top: 795,
                left: 770,
              }}
              onPress={() => {
                assignCustomFunctionsToFurniture(furniture[1].functionName);
              }}
              onLongPress={() => {
                setDeleteModal(true);
                deleteFurnitureModal();
                setItemID(2);
              }}
            >
              <Image
                source={TaskBoardLogo}
                style={{
                  resizeMode: "contain",
                  width: 55,
                  height: 55,
                  alignSelf: "center",
                  shadowColor: "#FFF",
                  shadowOffset: { width: -2, height: 3 },
                  shadowOpacity: 0.6,
                  shadowRadius: 3,
                }}
              ></Image>
            </TouchableOpacity>
          )}
          {/* {WashingMachine Furniture} */}
          {washingMachine && (
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                position: "absolute",
                top: 734,
                left: 483,
              }}
              onPress={() => {
                assignCustomFunctionsToFurniture(furniture[0].functionName);
              }}
              onLongPress={() => {
                setDeleteModal(true);
                deleteFurnitureModal();
                setItemID(1);
              }}
            >
              <Image
                source={WashingMachineLogo}
                style={{
                  resizeMode: "contain",
                  width: 95,
                  height: 95,
                  alignSelf: "center",
                  shadowColor: "#FFF",
                  shadowOffset: { width: -2, height: 3 },
                  shadowOpacity: 0.6,
                  shadowRadius: 3,
                }}
              ></Image>
            </TouchableOpacity>
          )}
          {/* {PiggyBank Furniture} */}
          {piggyBank && (
            <TouchableOpacity
              style={{
                width: 80,
                height: 80,
                position: "absolute",
                top: 810,
                left: 691,
              }}
              onPress={() => {
                assignCustomFunctionsToFurniture(furniture[3].functionName);
              }}
              onLongPress={() => {
                setDeleteModal(true);
                deleteFurnitureModal();
                setItemID(4);
              }}
            >
              <Image
                source={PiggyBankLogo}
                style={{
                  resizeMode: "contain",
                  width: 28,
                  height: 28,
                  alignSelf: "center",
                  shadowColor: "#FFF",
                  shadowOffset: { width: -2, height: 3 },
                  shadowOpacity: 0.6,
                  shadowRadius: 3,
                }}
              ></Image>
            </TouchableOpacity>
          )}
          {/* {Dog Avatar} */}
          {avatarSpeechBubble()}
          <View
            style={{
              width: 230,
              height: 50,
              position: "absolute",
              top: 780,
              left: 510,
            }}
          >
            {avatarSpeechInterval && (
              <View
                style={[
                  {
                    backgroundColor: "#FFF",
                    padding: 10,
                    // top: 420,
                    // left: 180,
                    maxWidth: "60%",
                    borderRadius: 20,
                  },
                ]}
              >
                <View style={styles.rightArrow}></View>

                <View style={styles.rightArrowOverlap}></View>
                <Text style={{ fontSize: 14, color: "black" }}>
                  Woof! Need Help?
                </Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            style={{
              width: 20,
              height: 80,
              position: "absolute",
              top: 761,
              left: 655,
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
                width: 150,
                height: 150,
                alignSelf: "center",
                shadowColor: "#FFF",
                shadowOffset: { width: -2, height: 3 },
                shadowOpacity: 0.6,
                shadowRadius: 3,
              }}
            ></Image>
          </TouchableOpacity>
          {/* </ReactNativeZoomableView> */}
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
        <Modal
          isVisible={deleteModal}
          avoidKeyboard={true}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropOpacity={0.1}
          onBackdropPress={() => setDeleteModal(!deleteModal)}
        >
          <View style={[styles.deleteModal]}>{deleteFurnitureModal()}</View>
        </Modal>
      </View>
      <HomeScreenHeader navigation={navigation} />
      <View style={styles.header}>
        <BasicText style={styles.screenTitle}>
          {route.params?.groupName}
        </BasicText>

        {copilotStatus && (
          <View>
            <View style={{ position: "absolute", left: 117, top: 545 }}>
              <CopilotStep
                text="Customize my room for me!"
                order={1}
                name="furniture"
              >
                <WalkthroughableView>
                  <View style={{ width: 130, height: 120 }}></View>
                </WalkthroughableView>
              </CopilotStep>
            </View>
            <View style={{ top: -50 }}>
              <CopilotStep
                text="Welcome to my special hideout!"
                order={2}
                name="group"
              >
                <WalkthroughableView>
                  <View style={{ width: 100, height: 50 }}></View>
                </WalkthroughableView>
              </CopilotStep>
            </View>
            <View style={{ position: "absolute", left: -140, top: -70 }}>
              <CopilotStep
                text="Woof! Check out the latest updates!"
                order={3}
                name="annoucement"
              >
                <WalkthroughableText>
                  <View style={{ width: 50, height: 30 }}></View>
                </WalkthroughableText>
              </CopilotStep>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

export default copilot()(HomeScreen);

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
    bottom: 50,
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
    // borderWidth: 1,
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
  deleteModal: {
    width: "100%",
    backgroundColor: "#FFFAF2",
    alignSelf: "center",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
  },
  deleteModalButton: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  screenTitle: {
    color: "#FFF",
    fontSize: 40,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  rightArrow: {
    position: "absolute",
    backgroundColor: "#fff",
    //backgroundColor:"red",
    width: 20,
    height: 15,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: 0,
  },

  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#fff",
    //backgroundColor:"green",
    width: 20,
    height: 15,
    bottom: 3,
    borderBottomLeftRadius: 18,
    right: 0,
  },
});
