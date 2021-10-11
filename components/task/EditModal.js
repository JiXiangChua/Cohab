import React, { useState } from "react";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import GeneralButton from "../GeneralButton";
import BorderColorButton from "../BorderColorButton";

import { Picker } from "@react-native-picker/picker";

export default function EditDModal(props) {
  const [selectedDay, setSelectedDay] = useState(props.dayUpdated);
  const [selectedMonth, setSelectedMonth] = useState(props.monthUpdated);
  const [selectedYear, setSelectedYear] = useState("2021");

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={props.cancelButton}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {"Would you like to edit the task\n"}
            <Text style={styles.cardText}>
              {'"' + props.children.name + '" ?'}
            </Text>
          </Text>

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
                selectedValue={selectedDay}
                style={{
                  height: 50,
                  width: 90,
                }}
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
                style={{ height: 50, width: 100 }}
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
                style={{ height: 50, width: 110 }}
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
              </Picker>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 50,
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
                onPress={() => setModalVisible(!modalVisible)}
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
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonCancel: {
    width: 70,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#7B98FF",
    borderRadius: 10,
    padding: 8,
    margin: 10,
  },
  buttonSave: {
    width: 70,
    backgroundColor: "#36BC7C",
    borderRadius: 10,
    padding: 8,
    margin: 10,
  },
  buttonUnload: {
    width: 70,
    backgroundColor: "#FF1A1A",
    borderRadius: 10,
    padding: 8,
  },
  textStyle: {
    color: "#7B98FF",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle1: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle2: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
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
    backgroundColor: "#000000aa",
  },
});
