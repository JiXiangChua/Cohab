import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import TaskScreen from "../screens/TaskScreen";

const TaskStack = createNativeStackNavigator();

const TaskStackScreen = ({ navigation }) => (
  <TaskStack.Navigator
    initialRouteName="Task"
    screenOptions={(route, nagivation) => ({
      //input any adjustments to the navigation bar
    })}
  >
    <TaskStack.Screen name="Task" component={TaskScreen} />
    <TaskStack.Screen name="Home" component={HomeScreen} />
  </TaskStack.Navigator>
);

export default TaskStackScreen;
