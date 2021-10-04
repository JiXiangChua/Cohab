import React from 'react';
import { useState } from "react";
import { View , TextInput , Modal , Button , Pressable , StyleSheet, Image, Text, TouchableOpacity, AppRegistry} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import BasicText from '../BasicText.js';


export default function ChoreModal({ modalVisible , setModalVisible }) {

    // Values needed for Add Chore Screen Popup (Modal)
    var daysOfTheWeek = ["M", "T", "W", "T", "F", "S","S"];
    var repeatOptions = ["Weekly", "Monthly"];
    var displayDaysOfTheWeek = [];
    var displayRepeatOptions = [];

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    //onChange receives datechange-->What does it do when receive new change add later when database clear
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(false);
      setDate(currentDate);
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    
    };

    const [order, setOrder] = useState(true);
    const [order2, setOrder2] = useState(true);

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
      
      repeatChoice[0] = 
      <View>
        <BasicText style={{paddingTop:20}}>Select the start date of the cycle</BasicText>
        <Pressable style={[styles.optionButton, styles.buttonClose]}
        onPress={showDatepicker}>
          <BasicText style={styles.optionButtonText}>Pick a date</BasicText>
        </Pressable> 
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </View>;
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
                style={{paddingTop: 10, borderBottomWidth: 0.3}}
                placeholder="Description"
                />
                          
                <BasicText style={{paddingTop:20}}>Select the order</BasicText>
                
                <View style={{flexDirection:"row", paddingTop:20}}> 
                  
                <TouchableOpacity onPress={()=> setOrder(false)}>  
                  <Image style={styles.image} source={ProfilePic}/>
                </TouchableOpacity>
               
                <TouchableOpacity onPress={()=> setOrder2(false)}>  
                  <Image style={styles.image} source={ProfilePic2}/>
                </TouchableOpacity>
               
                 </View> 

                
                <View style={{flexDirection:"row"}}>  
                <Text>Order: {order ? "0": "1"}</Text>
                <Text>                           {order2 ? "0" : "2"}</Text>
                </View>
              
  
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
    image: {
      resizeMode: "contain",
      height: 50,
      width: 100,
      borderRadius: 10 ,
  
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