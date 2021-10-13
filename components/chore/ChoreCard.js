import React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
} from "react-native";

import ProfilePic from "../../assets/Finance-assets/Kimberly.png";
import cleaning from "../../assets/Chores-assets/cleaning.png";
import household from "../../assets/Chores-assets/household.png";
import grocery from "../../assets/Chores-assets/grocery.png";
import GeneralButton from "../GeneralButton";

import BasicText from "../BasicText.js";

export default function ChoreCard(props) {

  //let iconObj = {"cleaning": cleaning, "household": household, "grocery": grocery}
  let iconObj = props.iconselect

  // variable to hold icon colour
  var iconColour = props.iconColour;
  // variable to hold colour of 'Every XXX' text
  var cycleColour = "#E16363";
  // variable to display deadline tab (if need)
  var deadlineTab  = [];

 // Check whether it's a weekly or monthly chore
  if (props.choretype == "Weekly") {
    // Set text colour to pink
    cycleColour = "#E16363"; 
    // Display deadline
    deadlineTab[0] = (
    <View style={{flexDirection:"row", justifyContent:"flex-start", marginVertical:-10}}>
    <View style={styles.duedatecont}>
      <BasicText style={styles.duedatetext}>Due: {props.duedate}</BasicText>
    </View>
    </View>);
  } else if (props.choretype == "Monthly"){
    // Set text colour to blue
    cycleColour = "#04ACE1"; 
    // Do not display deadline
    deadlineTab[0] = null;
  } 

  return (
    <View
      style={[styles.card, styles.shadowProp, {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
     }]}
    >
      {deadlineTab[0]}
      
      <View style={{ flexDirection: "row", paddingTop: 0}}>
        
        <View style={{backgroundColor: iconColour, alignContent:"center",justifyContent:"center", alignSelf: "center", marginLeft: 5, width: 90, height: 90, padding:10, borderRadius: 20}}>
        <Image
          //source={iconObj[props.iconselect]}
          source={iconObj}
          style={styles.image}
        ></Image>
        </View>
        

        {/* Column for Name and Description */}
        <View style={[styles.cardDisplayColumnFormat, {marginHorizontal: 10}]}>
          <View style={styles.choredutycont}>
            <BasicText style={styles.choreduty}>{props.dutyname}</BasicText>
          </View>
          <View style={{paddingHorizontal: 10, paddingVertical: 10, marginTop: 20}}>
            <GeneralButton
                buttonText= "Edit"
                color="#7B98FF"
                //onPress={}
            />
          </View>
        </View>

        <View style={[styles.cardDisplayColumnFormat, {
          marginHorizontal: 5, 
          flexDirection:"column", 
          justifyContent: "space-between",
          }]}>
          <BasicText style={[styles.chorebasictxt, {color: cycleColour}]}>{"Every " + props.cycleStart}</BasicText>
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
    padding: 10,
    width: "100%",
    minHeight: 130,
    marginTop: 20,
    marginBottom: 0,
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


  image: {
    resizeMode: "contain",
    height: 60,
    width: 60,
  },
  choredutycont: {
    justifyContent: "center",
    display: "flex",
    width: 170,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },

  duedatecont: {
    alignContent: "center",
    backgroundColor: "#E65444",
    display: "flex",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 7,
    top: 8,
    zIndex: 999,
  },
  duedatetext: {
    flexWrap: "wrap",
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Roboto",
    //fontWeight: "bold",
  },
  choreduty: {
    flexWrap: "wrap",
    fontSize: 18,
    color: "#6F6F6F",
    fontWeight: "bold",
  },
  chorebasictxt:{
    fontSize: 15,  
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
