import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasicText } from "../components";

export default function SplashScreen({ navigation }) {
  //So this is the auto switch screen
  setTimeout(() => {
    navigation.navigate("Login");
  }, 3000);
  return (
    <SafeAreaView>
      <Text>Hello world!</Text>
      {/* But later we just put like 3 seconds auto navigate to GroupSelectScreen */}
      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
        title="Click to go to Group Select Screen"
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
