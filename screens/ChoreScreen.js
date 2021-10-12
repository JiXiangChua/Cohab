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
  TextInput,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//components
import { MenuBar , ChoreCard , BasicText, ChoreModal } from "../components";
//assets
import NewChoresButton from "../assets/icons/icon_designs-03.png";
import placeholderBG from "../assets/sampleappbg.jpg";

export default function ChoreScreen({ navigation }) {
   
  //Toggle on and off modal screeen
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <MenuBar navigation = {navigation} />
      {/*stuff*/}
      {/*<ImageBackground source={placeholderBG} style = {{flex:1}}resizeMode="cover">*/}
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
          style={{ position: "absolute", right: 10, top:-10}}
          onPress={() => setModalVisible(true)}
          >
            <Image style={styles.newChoreButton} source={NewChoresButton}></Image>
          </TouchableOpacity>
        </View>
        {/* Roommate Bill Container */}
      <View
        style={{
          minWidth: "95%",
          width: "100%",
          alignItems: "center",
          minHeight: 600,
        }}>
        <ChoreCard
          duedate="14 Sep"
          dutyname="Vacuum the floor"
          iconselect = "household"
          iconColour = "#ECC3FF"
          choretype= "Weekly"
          cycleStart="Sat"
        ></ChoreCard>
        <ChoreCard
          duedate="20 Oct"
          dutyname="Kitchen Duty"
          iconselect = "grocery"
          iconColour = "#FFDBA5"
          choretype= "Monthly"
          cycleStart="19th"
        ></ChoreCard>
        <ChoreCard
          duedate="31 Oct"
          dutyname="Scrub toilet bowl"
          iconselect = "cleaning"
          iconColour = "#FFCDF4"
          choretype= "Weekly"
          cycleStart="Sun"
        ></ChoreCard>
        
      </View>
      <ChoreModal modalVisible = {modalVisible} setModalVisible = {setModalVisible} />
    </ScrollView>
    {/*</ImageBackground>*/}
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
    //fontFamily: "Montserrat",
    color: "#E16363",
    fontSize: 20,
    marginVertical: 10,
    paddingBottom: 20,
  },
  choreContainer: {
    width: "100%",
    height: 15,
    flexDirection: "row",
  },
  chorenewText: {
    //fontFamily: "Montserrat-Regular",
    position: "absolute", 
    right: 55,
    top: -5,
    flexWrap: "wrap",
    color: "#826335",
    fontSize: 18,
  },

  newChoreButton: {
    width: 35,
    height: 35,
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