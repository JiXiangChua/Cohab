import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import logo from "../assets/logo.png";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    navigation.replace("Home");
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        style={styles.inputField}
        placeholder="Username/Email"
        onChangeText={(username) => setUsername(username)}
        defaultValue={username}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        defaultValue={password}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    minHeight: 100,
    minWidth: 150,
    marginBottom: 100,
    resizeMode: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFD692",
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    marginTop: 15,
    height: 40,
    width: "75%",
    borderBottomWidth: 1,
    borderColor: "#6E2142",
  },
  button: {
    marginTop: 30,
    height: 40,
    width: "75%",
    backgroundColor: "#E16363",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFD692",
    textAlign: "center",
    fontSize: 18,
  },
});
