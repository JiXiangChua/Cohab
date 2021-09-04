import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import TaskScreen from "../screens/TaskScreen";
import ChoreScreen from "../screens/ChoreScreen";

const TaskStack = createNativeStackNavigator();

const TaskStackScreen = ({ navigation }) => (
  <TaskStack.Navigator
    initialRouteName="Task"
    screenOptions={(route, nagivation) => ({
      //input any adjustments to the navigation bar
      headerBackVisible: true,
    })}
  >
    <TaskStack.Screen
      name="Task"
      component={TaskScreen}
      options={{
        headerShown: false,
      }}
    />
  </TaskStack.Navigator>
);

export default TaskStackScreen;
