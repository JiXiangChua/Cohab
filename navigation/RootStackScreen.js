import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet , Image } from 'react-native';

import { CalendarScreen , ChoreScreen , FinanceScreen , HomeScreen , LoginScreen , RegisterScreen , TaskScreen } from "../screens";
import { useLoginContext } from "../LoginContext";

import notificationButton from '../assets/NotificationButton.png';

const RootStack = createNativeStackNavigator();
export default function RootStackScreen ({ navigation }) {

  const { isSignedIn } = useLoginContext();

  const noHeader = {
    headerShown: false,
  };
  
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#FFD897',
      borderWidth: 0,
      shadowOpacity: 0,
      elevation: 0,
      zIndex: 1,
      shadowColor: "FFD897",
    },
    headerTintColor: "#E16363",
    headerRight: () => (
      <Image source = {notificationButton} style = {styles.notificationButton} />
    ),
  }

  if (!isSignedIn) {
    return(
      <RootStack.Navigator>
        <RootStack.Screen name="Login" component={LoginScreen} options = {noHeader} />
        <RootStack.Screen name="Register" component={RegisterScreen} options = {noHeader} />
      </RootStack.Navigator>
    );
  } else {
    return(
      <RootStack.Navigator screenOptions = {noHeader}>
        <RootStack.Screen name="Home" component={HomeScreen} options = {noHeader} />
        <RootStack.Screen name="Calendar" component={CalendarScreen} />
        <RootStack.Screen name="Chore" component={ChoreScreen} />
        <RootStack.Screen name="Finance" component={FinanceScreen} />
        <RootStack.Screen name="Task" component={TaskScreen} />
      </RootStack.Navigator>
    );
  }
};

const styles = StyleSheet.create({
  backButton: {
    minHeight: 24,
    minWidth: 24,
    resizeMode: "center",
  },
  notificationButton: {
    resizeMode: "center",
  }
});