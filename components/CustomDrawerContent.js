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
          onPress={() => setStatus(statusCheckInOrOut[i])}
          style={[styles.checkInButton, styles.checkInClose, {backgroundColor: ( checkInOrOut == statusCheckInOrOut[i] ? "grey" : "#2196F3")}]}
        >
          <BasicText style={[styles.checkInButtonText, {color: (checkInOrOut == statusCheckInOrOut[i] ? "#A9A9A9" : "white")}]}>
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
      <View style = {styles.topContainer}>
        <Text style = {styles.alignCenter}>Notification</Text>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 35,
            justifyContent: "space-around",
          }}
        >
          {displayCheckIn}
        </View>
        <View style={{ flexDirection: "row" }}>
            <Image source = {profileImage} style = {styles.profileImage} />
            <Image source = {profileImage} style = {styles.profileImage} />
            <Image source={ProfilePic} style={styles.profileImage} />
        </View>
            <Text style = {styles.alignCenter}>Announcements</Text>
            <View style={styles.announcementContainer}>
                <Card
                    name="What's for lunch?"
                    date_created="18 Aug"
                    fdCheck={false}
                />
            </View>
        <Text style = {styles.alignCenter}>Events</Text>
        <View style={styles.eventContainer}>
            <EventBox />
        </View>

      </View>

      <View style = {styles.bottomContainer}>
        <View style = {styles.alignRight}><Image source = {profileImage} style = {styles.profileImage} /></View>
        <TouchableOpacity onPress = {handleEditProfile}><Text style = {styles.alignRight}>Edit Profile</Text></TouchableOpacity>
        <TouchableOpacity onPress = {handleLogout}><Text style = {styles.alignRight}>Logout</Text></TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 4,
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
    marginTop: 5,
    marginLeft: 5,
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
    borderColor: "#A9A9A9",
    backgroundColor: "white",
    padding: 5,
    elevation: 2,
    marginTop: 10,
    marginBottom: 10,
    },

  checkInButtonText: {
    color: "#2196F3",
    fontFamily: 'MontserratBold',
    textAlign: "center",
  },

  checkInClose: {
      minWidth: 100,
  },
});
