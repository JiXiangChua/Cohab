import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HomeStackScreen from "./HomeStackScreen";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator
    screenOptions={(route, nagivation) => ({
      headerShown: false,
    })}
  >
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="Register" component={RegisterScreen} />
    <RootStack.Screen name="HomeStackScreen" component={HomeStackScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
