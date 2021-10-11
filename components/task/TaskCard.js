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

import ProfilePic from "../../assets/Finance-assets/Kimberly.png";
import GeneralButton from "../GeneralButton";
import ClaimTaskSDModal from "./ClaimTaskSDModal";
import ClaimTaskFDModal from "./ClaimTaskFDModal";

export default function TaskCard(props) {
  const [claimModalVisible, setClaimModalVisible] = useState(false);

  function onCancel() {
    setClaimModalVisible(!claimModalVisible);
  }

  function onConfirmed() {
    setClaimModalVisible(!claimModalVisible);
    props.toggle();
  }

  return (
    <View
      style={[styles.card, styles.shadowProp, { justifyContent: "center" }]}
    >
      {claimModalVisible && !props.fdCheck && (
        <ClaimTaskSDModal cancelButton={onCancel} confirmedButton={onConfirmed}>
          {props}
        </ClaimTaskSDModal>
      )}
      {claimModalVisible && props.fdCheck && (
        <ClaimTaskFDModal cancelButton={onCancel} confirmedButton={onConfirmed}>
          {props}
        </ClaimTaskFDModal>
      )}

      <View style={{ flexDirection: "row" }}>
        {/* Column for Name, Description & Claim me */}
        <View style={styles.cardDisplayColumnFormat}>
          <Text style={styles.cardText}>{props.name}</Text>
          <Text style={[styles.cardText, { fontSize: 15, color: "#8A8585" }]}>
            {props.description}
          </Text>

          <View style={{ marginTop: 10 }}>
            <GeneralButton
              buttonText={"Claim me"}
              color={"#36BC7C"}
              onPress={() => {
                setClaimModalVisible(!claimModalVisible);
              }}
            />
          </View>
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
