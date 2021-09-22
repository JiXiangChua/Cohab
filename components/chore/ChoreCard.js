import React from "react";
import {
  View,
  StyleSheet,
  Image,
} from "react-native";

import ProfilePic from "../../assets/Finance-assets/Kimberly.png";
import choreSoap from "../../assets/Chores-assets/soap.png";

import { BasicText } from "..";

export default function ChoreCard(props) {
  return (
    <View
      style={[styles.card, styles.shadowProp, {
        display: "flex",
        justifyContent: "center",
     }]}
    >
      <View style={{flexDirection:"row", justifyContent:"flex-end", marginVertical: -10}}>
        <View style={styles.duedatecont}>
          <BasicText style={styles.choreduty}>Due on:{props.duedate}</BasicText>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <Image
          source={choreSoap}
          style={{
          }}
        ></Image>

        {/* Column for Name and Description */}
        <View style={[styles.cardDisplayColumnFormat, {marginHorizontal: 10}]}>
          <View style={styles.choredutycont}>
            <BasicText style={styles.choreduty}>{props.dutyname}</BasicText>
          </View>
          <Image
          source={ProfilePic}
          style={styles.profileimg}
          ></Image>
          <BasicText style={styles.chorebasictxt}>{props.description}</BasicText>
        </View>

        <View style={[styles.cardDisplayColumnFormat, { marginHorizontal: 20 }]}>
          <BasicText style={styles.chorebasictxt}>{props.choretype}</BasicText>
            <View style={styles.whosnextcont}>
              <BasicText>Next:</BasicText>
              <Image source={ProfilePic} style={styles.profileimgsmall}></Image>
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: 5,
    paddingHorizontal: 15,
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 0, //0.1 on JX's ver
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
  },
  cardDisplayColumnFormat: {
    flexDirection: "column",
    alignContent: "center",
    marginHorizontal: 10,
  },
  choredutycont: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF8C8C",
    display: "flex",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  duedatecont: {
    alignContent: "center",
    backgroundColor: "#E65444",
    display: "flex",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
  },
  choreduty: {
    flexWrap: "wrap",
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  chorebasictxt:{
    fontSize: 14, 
    color: "#FF8C8C", 
    textAlign: "center",
    flexWrap: "wrap",
  },
  profileimg: {
    marginVertical: 10, 
    alignSelf: "center" ,
    borderWidth: 4,
    borderColor: "#FF8C8C",
    borderRadius: 25
  },
  profileimgsmall: {
    marginHorizontal:0,
    height: 20,
    width: 20,
    marginVertical: 0, 
    alignSelf: "center" ,
  },
  whosnextcont: {
    width: "100%",
    paddingVertical: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
