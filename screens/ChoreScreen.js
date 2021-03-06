import React, { useState, useEffect } from "react";
import {
  RefreshControl,
  View , 
  StyleSheet , 
  TouchableOpacity , 
  Image , 
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//components
import { MenuBar , ChoreCard , BasicText, ChoreModal } from "../components";
//assets
import NewChoresButton from "../assets/icons/icon_designs-03.png";
import * as ConstantHelper from "../ConstantHelper.js";

export default function ChoreScreen({ navigation }) {
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  //Toggle on and off modal screeen
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //function displayChores(){
  const choresURL = ConstantHelper.CONNECTION + "getChores?groupId=1";
  const choresIconURL = ConstantHelper.CONNECTION + "getChoreTypeIcon";
  const groupmemURL = ConstantHelper.CONNECTION + "getGroupMembers?groupId=1";

  const init = {
    method: "GET",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    }
  };
  
    //code to store data from response
    const [chores, setdateChores] = useState([]);
    //importing icon images
    const [choreiconsource, setChoreIconSource] = useState([]);
    //code to store data from response
    const [groupmems, setGroupmems] = useState([]);

    function ChoresList () {
      var entry=0;
      //update chores add here later on
      useEffect(() => {
        async function fetchChore() {
          try {
            const response = await fetch(choresURL, init);
            const json = await response.json();
            setdateChores(json.chores);
          } catch (error) {
            console.log(error);
          }
        }
        fetchChore();
        for(entry=0;entry<chores.Length;entry++){
          currentUser.push(chores[entry]["currentUser"]);
          repeatType.push(chores[entry]["repeatType"]);
          icon.push(chores[entry]["icon"]);
          nextUser.push(chores[entry]["nextUser"]);
          choreid.push(chores[entry]["choreid"]);
          title.push(chores[entry]["title"]);
          cycleday.push(chores[entry]["cycleday"]);
        };
      }, [isLoading])
  
      return(
        chores.map((roomie) => {
          return(
            <View
            key = {roomie.choreid}
            style={{
              minWidth: "95%",
              width: "100%",
              alignItems: "center",
            }}>
              <ChoreCard
                key ={roomie.choreid}
                choreid ={roomie.choreid}
                currentUser={roomie.currentUser}
                choretype= {roomie.repeatType}
                iconselect = {roomie.icon} //"icon" has the source link to the database
                nextUser={roomie.nextUser}
                dutyname={roomie.title}
                //duedate={roomie.dueOn}
                iconColour = "#FFDBA5"
                cycleStart={roomie.cycleday}
                icons={choreiconsource}
                groupmates={groupmems}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              ></ChoreCard>
            </View>
          );
        })
      );
    }

    if(groupmems.length==0){
      (async () => {
        try {
          const response = await fetch(choresIconURL, init);
          const json = await response.json();
          setChoreIconSource(json.icons);
        } catch (error) {
          console.log(error);
        }
        var entry=0;
        for(entry=0;entry<choreiconsource.Length;entry++){
          choretypeid.push(choreiconsource[entry]["choretypeid"]);
          icon.push(choreiconsource[entry]["icon"]);
        };
      })();
      
      (async () => {
          try {
            const response = await fetch(groupmemURL, init);
            const json = await response.json();
            setGroupmems(json.members);
          } catch (error) {
            console.log(error);
          }
          var entry=0;
          for(entry=0;entry<groupmems.Length;entry++){
              userid.push(groupmems[entry]["userid"]);
              profileimg.push(groupmems[entry]["profileimg"]);
            };
      })();
    }
    

  return (
    <SafeAreaView style={styles.container}>
      <MenuBar navigation = {navigation} />
      {/*stuff*/}
      {/*<ImageBackground source={placeholderBG} style = {{flex:1}}resizeMode="cover">*/}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
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
        {ChoresList()}
      <View
        style={{
          minWidth: "95%",
          width: "100%",
          alignItems: "center",
          minHeight: 600,
        }}>
      </View>
      <ChoreModal modalVisible = {modalVisible} setModalVisible = {setModalVisible} choreiconsource = {choreiconsource} groupmems={groupmems} isLoading={isLoading} setIsLoading={setIsLoading}/>
    </ScrollView>
    {/*</ImageBackground>*/}
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scrollView:{
    justifyContent: "center",
        alignItems: "center",
  },
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
  choreText: {
    flexWrap: "wrap",
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