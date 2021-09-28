import React , { useState } from 'react';
import { View , Modal , StyleSheet , TouchableOpacity, TextInput } from 'react-native';

import BasicText from '../BasicText.js';

export default function CalendarModal({ modalVisible , setModalVisible , modalDate }) {

    function closeModal() {
        setModalVisible(!modalVisible);
    }

    var selectedDate;
    if (modalDate) {
        selectedDate = `${modalDate.day}/${modalDate.month}/${modalDate.year}`
    }

    const [eventName , setEventName] = useState('');
    const [eventDate , setEventDate] = useState('');
    const [eventTime , setEventTime] = useState('');
    const [eventLocation , setEventLocation] = useState('');
    const [important , setImportant] = useState(false);

    return(
        <Modal
            animationType="slide" 
            transparent = {true} 
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style = {styles.darkBackground}>
                <View style = {styles.popup}>
                    <BasicText>Selected date: {selectedDate}</BasicText>
                    <BasicText>New Event</BasicText>
                    <TextInput style = {styles.inputField} placeholder = 'Event Name' onChangeText = {(eventName) => {setEventName(eventName)}} value = {eventName} />
                    <TextInput style = {styles.inputField} placeholder = 'Event Location' onChangeText = {(eventLocation) => {setEventLocation(eventLocation)}} value = {eventLocation} />
                    <TouchableOpacity onPress = {closeModal} style = {styles.button}><BasicText>Close</BasicText></TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    darkBackground: {
        backgroundColor: "#000000aa",
        flex: 1,
        alignItems: "center",
    },
    popup: {
        backgroundColor: "#ffffff",
        width: '90%',
        borderRadius: 10,
        marginTop: 30,
        padding: 10,
        alignItems: "center",
    },
    button: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#0F98C3",
        justifyContent: "center",
        alignItems: "center",
    },
    inputField: {
        marginTop: 15,
        height: 40,
        width: "75%",
        borderBottomWidth: 1,
        borderColor: "#000000",
    },
})