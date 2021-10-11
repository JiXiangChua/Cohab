import React, { useState } from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import GeneralButton from "../GeneralButton";
import BorderColorButton from "../BorderColorButton";

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
