import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Button,
  Pressable,
  TextInput,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import BasicText from "../components/BasicText.js";
import Card from "../navigation/genericNotifCard.js";
import ProfilePic from "../assets/Finance-assets/Kimberly.png";
import profileImage from '../assets/Calendar-assets/ProfileImage2.png';
import EventBox from "../navigation/EventBox.js";

export default function CustomDrawerContent({ navigation }) {

  var statusCheckInOrOut = ["Check In", "Check Out"];
  var displayCheckIn = [];

  // Variables to indicate if check in or out
  var checkedIn = false;
  var checkedOut = false;

  // Change when user checks in or out
  const [checkInOrOut, setStatus] = useState("Check In");

  if (checkInOrOut == "Check In") {
    checkedOut = false;
    checkedIn = true;
  } else if (checkInOrOut == "Check Out") {
    checkedOut = true;
    checkedIn = false;
  }

  for (let i = 0; i < 2; i++) {
    displayCheckIn.push(
      <Pressable
        key={i}
        onPress={() => setStatus(statusCheckInOrOut[i])}//#6E2142 is the bg color
        style={[styles.checkInButton, styles.checkInClose, {backgroundColor: ( checkInOrOut == statusCheckInOrOut[i] ? "#FFD897" : "#6E2142")}]}
      >
        <BasicText style={[styles.checkInButtonText, {color: (checkInOrOut == statusCheckInOrOut[i] ? "#6E2142" : "#FFD897")}]}>
          {statusCheckInOrOut[i]}
        </BasicText>
      </Pressable>
    );
  }

  function handleEditProfile() {
    console.log('edit profile');
  }

  function handleLogout() {
    console.log('logout');
  }

  return (
    <DrawerContentScrollView contentContainerStyle = {styles.container}>
      <ScrollView>
        <View style = {styles.topContainer}>
          <BasicText style = {styles.alignCenter}>Notification</BasicText>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 35,
              justifyContent: "space-around",
            }}
          >
            {displayCheckIn}
          </View>
          <View style={{ flexDirection: "row", justifyContent:"center" }}>
              <Image source = {profileImage} style = {styles.profileImage} />
              <Image source = {profileImage} style = {styles.profileImage} />
              <Image source={ProfilePic} style={styles.profileImage} />
          </View>
          <BasicText style = {styles.alignCenter}>Announcements</BasicText>
          <View style={styles.announcementContainer}>
            <Card
              name="Badminton game on 8 Oct"
              description="Hall 12 Court 13 if you guys wanna join"
              date_created="18 Aug"
              fdCheck={false}
            />
          </View>
          <BasicText style = {styles.alignCenter}>Events</BasicText>
          <View style={styles.eventContainer}>
            <EventBox />
          </View>
        </View>

        <View style = {styles.bottomContainer}>

          <TouchableOpacity onPress = {handleEditProfile}>
            <BasicText style = {styles.alignRight}>Edit Profile</BasicText>
          </TouchableOpacity>
          <TouchableOpacity onPress = {handleLogout}>
            <BasicText style = {[styles.alignRight,{marginBottom: 40}]}>Logout</BasicText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 9,
  },
  bottomContainer: {
    flex: 1,
  },
  drawerLabel: {
    fontFamily: "Montserrat",
    color: "#FFD897",
  },
  alignCenter: {
    width: '90%',
    fontFamily: "Montserrat",
    textAlign: 'center',
    color: "#FFD897",
    flexDirection: 'row-reverse',
    marginTop: 10,
    fontSize: 20,
  },
  alignRight: {
    width: '90%',
    fontFamily: "Montserrat",
    textAlign: 'right',
    color: "#FFD897",
    flexDirection: 'row-reverse',
    marginTop: 10,
  },
  profileImage: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
  },
  announcementContainer: {
    marginLeft: 10,
    width: "85%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  eventContainer: {
      marginLeft: 10,
      width: "85%",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
  checkInButton: {
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#FFD897",
    padding: 10,
    elevation: 2,
    marginVertical: 20,
    },

  checkInButtonText: {
    //fontWeight: "bold",
    fontFamily: 'MontserratBold',
    textAlign: "center",
  },

  checkInClose: {
      minWidth: 100,
  },
});
