import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import ProfilePic from "../../assets/Finance-assets/Kimberly.png";

import { BasicText } from "..";

export default function RoommateCard(props) {
  return (
    <View
      style={[styles.card, styles.shadowProp, { justifyContent: "center" }]}
    >
      <View style={{ flexDirection: "row" }}>
        {/* Here the image need change when the database is ready */}
        <Image
          source={ProfilePic}
          style={{ marginRight: 10, alignSelf: "center" }}
        ></Image>

        {/* Column for Name and Description */}
        <View style={styles.cardDisplayColumnFormat}>
          <BasicText style={styles.cardText}>{props.name}</BasicText>
          <BasicText style={[styles.cardText, { fontSize: 14, color: "#8A8585" }]}>
            {props.description}
          </BasicText>
        </View>

        {/* Column for Amount and Pay Button */}
        <View style={[styles.cardDisplayColumnFormat, { marginLeft: 25 }]}>
          <BasicText style={[styles.cardText, { marginRight: 10 }]}>
            {props.amount}
          </BasicText>
          <TouchableOpacity style={[styles.payButton, styles.shadowProp]}>
            <BasicText style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>
              Pay
            </BasicText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: "90%",
    marginVertical: 10,
    borderWidth: 0.1,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  cardDisplayColumnFormat: {
    flexDirection: "column",
    justifyContent: "center",
  },
  cardText: {
    alignSelf: "center",
    marginRight: 20,
    fontSize: 25,
  },
  payButton: {
    backgroundColor: "#FFA903",
    height: 38,
    width: 78,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
});
