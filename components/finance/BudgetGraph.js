import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { VictoryPie } from "victory-native";
import BudgetCard from "./BudgetCard";

export default function BudgetGraph() {
  const [category, setCategory] = useState([
    {
      label: "Education", //category name
      x: 1, //id of category
      y: 100.25, //amount of expense
      image: "",
    },
    {
      label: "Food",
      x: 2,
      y: 80.3,
      image: "",
    },
    {
      label: "Shopping",
      x: 3,
      y: 300.0,
      image: "",
    },
    {
      label: "Travel",
      x: 4,
      y: 150.5,
      image: "",
    },
  ]);

  function renderChart() {
    var total = 0;
    for (let index = 0; index < category.length; index++) {
      total = total + category[index].y;
    }
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        <VictoryPie
          colorScale={"qualitative"}
          data={category}
          innerRadius={70}
          height={350}
          padding={{ top: 80, bottom: 70 }}
          labelPlacement={() => "vertical"}
          labelPosition={({ index }) => "centroid"}
          labelRadius={125}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 1,
            },
            labels: {
              fontSize: 25,
              fill: "#fff",
            },
          }}
        />
        <View style={{ position: "absolute", top: "40%", left: "37%" }}>
          <Text style={{ textAlign: "center", fontSize: 30, color: "#fff" }}>
            ${total.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity activeOpacity={1} style={{ width: "100%" }}>
        <View
          style={{
            width: "100%",
            height: 200,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {renderChart()}
        </View>
        <View style={styles.topContainer}>
          {category.map((item, index) => {
            return (
              <BudgetCard
                key={index}
                category={item.label}
                amount={item.y.toFixed(2)}
                image={item.image}
              ></BudgetCard>
            );
          })}
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#FFF",
    width: "100%",
    marginTop: 100,
    paddingTop: 10,
    paddingBottom: 30,
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
