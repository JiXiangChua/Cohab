import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ChoreScreen from "../screens/ChoreScreen";

const ChoreStack = createNativeStackNavigator();

const ChoreStackScreen = ({ navigation }) => (
  <ChoreStack.Navigator
    initialRouteName="Chore"
    screenOptions={(route, nagivation) => ({
      //input any adjustments to the navigation bar
    })}
  >
    <ChoreStack.Screen
      name="Chore"
      component={ChoreScreen}
      options={{
        headerShown: false,
      }}
    />
    <ChoreStack.Screen name="Home" component={HomeScreen} />
  </ChoreStack.Navigator>
);

export default ChoreStackScreen;
