import React from "react";
import { useState } from "react";
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
import ProfilePic from "../../assets/Finance-assets/Kimberly.png";
import cleaning from "../../assets/Chores-assets/cleaning.png";
import household from "../../assets/Chores-assets/household.png";
import heart from "../../assets/Chores-assets/heart.png";
import shopping from "../../assets/Chores-assets/online-shopping.png";
import grocery from "../../assets/Chores-assets/grocery.png";
import payment from "../../assets/Chores-assets/cash-payment.png";
import SelectOrder from "../../components/chore/SelectOrder";

export default function ChoreModal({ modalVisible, setModalVisible }) {
  // Values needed for Add Chore Screen Popup (Modal)
  var repeatOptions = ["Weekly", "Monthly"];
  var displayRepeatOptions = [];

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  //onChange receives datechange-->What does it do when receive new change add later when database clear
  const [selectcheck, setSelectCheck] = useState(false);
  const [showSelectDate, setSelectDate] = useState("heya");
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
       break;

    default:
      setState({switchone: false,});
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
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
          />
          {/*Type in Chore description*/}
          <TextInput
            style={{ paddingTop: 10, borderBottomWidth: 0.3 }}
            placeholder="Description"
          />

          <BasicText style={{ paddingTop: 20 }}>Select an icon</BasicText>
          
          <View style={styles.gridcont}>

            <TouchableOpacity onPress={() => handleClick(1)}>
            <View style={[styles.iconSquare,{backgroundColor: "#FFCDF4", borderWidth: (state.switchone === false ? 0 : 4)}]}>
              <Image source={cleaning} style={styles.gridimage}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleClick(2)}>
            <View style={[styles.iconSquare,{backgroundColor: "#ECC3FF", borderWidth: (state.switchtwo === false ? 0 : 4)}]}>
              <Image source={household} style={styles.gridimage}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleClick(3)}>
            <View style={[styles.iconSquare,{backgroundColor: "#FFDBA5", borderWidth: (state.switchthree === false ? 0 : 4)}]}>
              <Image source={grocery} style={styles.gridimage}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleClick(4)}>
            <View style={[styles.iconSquare,{backgroundColor: "#A0FC80", borderWidth: (state.switchfour === false ? 0 : 4)}]}>
              <Image source={payment} style={styles.gridimage}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleClick(5)}>
            <View style={[styles.iconSquare, {backgroundColor: "#7DE7DA", borderWidth: (state.switchfive === false ? 0 : 4)}]}>
              <Image source={shopping} style={styles.gridimage}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleClick(6)}>
            <View style={[styles.iconSquare,{backgroundColor: "#BDFFC4", borderWidth: (state.switchsix === false ? 0 : 4)}]}>
              <Image source={heart} style={styles.gridimage}/>
              </View>
            </TouchableOpacity>

          </View>

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
              onPress={() => setModalVisible(!modalVisible)}
            >
              <BasicText style={styles.optionButtonText}>Cancel</BasicText>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); setSelectCheck(false);}}
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
