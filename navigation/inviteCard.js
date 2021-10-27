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
        <View style={styles.cardDisplayColumnFormat}>
          <Text style={styles.cardText}>{props.name}</Text>
          <Text style={[styles.cardText, { fontSize: 12, color: "#8A8585" }]}>
            {props.description}
          </Text>
          <Text style={[styles.cardText, { fontSize: 12, color: "#8A8585" }]}>
                        {props.date_created}
                      </Text>
                      <Text style={[styles.cardText, { fontSize: 12, color: "#8A8585" }]}>
                         {props.time}
                      </Text>
        </View>

        {/* Column for sender*/}
        <View style={[styles.cardDisplayColumnFormat, { marginTop: 40, marginLeft: 25  }]}>
          <View style={{ flexDirection: "row"}}>
            <Image source={ProfilePic} style={styles.profileImage} />
          </View>
        </View>

        <View style={[styles.cardDisplayColumnFormat]}>
          <Text style={[styles.deadlineText, { marginLeft: -110}]}>
            {props.deadline}
          </Text>
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
    fontSize: 18,
  },
  profileImage: {
    marginLeft: 0,
    minWidth: 15,
    minHeight: 15,
    marginTop: -15,
    alignSelf: "flex-end",
  }
});