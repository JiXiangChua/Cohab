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
import FoodIcon from "../../assets/Finance-assets/meal.png";
import ShoppingIcon from "../../assets/Chores-assets/online-shopping.png";
import EducationIcon from "../../assets/Finance-assets/book-stack.png";
import TransportIcon from "../../assets/Finance-assets/vehicles.png";

export default function BudgetGraph() {
  const [category, setCategory] = useState([
    {
      name: "Education", //category name
      id: 1, //id of category
      amount: 100.25, //amount of expense
      // image: {
      //   uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
      // },
      image: EducationIcon,
      color: "#BDFFC4",
    },
    {
      name: "Food",
      id: 2,
      amount: 80.3,
      image: FoodIcon,
      color: "#FFDBA5",
    },
    {
      name: "Shopping",
      id: 3,
      amount: 300.0,
      image: ShoppingIcon,
      color: "#7DE7DA",
    },
    {
      name: "Travel",
      id: 4,
      amount: 150.5,
      image: TransportIcon,
      color: "#FFCDF4",
    },
  ]);

  //To convert category state variable to Victory-Native Pie chart props
  let chartData = category.map((item) => {
    return {
      label: item.name,
      x: item.id,
      y: item.amount,
      image: item.image,
      color: item.color,
    };
  });

  function renderChart() {
    var total = 0;
    for (let index = 0; index < chartData.length; index++) {
      total = total + chartData[index].y;
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
          data={chartData}
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
          {chartData.map((item, index) => {
            return (
              <BudgetCard
                key={index}
                category={item.label}
                amount={item.y.toFixed(2)}
                image={item.image}
                color={item.color}
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
