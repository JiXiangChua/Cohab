import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  CalendarScreen,
  ChoreScreen,
  FinanceScreen,
  HomeScreen,
  TaskScreen,
} from "../screens";

import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  
  const noHeader = {
    headerShown: false,
  };

  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions = {noHeader}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Calendar" component={CalendarScreen} />
      <Drawer.Screen name="Chore" component={ChoreScreen} />
      <Drawer.Screen name="Finance" component={FinanceScreen} />
      <Drawer.Screen name="Task" component={TaskScreen} />
    </Drawer.Navigator>
  );
}