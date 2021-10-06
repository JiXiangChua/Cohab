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
  Pressable 
} from "react-native"; 
 
import ProfilePic from "../../assets/Finance-assets/Kimberly.png"; 
 
export default function Individual1TaskCard(props) { 
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
            {/* Edit button */}
            <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={[styles.editButton, styles.shadowProp]}>
            <Text style={{ color: "#FFF", fontSize: 16 }}>
            Edit
            </Text>
            </TouchableOpacity>
            {/* Done button */}
            <TouchableOpacity style={[styles.claimButton, styles.shadowProp]}>
            <Text style={{ color: "#FFF", fontSize: 16 }}>
            Done
            </Text>
            </TouchableOpacity>
            </View>
          </View>
  
          {/* Column for set deadline  */}
          <View style={[styles.cardDisplayColumnFormat, { marginLeft: 0 }]}>
            <Text style={[styles.setText, { marginRight: 10 }]}>
              {props.set}
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
      backgroundColor: "white",
      borderRadius: 10,
      paddingVertical: 20,
      paddingHorizontal: 25,
      width: "105%",
      marginVertical: 10,
      borderWidth: 1,
      borderColor: "#0038FF",
    },
    shadowProp: {
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 3,
    },
    cardDisplayColumnFormat: {
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    cardText: {
      alignSelf: "flex-start",
      marginRight: 20,
      fontSize:18, 
    },
    setText: {
      alignSelf: "center",
      marginRight: 10,
      fontSize:14,
      color: "#0038FF",
      marginBottom: 37, 
    },
    deadlineText: {
      alignSelf: "center",
      marginRight: 10,
      fontSize:14,
      color: "#FF0000",
      marginBottom: 55, 
    },
    editButton: {
      backgroundColor: "#0038FF",
      height: 38,
      width: 100,
      borderRadius: 10,
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
    claimButton: {
      backgroundColor: "#36BC7C",
      height: 38,
      width: 100,
      borderRadius: 10,
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
    profileImage: {
      marginLeft: -5,
      minWidth: 15,
      minHeight: 15,
      marginTop: -15,
      alignSelf: "center",
    },
  });