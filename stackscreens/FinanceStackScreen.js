import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import FinanceScreen from "./FinanceScreen";

const FinanceStack = createStackNavigator();

const FinanceStackScreen = ({ navigation }) => (
  <FinanceStack.Navigator
    initialRouteName="Finance"
    screenOptions={(route, nagivation) => ({
      //input any adjustments to the navigation bar
    })}
  >
    <FinanceStack.Screen name="Finance" component={FinanceScreen} />
    <FinanceScreen.Screen name="Home" component={HomeScreen} />
  </FinanceStack.Navigator>
);

export default FinanceStackScreen;
