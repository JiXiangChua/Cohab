import React, { useState } from 'react';
import { View , Text, TextInput , Modal , Button , Pressable , StyleSheet, CheckBox } from 'react-native';
import GeneralButton from "../GeneralButton";
import BorderColorButton from "../BorderColorButton";

import BasicText from '../BasicText.js';
import { Picker } from "@react-native-picker/picker";


export default function TaskModal({ modalVisible , setModalVisible }) {

    // Values needed for Add Task Screen Popup (Modal)
    var repeatOptions = ["Fixed Deadline", "Set Own Deadline"];
    var displayRepeatOptions = [];


    for (let i = 0; i < 2; i++) {
      displayRepeatOptions.push(
        <Pressable
          key={i}
          style={[styles.optionButton, styles.buttonClose]}
        >
          <BasicText style={styles.optionButtonText}>
            {repeatOptions[i]}
          </BasicText>
        </Pressable>
      );
    }
    const [isSelected, setSelection] = useState(false);


    const [selectedDay, setSelectedDay] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState([]);
    const [selectedYear, setSelectedYear] = useState([]);
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
                style={{paddingTop: 20, height: 200, borderBottomWidth: 0.5, textAlignVertical: "top"}}
                placeholder="Description"
                />

                <BasicText style={{paddingTop:30}}>Choose Deadline: </BasicText>
                <View style={{ paddingTop:10 , paddingBottom:20, flexDirection: "row", marginHorizontal: 10, justifyContent: 'space-around'}}>
                    {displayRepeatOptions}
                </View>

                <BasicText style={{paddingTop:30, paddingBottom: 10}}>Choose a Date: </BasicText>
                <View
                              style={{
                                flexDirection: "column",
                              }}
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                }}
                              >
                                <Picker
                                placeholder="DD"
                                  selectedValue={selectedDay}
                                  style={{
                                    height: 50,
                                    width: 90,
                                  }}
                                  onValueChange={(itemValue, itemIndex) =>
                                    setSelectedDay(itemValue)
                                  }
                                  mode={"dropdown"}
                                >
                                  <Picker.Item label={"1"} value={"1"} />
                                  <Picker.Item label={"2"} value={"2"} />
                                  <Picker.Item label={"3"} value={"3"} />
                                  <Picker.Item label={"4"} value={"4"} />
                                  <Picker.Item label={"5"} value={"5"} />
                                  <Picker.Item label={"6"} value={"6"} />
                                  <Picker.Item label={"7"} value={"7"} />
                                  <Picker.Item label={"8"} value={"8"} />
                                  <Picker.Item label={"9"} value={"9"} />
                                  <Picker.Item label={"10"} value={"10"} />
                                  <Picker.Item label={"11"} value={"11"} />
                                  <Picker.Item label={"12"} value={"12"} />
                                  <Picker.Item label={"13"} value={"13"} />
                                  <Picker.Item label={"14"} value={"14"} />
                                  <Picker.Item label={"15"} value={"15"} />
                                  <Picker.Item label={"16"} value={"16"} />
                                  <Picker.Item label={"17"} value={"17"} />
                                  <Picker.Item label={"18"} value={"18"} />
                                  <Picker.Item label={"19"} value={"19"} />
                                  <Picker.Item label={"20"} value={"20"} />
                                  <Picker.Item label={"21"} value={"21"} />
                                  <Picker.Item label={"22"} value={"22"} />
                                  <Picker.Item label={"23"} value={"23"} />
                                  <Picker.Item label={"24"} value={"24"} />
                                  <Picker.Item label={"25"} value={"25"} />
                                  <Picker.Item label={"26"} value={"26"} />
                                  <Picker.Item label={"27"} value={"27"} />
                                  <Picker.Item label={"28"} value={"28"} />
                                  <Picker.Item label={"29"} value={"29"} />
                                  <Picker.Item label={"30"} value={"30"} />
                                  <Picker.Item label={"31"} value={"31"} />
                                </Picker>

                                <Picker
                                placeholder="MM"
                                  selectedValue={selectedMonth}
                                  style={{ height: 50, width: 100 }}
                                  onValueChange={(itemValue, itemIndex) =>
                                    setSelectedMonth(itemValue)
                                  }
                                  mode={"dropdown"}
                                >
                                  <Picker.Item label={"Jan"} value={1} />
                                  <Picker.Item label={"Feb"} value={2} />
                                  <Picker.Item label={"Mar"} value={3} />
                                  <Picker.Item label={"Apr"} value={4} />
                                  <Picker.Item label={"May"} value={5} />
                                  <Picker.Item label={"Jun"} value={6} />
                                  <Picker.Item label={"Jul"} value={7} />
                                  <Picker.Item label={"Aug"} value={8} />
                                  <Picker.Item label={"Sep"} value={9} />
                                  <Picker.Item label={"Oct"} value={10} />
                                  <Picker.Item label={"Nov"} value={11} />
                                  <Picker.Item label={"Dec"} value={12} />
                                </Picker>

                                <Picker
                                placeholder="YYYY"
                                  selectedValue={selectedYear}
                                  style={{ height: 50, width: 110}}
                                  onValueChange={(itemValue, itemIndex) =>
                                    setSelectedYear(itemValue)
                                  }
                                  mode={"dropdown"}
                                >
                                  <Picker.Item label={"2021"} value={"2021"} />
                                  <Picker.Item label={"2022"} value={"2022"} />
                                  <Picker.Item label={"2023"} value={"2023"} />
                                  <Picker.Item label={"2024"} value={"2024"} />
                                  <Picker.Item label={"2025"} value={"2025"} />
                                  <Picker.Item label={"2026"} value={"2026"} />
                                  <Picker.Item label={"2027"} value={"2027"} />
                                  <Picker.Item label={"2028"} value={"2028"} />
                                  <Picker.Item label={"2029"} value={"2029"} />
                                </Picker>
                              </View>
                            </View>


                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                        <View style={{flexDirection: "row", paddingTop: 80, paddingBottom: 20}}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                            />
                            <Text style={{}}>I will do it!</Text>
                        </View>
                    </View>
                </View>

                    <View style={{flexDirection: "row"}}>
                    <View style={{marginTop: 10 , paddingRight: 10}}>
                        <BorderColorButton buttonText={"Cancel"} color={"#7B98FF"} onPress={() => setModalVisible(!modalVisible)}/>
                    </View>

                    <View style={{marginTop: 10 }}>
                        <GeneralButton buttonText={"Add Entry"} color={"#36BC7C"} onPress={() => setModalVisible(!modalVisible)}/>
                    </View>
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