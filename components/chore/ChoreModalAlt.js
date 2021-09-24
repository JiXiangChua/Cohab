import React, { useState } from "react";
import {
    View , 
    StyleSheet ,  
    Button, 
    Pressable,
    TextInput,
  } from "react-native";
import { BasicText } from "..";

export default function ChoreModalAlt(props){
    // Values needed for Add Chore Screen Popup (Modal)
  var daysOfTheWeek = ["M", "T", "W", "T", "F", "S","S"];
  var repeatOptions = ["Weekly", "Monthly"];
  var displayDaysOfTheWeek = [];
  var displayRepeatOptions = [];

  // To display options to repeat weekly or monthly
  for (let i=0; i<2;i++){
    displayRepeatOptions.push(
      <Button title= {repeatOptions[i]}/>
    )
  }
  // To display days of the week
  for (let i=0; i<7;i++){
    displayDaysOfTheWeek.push(
      <Button title= {daysOfTheWeek[i]}/>
    )
  }

  var [props.modalalt, setModalAlt] = useState(true);

    return(
        <View style={{backgroundColor: "#000000aa", flex: 1}}>
        <View style={{backgroundColor: "#ffffff", margin: 30, padding: 30, borderRadius: 10}}> 
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

            <View style={{ paddingTop:20, flexDirection: "row", marginHorizontal: 10, justifyContent: 'space-around'}}>
            {displayRepeatOptions}
            </View>

            <BasicText style={{paddingTop:20}}>Select the day</BasicText>

            <View style={{ paddingTop:20, flexDirection: "row", marginHorizontal: 10, justifyContent: 'space-around'}}>
            {displayDaysOfTheWeek}
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalAlt(false)}>
              <BasicText style={styles.textStyle}>Save Changes</BasicText>
            </Pressable>

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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop:20,
      },
    buttonClose: {
        backgroundColor: "#2196F3",
      },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
  });