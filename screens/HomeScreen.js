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

// import RoomPicture from "../assets/Home-assets/roomdraft.png";
// import BankPicture from "../assets/Home-assets/pigdraft.png";
// import ChorePicture from "../assets/Home-assets/washingmachinedraft.png";
// import GroupPicture from "../assets/Home-assets/doordraft.png";
// import TaskPicture from "../assets/Home-assets/boarddraft.png";
// import CalendarPicture from "../assets/Home-assets/cardboard.png";
// import CloudGif from "../assets/Home-assets/clouds.gif";

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
      <View style={styles.backgroundAnimContainer}>
        <Image source={CloudGif} style={styles.backgroundAnim} />
      </View>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.roomContainer}>
            <Image source={RoomPicture} style={styles.roomStyle} />
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
              <Image source={BankPicture} style={styles.buttonStyle} />
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
              <Image source={TaskPicture} style={styles.buttonStyle} />
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
              <Image source={ChorePicture} style={styles.buttonStyle} />
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
              <Image source={CalendarPicture} style={styles.buttonStyle} />
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
              <Image source={GroupPicture} style={styles.buttonStyle} />
            </TouchableOpacity>
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
});
