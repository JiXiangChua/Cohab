import React from 'react';
import { useState } from "react";
import { View , TextInput , Modal , Button , Pressable , StyleSheet } from 'react-native';

import BasicText from '../BasicText.js';


export default function ChoreModal({ modalVisible , setModalVisible }) {

    // Values needed for Add Chore Screen Popup (Modal)
    var daysOfTheWeek = ["M", "T", "W", "T", "F", "S","S"];
    var repeatOptions = ["Weekly", "Monthly"];
    var displayDaysOfTheWeek = [];
    var displayRepeatOptions = [];

    // To display options to repeat weekly or monthly
    for (let i=0; i<2;i++){
        displayRepeatOptions.push(
          <Pressable
          style={[styles.optionButton, styles.buttonClose]}
          onPress={() => setWeeklyOrMonthly(repeatOptions[i])}>
            <BasicText style={styles.optionButtonText}>{repeatOptions[i]}</BasicText>
          </Pressable>
        )
    }

    // To display days of the week
    for (let i=0; i<7;i++){
        displayDaysOfTheWeek.push(
          <Pressable
          style={[styles.optionButton]}>
            <BasicText style={styles.optionButtonText}>{daysOfTheWeek[i]}</BasicText>
          </Pressable>
        )
    }

    var repeatChoice = [];

    //Toggle between weekly or monthly options based on user choice

    const [repeatByWeekOrMonth, setWeeklyOrMonthly] = useState("Weekly");
    
    if (repeatByWeekOrMonth == "Weekly"){

      repeatChoice[0] =
        <View>
          <BasicText style={{paddingTop:20}}>Select the day</BasicText> 
          <View style={{flexDirection: "row", marginHorizontal: 10, justifyContent: 'space-around'}}>
          {displayDaysOfTheWeek}
          </View>
        </View>;
      
    } else if ( repeatByWeekOrMonth == "Monthly") {
      
      repeatChoice[0] = <BasicText style={{paddingTop:20}}>This displays when monthly is selected</BasicText>;
    }
    

    return(
        <Modal
        animationType="slide" 
        transparent = {true} 
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);}}>
                {/*Rest of screen will darken*/}
                <View style={{backgroundColor: "#000000aa", flex: 1, paddingVertical: 100}}>
                {/*Pop up screen will show*/}
                <View style={{backgroundColor: "#ffffff",  margin: 30, padding: 30, borderRadius: 10}}> 
                {/*Type in Chore name*/}
                <TextInput 
                style={{ borderBottomWidth: 0.5, width: "50%"}}
                placeholder="Chore Title"
                />
                {/*Type in Chore description*/}
                <TextInput 
                style={{paddingTop: 10, borderBottomWidth: 0.5}}
                placeholder="Description"
                />
                          

                <BasicText style={{paddingTop:20}}>Select the order</BasicText>
  
                  <BasicText style={{paddingTop:20}}>Repeat</BasicText>
  
                <View style={{flexDirection: "row", marginHorizontal:35, justifyContent: 'space-around'}}>
                    {displayRepeatOptions}
                </View>

                {repeatChoice[0]}

                <View style={{paddingTop:20,flexDirection:"row", marginHorizontal: 35, justifyContent: 'space-around'}}>
                <Pressable
                style={[styles.optionButton, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                  <BasicText style={styles.optionButtonText}>Cancel</BasicText>
                </Pressable> 
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                  <BasicText style={styles.textStyle}>Confirm</BasicText>
                </Pressable>
                </View>
              </View>
            </View>
        </Modal>
    )
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop:20,
        backgroundColor: "#36BC7C",
      },
    buttonClose: {
        minWidth: 100,
      },

    optionButton: {
        borderRadius: 20,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#2196F3",
        backgroundColor: "white",
        padding: 10,
        elevation: 2,
        marginTop:20,
      },

    optionButtonText: {
        color: "#2196F3",
        fontWeight: "bold",
        textAlign: "center"
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
  });