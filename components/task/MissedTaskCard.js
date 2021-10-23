import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";

import ProfilePic from "../../assets/Calendar-assets/ProfileImage2.png";
import GeneralButton from "../GeneralButton";

export default function MissedTaskCard(props) {
  return (
    <View
      style={[styles.card, styles.shadowProp, { justifyContent: "center" }]}
    >
      <View style={{ flexDirection: "row" }}>
        {/* Column for Name, Description & buttons */}
        <View style={styles.cardDisplayColumnFormat}>
          <Text style={styles.cardText}>{props.name}</Text>
          <Text style={[styles.cardText, { fontSize: 14, color: "#8A8585" }]}>
            {props.description}
          </Text>
        </View>

        {/* Column for set deadline  */}
        <View style={[styles.cardDisplayColumnFormat, { marginLeft: 40 }]}>
          <Text style={[styles.deadlineText, { marginRight: 10 }]}>
            {props.deadline}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.cardText, { fontSize: 15, color: "#8A8585" }]}>
              {props.date_created}
            </Text>
            <Image source={ProfilePic} style={styles.profileImage} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFDCD1",
    borderColor: "#FF0000",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: "105%",
    marginVertical: 10,
    borderWidth: 1,
    alignSelf: "center",
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 4,
  },
  cardDisplayColumnFormat: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  cardText: {
    alignSelf: "flex-start",
    marginRight: 20,
    fontSize: 18,
  },
  deadlineText: {
    alignSelf: "center",
    marginRight: 50,
    fontSize: 14,
    color: "#FF0000",
    marginBottom: 45,
  },
  profileImage: {
    marginLeft: -15,
    minWidth: 50,
    minHeight: 50,
    marginTop: -15,
    alignSelf: "center",
  },
});
