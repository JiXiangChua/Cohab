import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";

import CardboardLogo from "../assets/Home-assets/cardboard.png";
import Modal from "react-native-modal";
import { BasicText } from "../components";

export default function CustomizeFurniture(props) {
  const [furnitureModal, setFurnitureModal] = useState(false);
  const [overviewModal, setOverviewModal] = useState(false);
  const [functionModal, setFunctionModal] = useState(false);

  function renderChooseFurniture() {}

  function renderOverviewModal() {}
  function renderChooseFunction() {}

  return (
    <View>
      <TouchableOpacity style={styles.CardboardButton} onPress={props.onPress}>
        <Image source={CardboardLogo} style={styles.CardboardStyle}></Image>
      </TouchableOpacity>
      <Modal
        isVisible={props.modalVisible}
        avoidKeyboard={true}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropOpacity={0.1}
        onBackdropPress={props.onPress}
      >
        <View style={[styles.furnitureModal, { height: 250 }]}></View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  CardboardButton: {
    // backgroundColor: "#FFF",
    justifyContent: "center",
    marginLeft: "60%",
  },
  CardboardStyle: {
    width: 180,
    height: 150,
  },
  furnitureModal: {
    height: 200,
    width: "100%",
    backgroundColor: "#FFFAF2",
    alignSelf: "center",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
    top: "17%",
  },
});
