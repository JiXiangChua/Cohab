import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import FinanceScreen from "../screens/FinanceScreen";

const FinanceStack = createNativeStackNavigator();

const FinanceStackScreen = ({ navigation }) => (
  <FinanceStack.Navigator
    initialRouteName="Finance"
    screenOptions={(route, nagivation) => ({
      //input any adjustments to the navigation bar
    })}
  >
    <FinanceStack.Screen
      name="Finance"
      component={FinanceScreen}
      options={{
        headerShown: false,
        // headerLeft: () => <Button title="Back to Room"></Button>,
      }}
    />
    <FinanceStack.Screen name="Home" component={HomeScreen} />
  </FinanceStack.Navigator>
);

export default FinanceStackScreen;
