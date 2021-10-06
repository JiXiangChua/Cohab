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

import ProfilePic from "../../assets/Finance-assets/Kimberly.png";
import GeneralButton from "../GeneralButton";

export default function MissedTaskCard(props) {
  return (
    <View
      style={[styles.card, styles.shadowProp, { justifyContent: "center" }]}
    >
      <View style={{ flexDirection: "row" }}>
        {/* Column for Name, Description & Claim me */}
        <View style={styles.cardDisplayColumnFormat}>
          <Text style={styles.cardText}>{props.name}</Text>
          <Text style={[styles.cardText, { fontSize: 15, color: "#8A8585" }]}>
            {props.description}
          </Text>

          {/* Edit button */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 10 }}>
              <GeneralButton
                buttonText={"Edit"}
                color={"#7D98FF"}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>

            {/* Done button */}
            <View style={{ marginTop: 10, marginLeft: 5 }}>
              <GeneralButton
                buttonText={"Done"}
                color={"#36BC7C"}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
          {/* <TouchableOpacity style={[styles.reviveButton, styles.shadowProp]}>
            <Text style={{ color: "#FFF", fontSize: 16 }}>Revive</Text>
          </TouchableOpacity> */}
        </View>

        {/* Column for set deadline  */}
        <View style={[styles.cardDisplayColumnFormat, { marginLeft: 30 }]}>
          <Text style={[styles.deadlineText, { marginRight: -10 }]}>
            {props.deadline}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.cardText, { fontSize: 14, color: "#8A8585" }]}>
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
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: "105%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#FF0000",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  cardDisplayColumnFormat: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  cardText: {
    alignSelf: "flex-start",
    marginRight: 20,
    fontSize: 18,
  },
  deadlineText: {
    alignSelf: "center",
    marginRight: 10,
    fontSize: 14,
    color: "#FF0000",
    marginBottom: 37,
    fontWeight: "bold",
  },
  reviveButton: {
    backgroundColor: "#FF0000",
    height: 38,
    width: 100,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  profileImage: {
    marginLeft: -10,
    minWidth: 15,
    minHeight: 15,
    marginTop: -15,
    alignSelf: "center",
  },
});
