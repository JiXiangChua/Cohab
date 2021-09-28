import React from 'react';
import { View , TextInput , Modal , Button , Pressable , StyleSheet } from 'react-native';

import BasicText from '../BasicText.js';


export default function TaskModal({ modalVisible , setModalVisible }) {

    // Values needed for Add Task Screen Popup (Modal)
    var daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"];
    var repeatOptions = ["Weekly", "Monthly"];
    var displayDaysOfTheWeek = [];
    var displayRepeatOptions = [];

    // To display options to repeat weekly or monthly
    for (let i=0; i<2;i++){
        displayRepeatOptions.push(
            <Button title = {repeatOptions[i]} key = {repeatOptions[i]} />
        )
    }

    // To display days of the week
    for (let i=0; i<7;i++){
        displayDaysOfTheWeek.push(
            <Button title = {daysOfTheWeek[i]} key = {daysOfTheWeek[i]} />
        )
    }

    return(
        <Modal
        animationType="slide"
        transparent = {true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);}}>
                {/*Rest of screen will darken*/}
                <View style={{backgroundColor: "#000000aa", flex: 1}}>
                {/*Pop up screen will show*/}
                <View style={{backgroundColor: "#ffffff", margin: 30, padding: 30, borderRadius: 10}}>
                {/*Type in Task name*/}
                <TextInput
                style={{ borderBottomWidth: 0.5, width: "50%"}}
                placeholder="Task Title"
                />
                {/*Type in Task description*/}
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
                onPress={() => setModalVisible(!modalVisible)}>
                  <BasicText style={styles.textStyle}>Save Changes</BasicText>
                </Pressable>

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