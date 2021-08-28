import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
// import LoginScreen from "./screens/LoginScreen.js";
// import HomeScreen from "./screens/HomeScreen.js";
import RootStackScreen from "./screens/RootStackScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  const isLogin = false;

  return (
    // <View style={styles.container}>
    //   <LoginScreen />
    // </View>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      {isLogin == true ? <HomeScreen /> : <RootStackScreen />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
