import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  CalendarScreen,
  ChoreScreen,
  FinanceScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  TaskScreen,
} from "../screens";
import { useLoginContext } from "../LoginContext";

const RootStack = createNativeStackNavigator();
export default function RootStackScreen({ navigation }) {
  const { isSignedIn } = useLoginContext();

  const noHeader = {
    headerShown: false,
  };

  if (!isSignedIn) {
    return (
      <RootStack.Navigator screenOptions = {noHeader}>
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
        />
        <RootStack.Screen
          name="Register"
          component={RegisterScreen}
        />
      </RootStack.Navigator>
    );
  } else {
    return(
      <RootStack.Navigator screenOptions = {noHeader}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Calendar" component={CalendarScreen} />
        <RootStack.Screen name="Chore" component={ChoreScreen} />
        <RootStack.Group name="FinanceStack">
          <RootStack.Screen name="Finance" component={FinanceScreen} />
        </RootStack.Group>
        <RootStack.Screen name="Task" component={TaskScreen} />
      </RootStack.Navigator>
    );
  }
}