import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import GeneralButton from "../GeneralButton";
import BorderColorButton from "../BorderColorButton";

import { Picker } from "@react-native-picker/picker";
import Modal from "react-native-modal";
import BasicText from "../BasicText.js";

export default function ClaimTaskFDModal(props) {
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
            {"Take up the task\n"}
            <BasicText style={styles.cardText}>
              {'"' + props.children.name + '" ?'}
            </BasicText>
            <BasicText style={styles.deadlineText}>
              {"\n\n" + props.children.deadline}
            </BasicText>
          </BasicText>

          <View
            style={{
              flexDirection: "row",
              marginTop: -20,
            }}
          ></View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-around",
            }}
          >
            {/* CANCEL BUTTON */}
            <View style={{fontFamily: "Montserrat", marginTop: 10, paddingRight: 10 }}>
              <BorderColorButton
                buttonText={"Cancel"}
                color={"#7B98FF"}
                onPress={props.cancelButton}
              />
            </View>

            {/* SAVE BUTTON */}
            <View style={{fontFamily: "Montserrat", marginTop: 10 }}>
              <GeneralButton
                buttonText={"Save"}
                color={"#36BC7C"}
                onPress={props.confirmedButton}
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
  cardText: {
    alignSelf: "flex-start",
    marginRight: 15,
    fontFamily: "Montserrat",
    fontSize: 18,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 35,
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
    fontFamily: "Montserrat",
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  deadlineText: {
    color: "#FF0000",
    fontFamily: "Montserrat",
    fontSize: 15,
    textAlign: "center",
  },
});
