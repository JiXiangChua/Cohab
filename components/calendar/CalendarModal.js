import React , { useState , useEffect } from 'react';
import { View , Modal , StyleSheet , TouchableOpacity, TextInput , Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import BasicText from '../BasicText.js';

export default function CalendarModal({ modalVisible , setModalVisible , modalDate = Date.now , addEvent }) {

    function closeModal() {
        setModalVisible(!modalVisible);
        setEventName('');
        setEventLocation('');
    }

    var selectedDate;
    if (modalDate) {
        selectedDate = `${modalDate.day}/${modalDate.month}/${modalDate.year}`
    }

    useEffect(() => {
        setDate(new Date(modalDate.timestamp ?? Date.now()));
    },[modalDate]);

    const [eventName , setEventName] = useState('');
    const [eventLocation , setEventLocation] = useState('');
    const [important , setImportant] = useState(false);

    const [date, setDate] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    function onChange(event , date) {
        setShow(Platform.OS === 'ios');
        if (date) {
            setDate(date);
        }
    }

    function showDatePicker() {
        setMode('date');
        setShow(true);
    }
    
    function showTimePicker() {
        setMode('time');
        setShow(true);
    }

    function saveEvent() {
        const event = {
            eventName: eventName,
            eventLocation: eventLocation,
            date: date,
            important:false,
        }
        addEvent(event);
        closeModal();
    }

    const visibleDateTimePicker = show && (
        <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
        />
    );

    return(
        <Modal
            animationType="slide" 
            transparent = {true} 
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style = {styles.darkBackground}>
                <View style = {styles.popup}>
                    <View style = {styles.center}><BasicText>New Event</BasicText></View>
                    <BasicText style = {styles.fieldTitle}>Name:</BasicText>
                    <TextInput style = {styles.inputField} onChangeText = {(eventName) => {setEventName(eventName)}} value = {eventName} />
                    <BasicText style = {styles.fieldTitle}>Location:</BasicText>
                    <TextInput style = {styles.inputField} onChangeText = {(eventLocation) => {setEventLocation(eventLocation)}} value = {eventLocation} />
                    <BasicText style = {styles.fieldTitle}>Date:</BasicText>
                    <Text onPress = {showDatePicker} style = {styles.inputField}>{date.toDateString()}</Text>
                    <BasicText style = {styles.fieldTitle}>Time:</BasicText>
                    <Text onPress = {showTimePicker} style = {styles.inputField}>{date.toTimeString()}</Text>
                    {visibleDateTimePicker}
                    <View style = {styles.buttons}>
                        <TouchableOpacity onPress = {saveEvent} style = {styles.button}><BasicText>Save</BasicText></TouchableOpacity>
                        <TouchableOpacity onPress = {closeModal} style = {styles.button}><BasicText>Close</BasicText></TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    center: {
        alignItems: "center",

    },
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
    },
    button: {
        width: '49%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#0F98C3",
        justifyContent: "center",
        alignItems: "center",
    },
    inputField: {
        height: 20,
        width: "100%",
        borderBottomWidth: 1,
        borderColor: "#000000",
        marginBottom: 10,
    },
    fieldTitle: {
        color: 'grey',
        fontSize: 12,
    },
    buttons: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent : 'space-between',
    },
})