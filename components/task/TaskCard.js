import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import ProfilePic from "../../assets/Finance-assets/Kimberly.png";

export default function TaskCard(props) {
  return (
    <View style={styles.taskCardContainer}>
      <Text>Do the dishes</Text>
      <Text>Set own deadline</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskCardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
    borderWidth: 0.1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    justifyContent: "space-between",
    flexDirection: 'row',
  },
});
