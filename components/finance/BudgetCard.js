import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function BudgetCard(props) {
  console.log(props.image);
  return (
    <View style={styles.budgetCardContainer}>
      <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
        <Image source={props.image} style={{ width: 50, height: 50 }} />
        {/* <Text style={{ paddingRight: 20 }}>ImageFile</Text> */}
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {props.category}
        </Text>
      </View>

      <Text style={{ fontSize: 20 }}>$ {props.amount}</Text>
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
    marginVertical: 15,
    borderWidth: 0.1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "center",
  },
});
