import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStackScreen from "./screens/RootStackScreen";
import HomeStackScreen from "./screens/HomeStackScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const isLogin = false;

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {isLogin == true ? <HomeStackScreen /> : <RootStackScreen />}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
