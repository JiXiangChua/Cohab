import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import ProfilePic from "../../assets/Finance-assets/Kimberly.png";

export default function TaskCard(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState("1");
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const [selectedYear, setSelectedYear] = useState("2021");

  return (
    <View
      style={[styles.card, styles.shadowProp, { justifyContent: "center" }]}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Would you like to edit the task 'Mop the floor'?
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
                  selectedValue={selectedMonth}
                  style={{ height: 50, width: 100 }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedMonth(itemValue)
                  }
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
              <Pressable
                style={[styles.buttonCancel]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>

              {/* SAVE BUTTON */}
              <Pressable
                style={[styles.buttonSave]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle1}>Save</Text>
              </Pressable>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              {/* UNLOAD BUTTON */}
              <Pressable
                style={[styles.buttonUnload]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle2}>Unload</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ flexDirection: "row" }}>
        {/* Column for Name, Description & Claim me */}
        <View style={styles.cardDisplayColumnFormat}>
          <Text style={styles.cardText}>{props.name}</Text>
          <Text style={[styles.cardText, { fontSize: 15, color: "#8A8585" }]}>
            {props.description}
          </Text>
          <TouchableOpacity style={[styles.claimButton, styles.shadowProp]}>
            <Text
              style={{ color: "#FFF", fontSize: 16 }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Claim me
            </Text>
          </TouchableOpacity>
        </View>

        {/* Column for set deadline  */}
        <View style={[styles.cardDisplayColumnFormat, { marginLeft: 50 }]}>
          <Text style={[styles.setText, { marginRight: 10 }]}>{props.set}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.cardText, { fontSize: 14, color: "#8A8585" }]}>
              {props.date_created}
            </Text>
            <Image source={ProfilePic} style={styles.profileImage} />
          </View>
        </View>

        <View style={[styles.cardDisplayColumnFormat]}>
          <Text style={[styles.deadlineText, { marginLeft: -110 }]}>
            {props.deadline}
          </Text>
        </View>
      </View>
    </View>
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
  cardDisplayColumnFormat: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  cardText: {
    alignSelf: "flex-start",
    marginRight: 20,
    fontSize: 18,
  },
  setText: {
    alignSelf: "center",
    marginRight: 10,
    fontSize: 14,
    color: "#0038FF",
    marginBottom: 37,
  },
  deadlineText: {
    alignSelf: "center",
    marginRight: 10,
    fontSize: 14,
    color: "#FF0000",
    marginBottom: 55,
  },
  claimButton: {
    backgroundColor: "#36BC7C",
    height: 38,
    width: 100,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  profileImage: {
    marginLeft: -10,
    minWidth: 15,
    minHeight: 15,
    marginTop: -15,
    alignSelf: "center",
  },
  taskCardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
    borderWidth: 0.1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
});
