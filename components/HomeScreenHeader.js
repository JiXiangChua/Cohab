import React from "react";
import { View , StyleSheet , TouchableOpacity } from "react-native";

import { BasicText } from ".";

export default function HomeScreenHeader({ navigation }) {
    return(
        <View style={styles.menuBar}>
            <TouchableOpacity style={styles.navigationButton} onPress = {navigation.openDrawer}>
                <BasicText style={styles.navigationButtonText}>navigation</BasicText>
            </TouchableOpacity >
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
    navigationButton: {
        alignSelf: "flex-start",
        flexDirection: "row",
        borderWidth:1,
    },
    navigationButtonText: {
        color: "#E16363",
        fontSize: 20,
        alignSelf: "center",
    },
});