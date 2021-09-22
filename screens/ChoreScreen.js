import React, { useState } from "react";
import {View,Text, StyleSheet,TouchableOpacity,Image,ScrollView, Modal, TextInput, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//header
import MenuBar from "../components/MenuBar";
//assets
import RoommateCard from "../components/ChoreCard";
import NewChoreButton from "../assets/icons/icon_designs-03.png";
import { render } from "react-dom";

 
export default function ChoreScreen({ navigation }) {
  
  // When click on 'New Chore', popup (modal) appears
  function AddNewChore() { 
    //TO BE CODED
  }

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

  return (

    <SafeAreaView style={styles.container}>
      <MenuBar navigation = {navigation} />
      {/*stuff*/}
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={styles.choreText}> Chores </Text>
        
        <View style={styles.choreContainer}>
          <Text style={styles.chorenewText}>New Chore</Text>
          <TouchableOpacity style={{ position: "absolute", right: 0, top: -5 }}>
            <Image style={styles.newChoreButton} onPress={()=>{AddNewChore}}source={NewChoreButton}></Image>
          </TouchableOpacity>
        </View>
        
        {/* Roommate Bill Container */}
      <View
        style={{
          width: "95%",
          paddingVertical: 5,
          alignItems: "center",
        }}>
        <RoommateCard
          duedate="14/7"
          dutyname="Wash the dishes"
          description="It's your turn!"
          choretype="Weekly"
          status="True"
        ></RoommateCard>
      </View>


        {/*'New Chore' Popup Screen (Modal) */}
        <Modal transparent = {true} visible= {true} >
          {/*Rest of screen will darken*/}
          <View style={{backgroundColor: "#000000aa", flex: 1}}>
            {/*Pop up screen will show*/}
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


              <Text style={{paddingTop:20}}>Select the order</Text>


              <Text style={{paddingTop:20}}>Repeat</Text>

              <View style={{ paddingTop:20, flexDirection: "row", marginHorizontal: 10, justifyContent: 'space-around'}}>
              {displayRepeatOptions}
              </View>


              <Text style={{paddingTop:20}}>Select the day</Text>

              <View style={{ paddingTop:20, flexDirection: "row", marginHorizontal: 10, justifyContent: 'space-around'}}>
              {displayDaysOfTheWeek}
              </View>

            </View>
          </View>
        </Modal>

        {/*END OF 'New Chore' Popup Screen (Modal) */}

      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD897",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  menuBarStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    position: "absolute",
    top: 40,
  },
  backToRoomButtonStyle: {
    color: "#E16363",
    fontSize: 20,
    alignSelf: "center",
    right: 10,
  },
  scrollView: {
    flex: 1,
    flexDirection: "column",
  },
  choreText: {
    flexWrap: "wrap",
    //fontFamily: "Montserrat-Regular",
    color: "#E16363",
    fontSize: 20,
    marginVertical: 10,
  },
  choreContainer: {
    width: "95%",
    height: 30,
    flexDirection: "row",
  },


  newChoreButton: {
    width: 40,
    height: 40,
  },

  chorenewText: {
    //fontFamily: "Montserrat-SemiBold",
    position: "absolute", 
    right: 60,
    flexWrap: "wrap",
    color: "#826335",
    fontSize: 18,
  },
});
