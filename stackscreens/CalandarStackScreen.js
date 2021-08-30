import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import CalandarScreen from "../screens/CalandarScreen";

const CalandarStack = createStackNavigator();

const CalandarStackScreen = ({ navigation }) => (
  <CalandarStack.Navigator
    initialRouteName="Task"
    screenOptions={(route, nagivation) => ({
      //input any adjustments to the navigation bar
    })}
  >
    <CalandarStack.Screen name="Calandar" component={CalandarScreen} />
    <CalandarStack.Screen name="Home" component={HomeScreen} />
  </CalandarStack.Navigator>
);

export default CalandarStackScreen;
