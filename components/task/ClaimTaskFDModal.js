import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  Button,
  Pressable,
  StyleSheet,
  CheckBox,
} from "react-native";
import GeneralButton from "../GeneralButton";
import BorderColorButton from "../BorderColorButton";

import BasicText from "../BasicText.js";

export default function ClaimTaskFDModal(props) {
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
            {"Take up the task\n"}
            <Text style={styles.cardText}>
              {'"' + props.children.name + '" ?'}
            </Text>
            <Text style={styles.deadlineText}>
              {"\n\n" + props.children.deadline}
            </Text>
            {/*need styling*/}
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
            ></View>
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
              onPress={props.cancelButton}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>

            {/* SAVE BUTTON */}

            <Pressable
              style={[styles.buttonSave]}
              onPress={props.confirmedButton}
            >
              <Text style={styles.textStyle1}>Save</Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", marginTop: 20 }}></View>
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
    width: 350,
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
  modalText: {
    marginBottom: 40,
    textAlign: "center",
    fontSize: 18,
  },
  cardText: {
    alignSelf: "flex-start",
    marginRight: 20,
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#000000aa",
  },
  deadlineText: {
    color: "#FF0000",
    fontSize: 15,
    textAlign: "center",
  },
});
