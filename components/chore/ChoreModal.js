import React from "react";
import { useState,useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Modal,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  AppRegistry,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ConstantHelper from "../../ConstantHelper.js";
import BasicText from "../BasicText.js";
let userSelectedArr = [];
export default function ChoreModal({ modalVisible, setModalVisible, choreiconsource,groupmems,isLoading,setIsLoading}) {
  // Values needed for Add Chore Screen Popup (Modal)
  var repeatOptions = ["Weekly", "Monthly"];
  var displayRepeatOptions = [];

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  //onChange receives datechange-->What does it do when receive new change add later when database clear
  const [selectcheck, setSelectCheck] = useState(false);
  const [showSelectDate, setSelectDate] = useState("heya"); //show on the button
  const [dateSELECT, setDateSELECT] = useState("");//for database date

  const onChange = (event, selectedDate) => {
    if(selectedDate!=undefined){
      const currentDate = selectedDate || date;
      var weekday = selectedDate.toString().split(' ')[0];
      var dateday = selectedDate.toString().split(' ')[2];
      var datemonth = selectedDate.toString().split(' ')[1];
      var dateyear = selectedDate.toString().split(' ')[3];
      var dateSENT = selectedDate.toISOString().split('T')[0];
      setSelectDate(weekday+", "+dateday+" "+datemonth+" "+dateyear);
      setSelectCheck(true);
      setShow(false);
      setDateSELECT(dateSENT);
      setDate(currentDate);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  // Variables to indicate if monthly or weekly button selected
  var monthlySelected = false;
  var weeklySelected = false;

  // Change variables as user selects between weekly or monthly
  const [repeatByWeekOrMonth, setWeeklyOrMonthly] = useState("Weekly");

  if (repeatByWeekOrMonth == "Weekly") {
    monthlySelected = false;
    weeklySelected = true;
  } else if (repeatByWeekOrMonth == "Monthly") {
    monthlySelected = true;
    weeklySelected = false;
  }

  // Display "Weekly" and "Monthly" buttons
  for (let i = 0; i < 2; i++) {
    displayRepeatOptions.push(
      <Pressable
        key={i}
        onPress={() => setWeeklyOrMonthly(repeatOptions[i])}
        style={[styles.optionButton, styles.buttonClose, {backgroundColor: ( repeatByWeekOrMonth == repeatOptions[i] ? "#2196F3" : "white")}]}
      >
        <BasicText style={[styles.optionButtonText, {color: (repeatByWeekOrMonth == repeatOptions[i] ? "white" : "#2196F3")}]}>
          {repeatOptions[i]}
        </BasicText>
      </Pressable>
    );
  }
  
  //setChoreID so it displays user's chosen icon on the screen
  const [choretypeid, setChoreTypeID] = useState(1);

  const [choreTitle , setChoreTitle] = useState('');

  const [iconSelected, setIconSelected] = useState([false,false,false,false,false,false]);
  const [userSelected, setUserSelected] = useState([]);
  
  const handleClick=(choretypeid)=>{
    var array = [false,false,false,false,false,false];
    array[choretypeid-1] = true;
    setIconSelected(array);
    setChoreTypeID(choretypeid);
  }

  const userImgClick=(userid)=>{
    userSelectedArr.push(userid);
    setUserSelected([...userSelectedArr]);
  }

  function closeChoreModal(){
    setModalVisible(!modalVisible);
    setChoreTitle('');
    setSelectCheck(false);
    setUserSelected([]);
    userSelectedArr = [];
    //refresh choreScreen
    setIsLoading(!isLoading);
  }

  function saveChore() {
    var userSeqs=[{
      seqNo:1,
      userId:userSelected[0],
    },{
      seqNo:2,
      userId:userSelected[1],
    },{
      seqNo:3,
      userId:userSelected[2],
    }];
    
    const newchore = {
      userId:15,
		  groupid:1,
		  title:choreTitle,
      seqs:userSeqs,
      type: repeatByWeekOrMonth,
      choretypeid: choretypeid,
      date: dateSELECT,
    }
    const init = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newchore),
    };
    const addChoreURL = ConstantHelper.CONNECTION + "addChore";
    (async () => {
      try {
        const response = await fetch(addChoreURL, init);
        const json = await response.json();
        if (json.status == "OK") {
          console.log("Successfully connected!");
        }
      } catch (error) {
        console.log(error);
      }
    })();
    closeChoreModal();
  }
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeChoreModal}
    >
      {/*Rest of screen will darken*/}
      <View
        style={{ backgroundColor: "#000000aa", flex: 1}}
      >
        <ScrollView>
        {/*Pop up screen will show*/}
        <View
          style={{
            backgroundColor: "#ffffff",
            margin: 30,
            padding: 30,
            borderRadius: 10,
          }}
        >
          {/*Type in Chore name*/}
          <TextInput
            style={{ borderBottomWidth: 0.5, width: "50%" }}
            placeholder="Chore Title"
            onChangeText = {(choreTitle) => {setChoreTitle(choreTitle)}} 
            value = {choreTitle}
          />

          <BasicText style={{ paddingTop: 20 }}>Select an icon</BasicText>
          
          <View style={styles.gridcont}>
            {choreiconsource.map((choreicon, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => handleClick(choreicon.choretypeid)}>
                  <View style={[styles.iconSquare,{backgroundColor: "#ECC3FF", borderWidth: (iconSelected[index] === false ? 0 : 4)}]}>
                    <Image source={{uri: choreicon.icon}} style={styles.gridimage}/>
                  </View>
                </TouchableOpacity>
                );
              })}
          </View>

          <BasicText style={{ paddingTop: 20 }}>Select the order</BasicText>

          <View style={styles.container}>
          {
              groupmems.map((user, index) => {
                return userSelected.includes(user.userid) ?
                    (
                      <TouchableOpacity key={index} style={styles.item} >
                            <Image style={{height: 50,width: 50, opacity: 0.35, borderWidth: 4, borderColor: "#36BC7C", borderRadius: 100}} source={{uri: user.profileimg}}/>
                            <View style={styles.textoverlay}>
                                <Text style={styles.text}>{userSelected.indexOf(user.userid)+1}</Text>
                            </View>
                        </TouchableOpacity>
                    ) :
                    (
                      <TouchableOpacity key={index} style={styles.item} onPress={() => userImgClick(user.userid)}>
                            <Image style={{height: 50,width: 50, borderWidth: 4, borderColor: "#36BC7C", borderRadius: 100}} source={{uri: user.profileimg}}/>
                      </TouchableOpacity>
                    );
                })
            }
          </View>

          <BasicText style={{ paddingTop: 20 }}>Repeat</BasicText>

          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 35,
              justifyContent: "space-around",
            }}
          >
            {displayRepeatOptions}
          </View>

         {/*repeatChoice[0]*/}
            <View>
            <BasicText style={{ paddingTop: 20 }}>
              Select start of cycle
            </BasicText>
            <Pressable
              style={[styles.optionButton, styles.buttonClose]}
              onPress={showDatepicker}
            >
              <BasicText style={styles.optionButtonText}>{selectcheck == true ? showSelectDate : "Pick a date"}</BasicText>
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
          </View>

          <View
            style={{
              paddingTop: 20,
              flexDirection: "row",
              marginHorizontal: 35,
              justifyContent: "space-around",
            }}
          >
            <Pressable
              style={[styles.optionButton, styles.buttonClose]}
              onPress={closeChoreModal}
            >
              <BasicText style={styles.optionButtonText}>Cancel</BasicText>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={saveChore}
            >
              <BasicText style={styles.textStyle}>Confirm</BasicText>
            </Pressable>
          </View>
        </View>
        </ScrollView>
      </View>
    </Modal>
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
  gridcont: {
    paddingTop:20,
    flexDirection: "row",
    flexWrap: "wrap",
    width: 290,
    alignContent: "center",
    justifyContent: "center",
  },
  iconSquare: {
    alignContent: "center",
    justifyContent: "center",
    margin:5, 
    width: 70, 
    height: 70, 
    padding:10, 
    borderRadius: 20,
    borderColor: "#2196F3",
  },
  gridimage: {
    alignSelf: "center",
    resizeMode: "contain",
    height: 50,
    width: 50,
  },
  image: {
    resizeMode: "contain",
    height: 50,
    width: 100,
    borderRadius: 10,
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
    marginTop: 20,
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
    marginTop: 20,
  },

  optionButtonText: {
    color: "#2196F3",
    fontWeight: "bold",
    textAlign: "center",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
},
item: {
    marginTop: 10,
    marginHorizontal: 7,
},
image: {
    resizeMode: "contain",
    borderRadius: 10,
    opacity: 0.35
},
textoverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
},
text: {
    fontSize: 18,
    fontWeight: "bold",
}
});
