import React from 'react';
import { View , StyleSheet , TouchableOpacity , Image } from "react-native";
import backButton from '../assets/back-to-room-button.png';
import NotificationButton from "../assets/NotificationButton.png";

import BasicText from "./BasicText.js";

export default function MenuBar({ navigation }) {
    return(
        <View style={styles.menuBar}>
            <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
                <Image source={backButton} style = {styles.backButtonLogo} />
                <BasicText style={styles.backButtonText}>Home</BasicText>
            </TouchableOpacity >
            <TouchableOpacity style={styles.notificationButton}>
                <Image source={NotificationButton} style = {styles.notificationButtonLogo} />
            </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    menuBar: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    backButton: {
        alignSelf: "flex-start",
        flexDirection: "row",
        right: 15,
    },
    backButtonLogo: {
        minHeight: 40,
        minWidth: 40,
        resizeMode: "center",
    },
    backButtonText: {
        color: "#E16363",
        fontSize: 20,
        alignSelf: "center",
        right: 10,
    },
    notificationButton: {
        alignSelf: 'flex-end',
    },
    notificationButtonLogo: {
        minHeight: 40,
        minWidth: 40,
        resizeMode: "center",
    },
});