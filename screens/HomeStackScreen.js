import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import FinanceScreen from "./FinanceScreen";
import TaskScreen from "./TaskScreen";
import ChoreScreen from "./ChoreScreen";
import CalandarScreen from "./CalandarScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={(route, nagivation) => ({
      //input any adjustments to the navigation bar
    })}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen name="FinanceStack" component={FinanceStackScreen} />
    <HomeStack.Screen name="Task" component={TaskScreen} />
    <HomeStack.Screen name="Chore" component={ChoreScreen} />
    <HomeStack.Screen name="Calandar" component={CalandarScreen} />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
