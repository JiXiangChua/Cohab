import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TaskScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello to Task Screen</Text>
      </View>
    </SafeAreaView>
  );
}
