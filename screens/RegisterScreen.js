import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLoginContext } from "../LoginContext";
import logo from "../assets/Cohab_Logo.png";
import LoginScreenBG from "../assets/LoginScreenBG.png";
import { BasicText } from "../components";
import ModalScreen from "../components/ModalScreen";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const { setIsSignedIn } = useLoginContext();

  function signup() {
    const registerURL = "http://10.27.124.66:9999/cohab/register";

    const registerPackage = {
      email: email,
      password: password,
      username: username,
    };

    const init = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerPackage),
    };

    if (username == "" || email == "" || password == "" || password2 == "") {
      setMessage("Please fill in all the required field.");
      setVisible(true);
    } else {
      if (password == password2) {
        (async () => {
          try {
            const response = await fetch(registerURL, init);
            const json = await response.json();
            console.log(json);
            if (json.status == "OK") {
              setIsSignedIn(true);
              navigation.navigate("Home");
            } else {
              setMessage(json.status);
              setVisible(true);
            }
          } catch (error) {
            console.log(error);
          }
        })();
      } else {
        setMessage("Passwords don't match.");
        setVisible(true);
      }
    }
  }

  function goToLogin() {
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ position: "absolute" }}>
        <Image
          source={LoginScreenBG}
          style={{ width: 450, height: 950 }}
        ></Image>
      </View>
      <ModalScreen
        isVisible={visible}
        setVisible={setVisible}
        message={message}
        buttonText="DISMISS"
      />
      <Image source={logo} style={styles.logo} />
      <BasicText style={styles.cohabText}>COHAB</BasicText>
      <TextInput
        style={styles.inputField}
        placeholder="Username"
        placeholderTextColor="#FFF"
        onChangeText={(username) => setUsername(username)}
        defaultValue={username}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        placeholderTextColor="#FFF"
        onChangeText={(email) => setEmail(email)}
        defaultValue={email}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        placeholderTextColor="#FFF"
        onChangeText={(password) => setPassword(password)}
        defaultValue={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Confirm Password"
        placeholderTextColor="#FFF"
        onChangeText={(password2) => setPassword2(password2)}
        defaultValue={password2}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={signup}>
        <BasicText style={styles.buttonText}>Sign Up</BasicText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToLogin}>
        <BasicText style={styles.buttonText}>Back to Login</BasicText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: -50,
    width: 150,
    height: 150,
    resizeMode: "center",
  },
  cohabText: {
    fontSize: 35,
    fontFamily: "MontserratSemiBold",
    color: "#FFD692",
    marginBottom: 10,
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
    borderColor: "#FFD692",
    color: "#FFF",
  },
  button: {
    marginTop: 30,
    height: 40,
    width: "75%",
    backgroundColor: "#F7DBF0",
    justifyContent: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "#6E2142",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
  },
});
