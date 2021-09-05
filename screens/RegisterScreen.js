import React from "react";
import { View, Text } from "react-native";
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