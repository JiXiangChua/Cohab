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
  
  const screenOptions = {
    headerShown: false,
    drawerStyle: {
      backgroundColor: '#6E2142',
    },
    drawerLabelStyle: {
      color: '#FFD897',
    },
    drawerActiveTintColor: '#F7DBF0',
  };

  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions = {screenOptions} drawerContent = {(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Calendar" component={CalendarScreen} />
      <Drawer.Screen name="Chore" component={ChoreScreen} />
      <Drawer.Screen name="Finance" component={FinanceScreen} />
      <Drawer.Screen name="Task" component={TaskScreen} />
    </Drawer.Navigator>
  );
}