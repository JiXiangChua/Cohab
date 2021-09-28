import React , { useState , useEffect } from 'react';
import { View , Modal , StyleSheet , TouchableOpacity, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import BasicText from '../BasicText.js';

export default function CalendarModal({ modalVisible , setModalVisible , modalDate = Date.now }) {

    function closeModal() {
        setModalVisible(!modalVisible);
    }

    var selectedDate;
    if (modalDate) {
        selectedDate = `${modalDate.day}/${modalDate.month}/${modalDate.year}`
    }

    useEffect(() => {
        setDate(new Date(modalDate.timestamp ?? Date.now()));
    },[modalDate]);

    const [eventName , setEventName] = useState('');
    const [eventDate , setEventDate] = useState('');
    const [eventTime , setEventTime] = useState('');
    const [eventLocation , setEventLocation] = useState('');
    const [important , setImportant] = useState(false);

    const [date, setDate] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    function onChange(event , date) {
        setShow(Platform.OS === 'ios');
    }

    function showDatePicker() {
        setMode('date');
        setShow(true);
    }
    
    function showTimePicker() {
        setMode('time');
        setShow(true);
    }

    const visibleDateTimePicker = show && (
        <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
        />
    )

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
                    <TouchableOpacity onPress = {showDatePicker} style = {styles.button}><BasicText>Select Date</BasicText></TouchableOpacity>
                    <TouchableOpacity onPress = {showTimePicker} style = {styles.button}><BasicText>Select Time</BasicText></TouchableOpacity>
                    <TextInput style = {styles.inputField} placeholder = 'Event Location' onChangeText = {(eventLocation) => {setEventLocation(eventLocation)}} value = {eventLocation} />
                    {visibleDateTimePicker}
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