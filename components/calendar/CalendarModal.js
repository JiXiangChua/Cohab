import React from 'react';
import { View , Modal , StyleSheet , TouchableOpacity } from 'react-native';

import BasicText from '../BasicText.js';

export default function CalendarModal({ modalVisible , setModalVisible , modalDate }) {

    function closeModal() {
        setModalVisible(!modalVisible);
    }

    var selctedDate;
    if (modalDate) {
        selctedDate = `${modalDate.day}/${modalDate.month}/${modalDate.year}`
    }
    return(
        <Modal
            animationType="slide" 
            transparent = {true} 
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style = {styles.darkBackground}>
                <View style = {styles.popup}>
                    <BasicText>Selected date: {selctedDate}</BasicText>
                    <TouchableOpacity onPress = {closeModal} style = {styles.button}><BasicText>Close</BasicText></TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    darkBackground: {
        backgroundColor: "#000000aa",
        flex: 1
    },
    popup: {
        backgroundColor: "#ffffff",
        margin: 30,
        padding: 30,
        borderRadius: 10
    },
    button: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#0F98C3",
        justifyContent: "center",
        alignItems: "center",
    },
})