import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

import { BasicText } from ".";

export default function ModalScreen(props) {
  return (
    <Modal
      isVisible={props.isVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
    >
      <View style={styles.modalStyle}>
        <BasicText style={{ fontSize: 20, height: 100 }}>
          {props.message}
        </BasicText>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.setVisible(!props.isVisible);
            }}
            style={[
              styles.modalButton,
              {
                backgroundColor: "#FFF",
                borderWidth: 1,
                borderColor: "#7B98FF",
              },
            ]}
          >
            <BasicText style={{ color: "#7B98FF" }}>
              {props.buttonText}
            </BasicText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    height: 200,
    width: "90%",
    backgroundColor: "#FFFAF2",
    alignSelf: "center",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
  },
  modalButton: {
    width: 97,
    height: 32,
    borderRadius: 10,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
