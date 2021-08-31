import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CalendarScreen , ChoreScreen , FinanceScreen , HomeScreen , LoginScreen , RegisterScreen , TaskScreen } from "../screens";
import { useLoginContext } from "../LoginContext";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => {

  const { isSignedIn } = useLoginContext();

  const noHeader = {
    headerShown: false,
  };
  
  const yellowHeader = {
    headerStyle: {
      backgroundColor: '#FFD692',
    }
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
      <RootStack.Navigator screenOptions = {yellowHeader}>
        <RootStack.Screen name="Home" component={HomeScreen} options = {noHeader} />
        <RootStack.Screen name="Calendar" component={CalendarScreen} />
        <RootStack.Screen name="Chore" component={ChoreScreen} />
        <RootStack.Screen name="Finance" component={FinanceScreen} />
        <RootStack.Screen name="Task" component={TaskScreen} />
      </RootStack.Navigator>
    );
  }
};

export default RootStackScreen;
