import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/logo.png";
import NotificationButton from '../assets/NotificationButton.png';
import backButton from '../assets/back-to-room-button.png';
import { useLoginContext } from "../LoginContext";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsSignedIn } = useLoginContext();
  
  function login() {
    setIsSignedIn(true);
  }

  function goToRegister() {
    navigation.navigate('Register');
  }

  return (
    <SafeAreaView style={styles.container}>
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
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToRegister}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
