import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import FinanceStackScreen from "../stackscreens/FinanceStackScreen";
import TaskStackScreen from "../stackscreens/TaskStackScreen";
import ChoreStackScreen from "../stackscreens/ChoreStackScreen";
import CalandarStackScreen from "../stackscreens/CalandarStackScreen";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={(route, nagivation) => ({
      //input any adjustments to the navigation bar
      headerShown: false,
    })}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen name="FinanceStack" component={FinanceStackScreen} />
    <HomeStack.Screen name="TaskStack" component={TaskStackScreen} />
    <HomeStack.Screen name="ChoreStack" component={ChoreStackScreen} />
    <HomeStack.Screen name="CalandarStack" component={CalandarStackScreen} />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
