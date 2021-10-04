import React, { useState } from "react";
import { View , StyleSheet, Image, TouchableOpacity } from "react-native";

import ProfilePic from "../../assets/Finance-assets/Kimberly.png";
import nextButtonLogo from "../../assets/Finance-assets/NextButton.png";

import BasicText from "../BasicText.js";

export default function GroupPayCard(props) {
  var [paidStatus, setPaidStatus] = useState(true);
  var [paidPercent, setPaidPercent] = useState(70);

  var numberOfAdditionalPayees = 2;

  function getBarColor() {
    var color;
    if (paidPercent == 100) {
      color = "#5ED814";
    } else if (paidPercent == 0) {
      color = "#C4C4C4";
    } else {
      color = "#14CCD8";
    }
    return color;
  }

  return (
    <View
      style={[styles.card, styles.shadowProp, { justifyContent: "center" }]}
    >
      {/* Title + Next Button */}
      <View style={styles.contentFormat}>

        <BasicText style={styles.cardText}>{props.description}</BasicText>
        <TouchableOpacity>
          <Image source={nextButtonLogo} style={styles.nextButtonStyle}></Image>
        </TouchableOpacity>
      </View>

      {/* Progress Bar + Amount Paid */}
      <View
        style={[
          styles.contentFormat,
          {
            marginTop: 10,
            alignItems: "center",
          },
        ]}
      >
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressBar,
              {
                backgroundColor: getBarColor(),
                width: `${paidPercent}%`,
              },
            ]}
          ></View>
        </View>

        <BasicText style={styles.cardAmountText}>{props.amountPaid}</BasicText>
      </View>

      {/* ProfileImage + Status + Total Amount */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {/* Here the image need change when the database is ready */}
        <Image
          source={ProfilePic}
          style={[styles.profilePicture, styles.shadowPropPic]}
        ></Image>
        <Image
          source={ProfilePic}
          style={[styles.profilePicture, styles.shadowPropPic]}
        ></Image>
        <Image
          source={ProfilePic}
          style={[styles.profilePicture, styles.shadowPropPic]}
        ></Image>
        {/* If more than 3 image then put (+ how many more) */}
        <TouchableOpacity style={styles.numberOfPayees}>

          <BasicText style={{ alignSelf: "center", color: "white" }}>
            +{numberOfAdditionalPayees}
          </BasicText>
        </TouchableOpacity>

        <BasicText style={{ paddingLeft: 10 }}> 3/4 Paid</BasicText>
        <BasicText style={{ fontSize: 24, alignSelf: "flex-end" }}>
          / {props.totalAmount}
        </BasicText>
      </View>

      {/* Status Message */}
      <BasicText style={{ color: "#8A8585" }}>
        {paidStatus === true ? "Fully paid on 26 Jul" : null}
      </BasicText>
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
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shadowPropPic: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  contentFormat: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardText: {
    alignSelf: "flex-start",
    marginRight: 10,
    fontSize: 18,
  },
  cardAmountText: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 5,
  },
  nextButtonStyle: {
    width: 22,
    height: 22,
  },
  profilePicture: {
    marginVertical: 10,
    width: 26,
    height: 26,
  },
  progressBar: {
    backgroundColor: "#C4C4C4",
    width: "60%",
    height: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  numberOfPayees: {
    alignSelf: "center",
    backgroundColor: "#6E2142",
    width: 26,
    height: 26,
    borderRadius: 16,
    justifyContent: "center",
  },
});
