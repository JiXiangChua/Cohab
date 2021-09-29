import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  LoginScreen,
  RegisterScreen,
} from "../screens";
import NavigationDrawer from "./NavigationDrawer";
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
      <NavigationDrawer />
    );
  }
}