import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import locationIcon from "../../assets/Calendar-assets/locationIcon.png";
import ProfileImage from "../../assets/Calendar-assets/ProfileImage2.png";

import BasicText from "../BasicText.js";

export default function EventCard(props) {
  return (
    <View
      style={[
        styles.card,
        styles.shadowProp,
        props.importantStatus
          ? { borderColor: "#FF4D4D" , borderWidth: 1 }
          : { borderColor: "#grey" , borderWidth: 1 }
      ]}
    >
      {/* Event Name and Accept Button */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BasicText>{props.eventName}</BasicText>
        <TouchableOpacity style={styles.acceptButton}>
          <BasicText
            style={{ padding: 10, paddingHorizontal: 15, color: "#0F98C3" }}
          >
            Accepted
          </BasicText>
        </TouchableOpacity>
      </View>

      {/* Other Details in the card */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-start" }}>
          <BasicText style={{ color: "#8A8585" }}>{props.date.toDateString()}</BasicText>
          <BasicText>{props.date.toLocaleTimeString()}</BasicText>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <BasicText style={{ alignSelf: "center", color: "#8A8585" }}>
            {props.eventLocation}
          </BasicText>
          <TouchableOpacity>
            <Image
              source={locationIcon}
              style={{ width: 40, height: 40, position: "relative", top: 5 }}
            ></Image>
          </TouchableOpacity>
          <Image source={ProfileImage}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    paddingBottom: 15,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
    borderWidth: 0.1,
    alignSelf: "center",
    justifyContent: "center",
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
  acceptButton: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0F98C3",
    justifyContent: "center",
    alignItems: "center",
  },
});
