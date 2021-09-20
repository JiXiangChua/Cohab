import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function BudgetGraph() {
  return (
    <ScrollView>
      <TouchableOpacity activeOpacity={1} style={{ width: "100%" }}>
        <View
          style={{
            width: "100%",
            height: 200,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View style={[styles.barChart, { backgroundColor: "#F6A9A9" }]}>
            <Text>Hello</Text>
          </View>
          <View
            style={[styles.barChart, { backgroundColor: "#FFBF86" }]}
          ></View>
          <View
            style={[styles.barChart, { backgroundColor: "#FFF47D" }]}
          ></View>
          <View
            style={[styles.barChart, { backgroundColor: "#C2F784" }]}
          ></View>
        </View>
        <View style={styles.topContainer}></View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 200,
  },
  barChart: {
    width: 50,
    height: 100,
    marginHorizontal: 20,
    alignSelf: "flex-end",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
