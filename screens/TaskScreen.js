import React from "react";
import { View , Text , StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TaskScreen({ navigation }) {
  return (
    <SafeAreaView style = {styles.backgroundContainer}>
      <View>
        <Text>Hello to Task Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#FFD692",
    alignItems: "center",
    justifyContent: "center",
  },
});
