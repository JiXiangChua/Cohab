import React , { useState } from "react";
import { StyleSheet , TextInput , Image , TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLoginContext } from "../LoginContext";
import Dialog, {DialogButton,DialogFooter,ScaleAnimation, DialogTitle,DialogContent } from 'react-native-popup-dialog';
import logo from "../assets/logo.png";

import { BasicText } from "../components";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const { setIsSignedIn } = useLoginContext();

  function signup() {
    const registerURL = 'http://10.27.124.66:9999/cohab/register';

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


    if(username==""||email==""||password==""||password2==""){
      setMessage("Please fill in all the required field.");
      setVisible(true);
    }
    else{
      if(password==password2){
        ;(async () => {
          try {
            const response = await fetch(registerURL , init);
            const json = await response.json();
            console.log(json);
            if(json.status=="OK"){
              setIsSignedIn(true);
              navigation.navigate('Home');
            }
            else{
              setMessage(json.status);
              setVisible(true);
            }
          } catch (error) {
            console.log(error);
          }
        })();
      }
      else{
        setMessage("Passwords don't match.");
        setVisible(true);
      }
    }
  }

  function goToLogin() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Dialog
        visible={visible}
        onTouchOutside={() => {
          setVisible(false);
        }}
        dialogAnimation={new ScaleAnimation({
          initialValue: 0, // optional
          useNativeDriver: true, // optional
        })}
      >
        <DialogTitle title="Error Message" />
        <DialogContent>
          <BasicText>{message}</BasicText>
        </DialogContent>
        <DialogFooter>
          <DialogButton text="DISMISS" onPress={() => {setVisible(false);}} />
        </DialogFooter>
      </Dialog>
    </View>
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
        <BasicText style={styles.buttonText}>Sign Up</BasicText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress = {goToLogin}>
        <BasicText style={styles.buttonText}>Back to Login</BasicText>
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
