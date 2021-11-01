import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/logo.png";

import { useLoginContext } from "../LoginContext";
import { BasicText } from "../components";
import ModalScreen from "../components/ModalScreen";
import * as ConstantHelper from "../ConstantHelper.js";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const { setIsSignedIn } = useLoginContext();

  function login() {
    const loginURL = ConstantHelper.CONNECTION + "login";

    const loginPackage = {
      email: email,
      password: password,
    };

    const init = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginPackage),
    };

    if (email != "" && password != "") {
      (async () => {
        try {
          const response = await fetch(loginURL, init);
          const json = await response.json();
          console.log(json);
          if (json.status == "OK") {
            setIsSignedIn(true);
          } else {
            setMessage(json.status);
            setVisible(true);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setMessage("Please enter your email and password.");
      setVisible(true);
    }
  }

  function cheatLogin() {
    setIsSignedIn(true);
  }

  function goToRegister() {
    navigation.navigate("Register");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ModalScreen
        isVisible={visible}
        setVisible={setVisible}
        message={message}
        buttonText="Try Again"
      />
      <Image source={logo} style={styles.logo} />
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
      <TouchableOpacity style={styles.button} onPress={cheatLogin}>
        <BasicText style={styles.buttonText}>Cheater Log In</BasicText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={login}>
        <BasicText style={styles.buttonText}>Log In</BasicText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToRegister}>
        <BasicText style={styles.buttonText}>Sign Up</BasicText>
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
  modalStyle: {
    height: 200,
    width: "90%",
    backgroundColor: "#FFFAF2",
    alignSelf: "center",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
  },
  modalButton: {
    width: 97,
    height: 32,
    borderRadius: 10,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
