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

import newTaskButton from "../../assets/Task-assets/NewTaskButton.png";
import BasicText from "../BasicText.js";
import TaskCard from "./TaskCard.js";
import ProfilePic from "../../assets/Finance-assets/Kimberly.png";
import BorderColorButton from "../BorderColorButton";
import GeneralButton from "../GeneralButton";
import RestoreTask from "./RestoreTask.js";

export default function CompletedTaskCard(props) {
  const [restoreVisible, setRestoreVisible] = useState(false);

  return (
    <View
      style={[styles.card, styles.shadowProp2, { justifyContent: "center" }]}
    >
      <View style={{ flexDirection: "row" }}>
        {/* Column for Name, Description & Claim me */}
        <View style={styles.cardDisplayColumnFormat}>
          <Text style={styles.cardText}>{props.name}</Text>
          <Text style={[styles.cardText, { fontSize: 14, color: "#8A8585" }]}>
            {props.description}
          </Text>

          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              style={styles.newTask}
              onPress={() => setRestoreVisible(true)}
            >
              <BorderColorButton
                buttonText={"Revive"}
                color={"#36BC7C"}
                onPress={() => setRestoreVisible(true)}
              />
            </TouchableOpacity>
          </View>

          {/* <TouchableOpacity style={[styles.reviveButton, styles.shadowProp]}>
            <Text style={{ color: "#FFF", fontSize: 16 }}>Revive</Text>
          </TouchableOpacity> */}
        </View>

        {/* Column for set deadline  */}
        <View style={[styles.cardDisplayColumnFormat, { marginLeft: 30 }]}>
          <Text style={[styles.deadlineText, { marginRight: 15 }]}>
            {props.deadline}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.cardText, { fontSize: 15, color: "#8A8585" }]}>
              {props.date_created}
            </Text>
            <Image source={ProfilePic} style={styles.profileImage} />
          </View>
        </View>
      </View>

      <RestoreTask
        restoreVisible={restoreVisible}
        setRestoreVisible={setRestoreVisible}
      />
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
    borderColor: "#36BC7C",
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
  shadowProp2: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 4,
  },
  cardDisplayColumnFormat: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  cardText: {
    alignSelf: "flex-start",
    marginRight: 15,
    fontSize: 18,
  },
  deadlineText: {
    alignSelf: "center",
    marginRight: 10,
    fontSize: 14,
    color: "#36BC7C",
    marginBottom: 30,
  },
  reviveButton: {
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
    marginTop: -17,
    alignSelf: "center",
  },
});
