import React, { useState } from "react";
import {
  View , 
  StyleSheet , 
  TouchableOpacity , 
  Image , 
  ScrollView, 
  Modal, 
  Button, 
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//components
import { MenuBar , ChoreCard , BasicText, ChoreModalAlt, } from "../components";
//assets
import NewChoresButton from "../assets/Chores-assets/Caddbutton.png";

export default function ChoreScreen({ navigation }) {
  // Values needed for Add Chore Screen Popup (Modal)
  var daysOfTheWeek = ["M", "T", "W", "T", "F", "S","S"];
  var repeatOptions = ["Weekly", "Monthly"];
  var displayDaysOfTheWeek = [];
  var displayRepeatOptions = [];
  
  //Toggle on and off modal screeen
  const [modalVisible, setModalVisible] = useState(false);

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
        <BasicText style={styles.choreText}> Chores </BasicText>
        <View style={styles.choreContainer}>
          <BasicText style={styles.chorenewText}>New Chore</BasicText>
          <TouchableOpacity 
          style={{ position: "absolute", right: 30}}
          onPress={() => setModalVisible(true)}
          >
            <Image source={NewChoresButton}></Image>
          </TouchableOpacity>
        </View>
        {/* Roommate Bill Container */}
      <View
        style={{
          width: "95%",
          paddingVertical: 5,
          alignItems: "center",
        }}>
        <ChoreCard
          duedate="14/7"
          dutyname="Wash the dishes"
          description="It's your turn!"
          choretype="Weekly"
          status="True"
        ></ChoreCard>
        <ChoreCard
          duedate="5/8"
          dutyname="Clean the clothes"
          description="It's your turn!"
          choretype="Weekly"
          status="True"
        ></ChoreCard>
      </View>
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
              onPress={() => setModalVisible(!modalVisible)}>
                <BasicText style={styles.textStyle}>Save Changes</BasicText>
              </Pressable>

            </View>
          </View>
      </Modal>
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
  chorenewText: {
    //fontFamily: "Montserrat-Regular",
    position: "absolute", 
    right: 60,
    flexWrap: "wrap",
    color: "#826335",
    fontSize: 18,
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
