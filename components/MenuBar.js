import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity , Image } from "react-native";
import backButton from '../assets/back-to-room-button.png';
import NotificationButton from "../assets/NotificationButton.png";

export default function MenuBar({ navigation }) {
    return(
        <View style={styles.menuBar}>
            <TouchableOpacity
                style={{ alignSelf: "flex-start", flexDirection: "row", right: 15 }}
                onPress={navigation.goBack}
            >
                <Image source={backButton} style = {styles.walletButtonLogo}></Image>
                <Text style={styles.backToRoomButtonStyle}>Home</Text>
            </TouchableOpacity >
            <TouchableOpacity style={{ alignSelf: "flex-end" }}>
                <Image source={NotificationButton} style = {styles.walletButtonLogo}></Image>
            </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    walletButtonLogo: {
        minHeight: 40,
        minWidth: 40,
        resizeMode: "center",
      },
    menuBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    backToRoomButtonStyle: {
        color: "#E16363",
        fontSize: 20,
        alignSelf: "center",
        right: 10,
    },
});