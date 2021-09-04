import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationButton from "../assets/NotificationButton.png";
import backToRoomButton from "../assets/back-to-room-button.png";

export default function ChoreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Menu bar */}
      <View style={styles.menuBarStyle}>
        <TouchableOpacity
          style={{ alignSelf: "flex-start", flexDirection: "row", right: 15 }}
          onPress={navigation.goBack}
        >
          <Image source={backToRoomButton}></Image>
          <Text style={styles.backToRoomButtonStyle}>home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Image source={NotificationButton}></Image>
        </TouchableOpacity>
      </View>
      {/* End of Menu Bar */}
      <ScrollView>
        {/* Write Your code here */}
        <Text>Hello to Chore Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD897",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  menuBarStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    position: "absolute",
    top: 40,
  },
  backToRoomButtonStyle: {
    color: "#E16363",
    fontSize: 20,
    alignSelf: "center",
    right: 10,
  },
});
