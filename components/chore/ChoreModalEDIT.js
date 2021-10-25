import React, { useState, useEffect } from "react";
import {
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

import BasicText from "../BasicText.js";
import SelectOrder from "./SelectOrder";

export default function ChoreModalEDIT({ modalVisibleB, setModalVisibleB, placeholder,}) {

  // Values needed for Add Chore Screen Popup (Modal)
  var repeatOptions = ["Weekly", "Monthly"];
  var displayRepeatOptions = [];

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  //onChange receives datechange-->What does it do when receive new change add later when database clear
  const [selectcheck, setSelectCheck] = useState(false);
  const [showSelectDate, setSelectDate] = useState("heya"); //show on the button

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    var weekday = selectedDate.toString().split(' ')[0];
    var dateday = selectedDate.toString().split(' ')[2];
    var datemonth = selectedDate.toString().split(' ')[1];
    var dateyear = selectedDate.toString().split(' ')[3];
    setSelectDate(weekday+", "+dateday+" "+datemonth+" "+dateyear);
    setSelectCheck(true);
    setShow(false);
    setDate(currentDate);
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

  // for choosing the chore icon
  const [state, setState] = useState({
    switchone: false,
    switchtwo: false,
    switchthree: false,
    switchfour: false,
    switchfive: false,
  });
  //setChoreID so it displays user's chosen icon on the screen
  const [choretypeid, setChoreTypeID] = useState(1);

  const handleClick=(flag)=>{
    switch(flag) {
      case 0:
        setState({
          switchone: false,
          switchtwo: false,
          switchthree: false,
          switchfour: false,
          switchfive: false,
          switchsix: false,
        });
        break;

      case 1:
        setState({
          switchone: true,
          switchtwo: false,
          switchthree: false,
          switchfour: false,
          switchfive: false,
          switchsix: false,
        });
        setChoreTypeID(1);
        break;
      
      case 2:
        setState({
          switchone: false,
          switchtwo: true,
          switchthree: false,
          switchfour: false,
          switchfive: false,
          switchsix: false,
        });
        setChoreTypeID(2);
        break;

      case 3:
        setState({
          switchone: false,
          switchtwo: false,
          switchthree: true,
          switchfour: false,
          switchfive: false,
          switchsix: false,
        });
        setChoreTypeID(3);
        break;

      case 4:
        setState({
          switchone: false,
          switchtwo: false,
          switchthree: false,
          switchfour: true,
          switchfive: false,
          switchsix: false,
        });
        setChoreTypeID(4);
        break;

      case 5:
        setState({
          switchone: false,
          switchtwo: false,
          switchthree: false,
          switchfour: false,
          switchfive: true,
          switchsix: false,
        });
        setChoreTypeID(5);
        break;

      case 6:
        setState({
          switchone: false,
          switchtwo: false,
          switchthree: false,
          switchfour: false,
          switchfive: false,
          switchsix: true,
        });
        setChoreTypeID(6);
        break;

      default:
        setState({switchone: false,});
        setChoreTypeID(1);
    }
  }

  //importing icon images
  const [choreiconsource, setChoreIconSource] = useState([]);

  function choresIcons(){

    const choresIconURL = "http:/5dcd-111-65-47-45.ngrok.io/cohab/getChoreTypeIcon";
  
    const init = {
      method: "GET",
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      },
    };

    useEffect(() => {
      async function fetchChoreIcons() {
        try {
          const response = await fetch(choresIconURL, init);
          const json = await response.json();
          console.log(json);
          setChoreIconSource(json.icons);
          if (json.status == "OK") {
            console.log("Successfully connected!");
          } else {
            console.log("NOPE");
            console.log(json.status);
          }
        } catch (error) {
          console.log(error);
        }
      }
      fetchChoreIcons();
      var entry=0;
      for(entry=0;entry<choreiconsource.Length;entry++){
        choretypeid.push(choreiconsource[entry]["choretypeid"]);
        icon.push(choreiconsource[entry]["icon"]);
      };
    }, [])

    return(
      <View
      style={styles.gridcont}
      >
        {choreiconsource.map((choreicon, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => handleClick(this,choreicon.choretypeid)}>
                <View style={[styles.iconSquare,{backgroundColor: "#ECC3FF", borderWidth: (state.switchtwo === false ? 0 : 4)}]}>
                  <Image source={{uri: choreicon.icon}} style={styles.gridimage}/>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    );
  }

  const [choreTitle , setChoreTitle] = useState('');

  function closeChoreModal(){
    setModalVisibleB(!modalVisibleB);
    setChoreTitle('');
    setSelectCheck(false);
  }

  function editChore() {
    const newchore = {
      userId: 12,
      groupid: 8,
      title: choreTitle,
      type: repeatByWeekOrMonth,
      choretypeid: choretypeid,
      date: date,
      seq:[{
        seqNo:1,
        userId:1,
      },{
        seqNo:2,
        userId:3,
      }],
    }
    const init = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newchore),
    };
    const editChoreURL = "http://5dcd-111-65-47-45.ngrok.io/cohab/updateChore";
    useEffect(() => {
      async function newSaveChores() {
        try {
          const response = await fetch(editChoreURL, init);
          const json = await response.json();
          console.log(json);
          if (json.status == "OK") {
            console.log("Successfully connected!");
          } else {
            console.log("NOPE");
            console.log(json.status);
          }
        } catch (error) {
          console.log(error);
        }
      }
    newSaveChores();
    }, [])
    closeChoreModal();
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisibleB}
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
            placeholder={placeholder}
            onChangeText = {(choreTitle) => {setChoreTitle(choreTitle)}} 
            value = {choreTitle}
          />

          <BasicText style={{ paddingTop: 20 }}>Select an icon</BasicText>
          
          {choresIcons()}

          <BasicText style={{ paddingTop: 20 }}>Select the order</BasicText>

         <SelectOrder onOrderChange={(newOrder)=> console.log(newOrder)}/>

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
              onPress={editChore}
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
});