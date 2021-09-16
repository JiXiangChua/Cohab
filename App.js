import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStackScreen from "./navigation/RootStackScreen";
import { LoginContextProvider } from "./LoginContext";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <LoginContextProvider>
          <RootStackScreen />
        </LoginContextProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}