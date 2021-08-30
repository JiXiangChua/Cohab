import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ChoreScreen from "../screens/ChoreScreen";

const ChoreStack = createStackNavigator();

const ChoreStackScreen = ({ navigation }) => (
  <ChoreStack.Navigator
    initialRouteName="Chore"
    screenOptions={(route, nagivation) => ({
      //input any adjustments to the navigation bar
    })}
  >
    <ChoreStack.Screen name="Chore" component={ChoreScreen} />
    <ChoreStack.Screen name="Home" component={HomeScreen} />
  </ChoreStack.Navigator>
);

export default ChoreStackScreen;
