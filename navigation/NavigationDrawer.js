import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import {
  CalendarScreen,
  ChoreScreen,
  FinanceScreen,
  HomeScreen,
  TaskScreen,
} from "../screens";
import FinancePayRMScreen from "../screens/Finance/FinancePayRMScreen";
import FinancePayGroupScreen from "../screens/Finance/FinancePayGroupScreen";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function NavigationDrawer() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  const screenOptions = {
    headerShown: false,
    drawerStyle: {
      backgroundColor: "#6E2142",
    },
    drawerLabelStyle: {
      fontFamily: "Montserrat",
      color: "#FFD897",
    },
    drawerActiveTintColor: "#F7DBF0",
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Calendar" component={CalendarScreen} />
      <Drawer.Screen name="Chore" component={ChoreScreen} />
      <Drawer.Group>
        <Drawer.Screen name="Finance" component={FinanceScreen} />
        <Drawer.Screen name="PayRoommate" component={FinancePayRMScreen} />
        <Drawer.Screen name="PayGroup" component={FinancePayGroupScreen} />
      </Drawer.Group>
      <Drawer.Screen name="Task" component={TaskScreen} />
    </Drawer.Navigator>
  );
}
