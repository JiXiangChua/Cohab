import React from "react";
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
import { BasicText, HomeScreenHeader } from "../components";

import TreePicture from "../assets/Home-assets/background.png";
import RoomPicture from "../assets/Home-assets/roomPicture.png";
import BankPicture from "../assets/Home-assets/piggybank.png";
import ChorePicture from "../assets/Home-assets/washingmachine.png";
import GroupPicture from "../assets/Home-assets/door.png";
import TaskPicture from "../assets/Home-assets/taskboard.png";
import CalendarPicture from "../assets/Home-assets/calendar.png";
import dog1Gif from "../assets/Home-assets/dog1.gif";

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
      
      <ScrollView style={styles.scrollView} horizontal={true}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.roomContainer}>
            <Image source={TreePicture} style={styles.backgroundStyle} />
            <Image source={RoomPicture} style={styles.roomStyle} />
            <TouchableOpacity
              onPress={goToFinance}
              style={[
                styles.buttonStyle,
                {
                  top: "60%",
                  left: "45.5%",
                  width: "11.8%",
                  height: "9%",
                },
              ]}
            >
              <View style={[styles.buttonContainer, {
                  top: Dimensions.get("window").height * -0.60 -50.4,
                  left: Dimensions.get("window").height * -0.455 -0.7,
                },
              ]}>
                <Image source={BankPicture} style={styles.buttonImageStyle} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goToTask}
              style={[
                styles.buttonStyle,
                {
                  top: "58%",
                  left: "57.5%",
                  width: "6.5%",
                  height: "9%",
                },
              ]}
            >
              <View style={[styles.buttonContainer, {
                  top: Dimensions.get("window").height * -0.58 -50.8,
                  left: Dimensions.get("window").height * -0.575 -1.3,
                },
              ]}>
                <Image source={TaskPicture} style={styles.buttonImageStyle} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goToChore}
              style={[
                styles.buttonStyle,
                {
                  top: "50%",
                  left: "17%",
                  width: "14%",
                  height: "14%",
                },
              ]}
            >
              <View style={[styles.buttonContainer, {
                  top: Dimensions.get("window").height * -0.50 -50.8,
                  left: Dimensions.get("window").height * -0.17 -1.3,
                },
              ]}>
                <Image source={ChorePicture} style={styles.buttonImageStyle} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goToCalendar}
              style={[
                styles.buttonStyle,
                {
                  top: "44%",
                  left: "62%",
                  width: "9%",
                  height: "11%",
                },
              ]}
            >
              <View style={[styles.buttonContainer, {
                  top: Dimensions.get("window").height * -0.44 -50.8,
                  left: Dimensions.get("window").height * -0.62 -1.3,
                },
              ]}>
                <Image source={CalendarPicture} style={styles.buttonImageStyle} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goToGroupSelect}
              style={[
                styles.buttonStyle,
                {
                  top: "37.2%",
                  left: "51.2%",
                  width: "10%",
                  height: "19%",
                },
              ]}
            >
              <View style={[styles.buttonContainer, {
                  top: Dimensions.get("window").height * -0.372 -50.8,
                  left: Dimensions.get("window").height * -0.512 -1.3,
                },
              ]}>
                <Image source={GroupPicture} style={styles.buttonImageStyle} />
              </View>
            </TouchableOpacity>
            <Image source={dog1Gif} style={styles.mascotStyle} />
          </View>
        </ScrollView>
      </ScrollView>
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
    zIndex: 0,
  },
  roomContainer: {
    height: Dimensions.get("window").height * 1,
    width: Dimensions.get("window").height * 1,
    justifyContent: "center",
    alignItems: "center",
  },
  roomStyle: {
    resizeMode: "contain",
    height: "120%",
    width: "120%",
    zIndex: 2,
    marginBottom: 100,
  },
  backgroundStyle: {
    position: "absolute",
    top: "-15%",
    resizeMode: "cover",
    height: "120%",
    width: "120%",
    zIndex: 1,
  },
  buttonStyle: {
    position: "absolute",
    zIndex: 3,
  },
  buttonContainer: {
    position: "absolute",
    height: Dimensions.get("window").height * 1,
    width: Dimensions.get("window").height * 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImageStyle: {
    resizeMode: "contain",
    height: "120%",
    width: "120%",
  },
  mascotStyle: {
    position: "absolute",
    height: "11%",
    width: "11%",
    top: "59%",
    left: "37%",
    zIndex: 3,
  },
  text: {
    fontSize: 42,
    zIndex: 1,
  },
});
