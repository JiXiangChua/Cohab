import React, { useState } from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//header
import NotificationButton from "../assets/NotificationButton.png";
import backToRoomButton from "../assets/back-to-room-button.png";
import { NavigationContainer } from "@react-navigation/native";
//assets
import NewChoresButton from "../assets/Chores-assets/addchorebutton.png";

export default function ChoreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {/*header*/}
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

      {/*stuff*/}
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={styles.choreText}> Chores </Text>
        <View style={styles.choreContainer}>
          <TouchableOpacity>
          <Text style={styles.chorenewText}>New Chore</Text>
          <Image source={NewChoresButton} style={styles.addchoreButton}></Image>
          </TouchableOpacity>
        </View>
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
  },
  backToRoomButtonStyle: {
    color: "#E16363",
    fontSize: 20,
    alignSelf: "center",
    right: 10,
  },
  scrollView: {
    flex: 1,
    flexDirection: "column",
  },
  choreText: {
    fontFamily: "Montserrat-Regular",
    color: "#E16363",
    fontSize: 20,
    marginVertical: 10,
  },
  chorenewText: {
    fontFamily: "Montserrat-Regular",
    color: "#826335",
    fontSize: 18,
  },
  addchoreButton: {
    height: "10px",
    width: "10px",
    alignSelf: "center",
  },
  choreContainer: {
    width: "95%",
    height: 80,
    flexDirection: "row",
  },
});