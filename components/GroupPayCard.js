import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ProfilePic from "../assets/Finance-assets/Kimberly.png";

export default function RoommateCard(props) {
  return (
    <View
      style={[styles.card, styles.shadowProp, { justifyContent: "center" }]}
    >
      <Text style={styles.cardText}>Split Request</Text>
      <Text style={styles.cardAmountText}>{props.amount}</Text>

      <View style={{ flexDirection: "row" }}>
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
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shadowPropPic: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardText: {
    alignSelf: "flex-start",
    marginRight: 20,
    fontSize: 20,
  },
  cardAmountText: {
    alignSelf: "center",
    fontSize: 40,
  },
  profilePicture: {
    marginVertical: 20,
    width: 40,
    height: 40,
  },
});
