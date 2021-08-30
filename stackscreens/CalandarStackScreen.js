import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import CalandarScreen from "../screens/CalandarScreen";

const CalandarStack = createNativeStackNavigator();

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
