import React from "react";
import { View, StyleSheet, Image } from "react-native";
import BasicText from "../BasicText";

export default function BudgetCard(props) {
  // console.log(props.image);
  return (
    <View style={styles.budgetCardContainer}>
      <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
        <View style={[styles.iconSquare, { backgroundColor: props.color }]}>
          <Image source={props.image} style={{ width: 50, height: 50 }} />
        </View>
        {/* <Text style={{ paddingRight: 20 }}>ImageFile</Text> */}
        <BasicText
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 15,
            alignSelf: "center",
          }}
        >
          {props.category}
        </BasicText>
      </View>

      <BasicText style={{ fontSize: 20, alignSelf: "center" }}>
        $ {props.amount}
      </BasicText>
    </View>
  );
}

const styles = StyleSheet.create({
  budgetCardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 5,
    borderWidth: 0.1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "center",
  },
  iconSquare: {
    alignContent: "center",
    justifyContent: "center",
    margin: 5,
    width: 70,
    height: 70,
    padding: 10,
    borderRadius: 20,
    borderColor: "#2196F3",
  },
});
