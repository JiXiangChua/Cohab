import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator
    screenOptions={(route, nagivation) => ({
      headerShown: false,
    })}
  >
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="Home" component={HomeScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
