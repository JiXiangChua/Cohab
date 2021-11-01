import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

import ProfilePic from "../assets/Finance-assets/Kimberly.png";
import GeneralButton from "../components/GeneralButton.js";
import BasicText from "../components/BasicText";

export default function inviteCard(props) {
  return (
    <View
      style={[styles.card, styles.shadowProp, { justifyContent: "center" }]}
    >
      <View style={{ flexDirection: "row"}}>
        {/* Message */}
        <View style={[styles.cardDisplayColumnFormat,{width: "75%",}]}>
          <BasicText style={styles.cardText}>{props.name}</BasicText>
          <BasicText style={[styles.cardText, { fontSize: 11, color: "#8A8585", marginVertical: 10, }]}>
            {props.description}
          </BasicText>
        </View>

        {/* Column for sender*/}
        <View style={[styles.cardDisplayColumnFormat]}>
          <View style={{ flexDirection: "column"}}>
            <BasicText style={[styles.cardText, { fontSize: 12, color: "#8A8585" }]}>
              {props.date_created}
            </BasicText>
            <BasicText style={[styles.cardText, { fontSize: 12, color: "#8A8585" }]}>
              {props.time}
            </BasicText>
            <Image source={ProfilePic} style={styles.profileImage} />
          </View>
        </View>

        <View style={[styles.cardDisplayColumnFormat]}>
          <BasicText style={[styles.deadlineText, { marginLeft: -110}]}>
            {props.deadline}
          </BasicText>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "105%",
    marginVertical: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginTop: 5,
  },
  cardDisplayColumnFormat: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardText: {
    alignSelf: "flex-start",
    marginRight: 20,
    fontSize: 15,
  },
  profileImage: {
    width: 35,
    height: 35,
    marginTop: 20,
    alignSelf: "flex-start",
  }
});