import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import GeneralButton from "../GeneralButton";
import BorderColorButton from "../BorderColorButton";

import { Picker } from "@react-native-picker/picker";
import Modal from "react-native-modal";
import BasicText from "../BasicText.js";

export default function EditModal(props) {
  const [selectedDay, setSelectedDay] = useState(props.dayUpdated);
  const [selectedMonth, setSelectedMonth] = useState(props.monthUpdated);
  const [selectedYear, setSelectedYear] = useState("2021");

  return (
    // <Modal
    //   animationType="fade"
    //   transparent={true}
    //   visible={true}
    //   onRequestClose={props.cancelButton}
    // >
    <Modal
      isVisible={true}
      avoidKeyboard={true}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <BasicText style={styles.modalText}>
            {"Would you like to edit the task\n"}
            <BasicText style={styles.cardText}>
              {'"' + props.children.name + '" ?'}
            </BasicText>
          </BasicText>

          <View
            style={{
              flexDirection: "row",
              marginTop: -60,
            }}
          >
            <Picker
              selectedValue={selectedDay}
              collapsable={true}
              style={{
                height: 150,
                width: "35%",
              }}
              itemStyle={{ height: 150 }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedDay(itemValue);
              }}
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
              selectedValue={selectedMonth}
              collapsable={true}
              style={{
                height: 150,
                width: "35%",
              }}
              itemStyle={{ height: 150 }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedMonth(itemValue);
              }}
              mode={"dropdown"}
            >
              <Picker.Item label={"Jan"} value={"Jan"} />
              <Picker.Item label={"Feb"} value={"Feb"} />
              <Picker.Item label={"Mar"} value={"Mar"} />
              <Picker.Item label={"Apr"} value={"Apr"} />
              <Picker.Item label={"May"} value={"May"} />
              <Picker.Item label={"Jun"} value={"Jun"} />
              <Picker.Item label={"Jul"} value={"Jul"} />
              <Picker.Item label={"Aug"} value={"Aug"} />
              <Picker.Item label={"Sep"} value={"Sep"} />
              <Picker.Item label={"Oct"} value={"Oct"} />
              <Picker.Item label={"Nov"} value={"Nov"} />
              <Picker.Item label={"Dec"} value={"Dec"} />
            </Picker>

            <Picker
              selectedValue={selectedYear}
              collapsable={true}
              style={{
                height: 150,
                width: "40%",
              }}
              itemStyle={{ height: 150 }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedYear(itemValue);
              }}
              mode={"dropdown"}
            >
              <Picker.Item label={"2021"} value={"2021"} />
              <Picker.Item label={"2022"} value={"2022"} />
              <Picker.Item label={"2023"} value={"2023"} />
              <Picker.Item label={"2024"} value={"2024"} />
              <Picker.Item label={"2025"} value={"2025"} />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: -20,
              justifyContent: "space-around",
            }}
          >
            {/* CANCEL BUTTON */}
            <View style={{ marginTop: 10, paddingRight: 10 }}>
              <BorderColorButton
                buttonText={"Cancel"}
                color={"#7B98FF"}
                onPress={props.cancelButton}
              />
            </View>

            {/* SAVE BUTTON */}
            <View style={{ marginTop: 10 }}>
              <GeneralButton
                buttonText={"Save"}
                color={"#36BC7C"}
                onPress={() => {
                  props.dateChange(selectedDay);
                  props.monthChange(selectedMonth);
                  props.saveButton();
                }}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            {/* UNLOAD BUTTON */}
            <View style={{ marginTop: 10 }}>
              <GeneralButton
                buttonText={"Unload"}
                color={"#FF1A1A"}
                onPress={props.cancelButton}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 6,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: "105%",
    marginVertical: 10,
    borderWidth: 0.1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 40,
    textAlign: "center",
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
