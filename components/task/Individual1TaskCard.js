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
import EditModal from "./EditModal";

export default function Individual1TaskCard(props) {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [day, setDay] = useState("28");
  const [month, setMonth] = useState("Aug");

  function onCancel() {
    setEditModalVisible(!editModalVisible);
  }
  function onSave() {
    setEditModalVisible(!editModalVisible);
    // props.toggle();
  }
  return (
    <View
      style={[styles.card, styles.shadowProp, { justifyContent: "center" }]}
    >
      {editModalVisible && (
        <EditModal
          cancelButton={onCancel}
          saveButton={onSave}
          dateChange={setDay}
          monthChange={setMonth}
          dayUpdated={day}
          monthUpdated={month}
        >
          {props}
        </EditModal>
      )}

      <View style={{ flexDirection: "row" }}>
        {/* Column for Name, Description & buttons */}
        <View style={styles.cardDisplayColumnFormat}>
          <Text style={styles.cardText}>{props.name}</Text>
          <Text style={[styles.cardText, { fontSize: 14, color: "#8A8585" }]}>
            {props.description}
          </Text>

          {/* Edit button */}
          <View style={{ flexDirection: "row" }}>
            {/* Edit button */}
            <View style={{ marginTop: 10 }}>
              <GeneralButton
                buttonText={"Edit"}
                color={"#7D98FF"}
                onPress={() => {
                  setEditModalVisible(!editModalVisible);
                }}
              />
            </View>

            {/* Done button */}
            <View style={{ marginTop: 10, marginLeft: 5 }}>
              <GeneralButton
                buttonText={"Done"}
                color={"#36BC7C"}
                onPress={() => {
                  // setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </View>

        {/* Column for set deadline  */}
        <View style={[styles.cardDisplayColumnFormat, { marginLeft: 15 }]}>
          <Text style={[styles.setText, { marginRight: 10 }]}>
            {"Deadline:" + day + " " + month}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.cardText, { fontSize: 15, color: "#8A8585" }]}>
              {props.date_created}
            </Text>
            <Image source={ProfilePic} style={styles.profileImage} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: "105%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#0038FF",
    alignSelf: "center",
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
  editButton: {
    backgroundColor: "#0038FF",
    height: 38,
    width: 100,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
    marginLeft: -5,
    minWidth: 15,
    minHeight: 15,
    marginTop: -15,
    alignSelf: "center",
  },
});
