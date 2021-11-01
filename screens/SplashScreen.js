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
import { Video, AVPlaybackStatus } from "expo-av";
import LaunchScreen from "../assets/LaunchScreen3.mp4";
import { BasicText } from "../components";

export default function SplashScreen({ navigation }) {
  //So this is the auto switch screen
  setTimeout(() => {
    navigation.navigate("Login");
  }, 3000);
  const video = React.useRef(null);
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={LaunchScreen}
        useNativeControls={false}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
