import React, { useState } from "react";
import {StyleSheet,Text,TextInput,TouchableOpacity,Image,View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/logo.png";
import Dialog, {DialogTitle,DialogContent,DialogFooter,DialogButton,SlideAnimation,ScaleAnimation,}
 from 'react-native-popup-dialog';
import { useLoginContext } from "../LoginContext";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const { setIsSignedIn } = useLoginContext();
  
  function login() {
    const loginURL = 'http://10.27.124.66:9999/cohab/login';

    const loginPackage = {
      email: email,
      password: password
    };

    const init = {
      method: 'POST',
      headers: { 'Accept': 'application/json' , 'Content-Type': 'application/json' },
      body: JSON.stringify(loginPackage)
    };

    if(email!=""&&password!=""){
      ;(async () => {
        try {
          const response = await fetch(loginURL , init);
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
      setMessage("Please key in the email and password.");
      setVisible(true);
    }

    
  }

  function goToRegister() {
    navigation.navigate('Register');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Dialog
        visible={visible}
        onTouchOutside={() => {
          setVisible(false);
        }}
        dialogTitle={<DialogTitle title="Error Message" />}
        dialogAnimation={new ScaleAnimation({
          initialValue: 0, // optional
          useNativeDriver: true, // optional
        })}
        footer={
          <DialogFooter>
            <DialogButton
              text="DISMISS"
              onPress={() => {setVisible(false);}}
            />
          </DialogFooter>
        }
      >
      <DialogContent>
        <Text>{message}</Text>
      </DialogContent>
      </Dialog>
    </View>
    
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
