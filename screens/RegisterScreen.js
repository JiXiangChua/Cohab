import React , { useState } from "react";
import { StyleSheet , Text , TextInput , Image , TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/logo.png";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function signup() {
    const registerURL = 'http://localhost:9999/cohab/register';

    const registerPackage = {
      email: email,
      password: password,
      username: username,
    };

    const init = {
      method: 'POST',
      headers: { 'Accept': 'application/json' , 'Content-Type': 'application/json' },
      body: JSON.stringify(registerPackage)
    };

    ;(async () => {
      try {
        const response = await fetch(registerURL , init);
        const json = response.json();
        console.log(json);
        goToLogin();
      } catch (error) {
        console.log(error);
      }
    })();
  }

  function goToLogin() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        style={styles.inputField}
        placeholder="Username"
        onChangeText={(username) => setUsername(username)}
        defaultValue={username}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        defaultValue={email}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        defaultValue={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Confirm Password"
        onChangeText={(password2) => setPassword2(password2)}
        defaultValue={password2}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress = {signup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress = {goToLogin}>
        <Text style={styles.buttonText}>Back to Login</Text>
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
