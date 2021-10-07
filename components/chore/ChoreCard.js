import React from "react";
import {
  View,
  StyleSheet,
  Image,
} from "react-native";

import ProfilePic from "../../assets/Finance-assets/Kimberly.png";
import choreSoap from "../../assets/Chores-assets/soap.png";
import GeneralButton from "../GeneralButton";

import BasicText from "../BasicText.js";

export default function ChoreCard(props) {
  return (
    <View
      style={[styles.card, styles.shadowProp, {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
     }]}
    >
      <View style={{flexDirection:"row", justifyContent:"flex-end", marginVertical: -10}}>
        <View style={styles.duedatecont}>
          <BasicText style={styles.choreduty}>Due: {props.duedate}</BasicText>
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
          <View style={{paddingHorizontal: 10, paddingVertical: 10, marginTop: 20}}>
            <GeneralButton
                buttonText= "Edit"
                color="#FF8C8C"
                //onPress={}
            />
          </View>
        </View>

        <View style={[styles.cardDisplayColumnFormat, {
          marginHorizontal: 5, 
          flexDirection:"column", 
          justifyContent: "space-between",
          }]}>
          <BasicText style={styles.chorebasictxt}>{"Every " + props.choretype}</BasicText>
            <View style={styles.whosnextcont}>
              <Image source={ProfilePic} style={styles.profileimgsmall}></Image>
              <Image source={ProfilePic} style={styles.profileimg}></Image>
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
    paddingHorizontal: 10,
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
    //backgroundColor: "#FF8C8C",
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
    color: "#FF8C8C",
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
    //borderWidth: 4,
    borderColor: "#FF8C8C",
    borderRadius: 25
  },
  profileimgsmall: {
    marginHorizontal:0,
    height: 30,
    width: 30,
    marginLeft: -10,
    marginVertical: 0, 
    alignSelf: "center" ,
  },
  whosnextcont: {
    width: "100%",
    paddingVertical: 5,
    flexDirection: "row-reverse",
    flexWrap: "wrap",
  },
});
