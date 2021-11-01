import React , { useState , useEffect } from 'react';
import { View , Modal , StyleSheet , TouchableOpacity, TextInput , Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import BasicText from '../BasicText.js';
import GeneralButton from '../GeneralButton.js';

export default function CalendarModal({ modalVisible , setModalVisible , modalDate = Date.now , addEvent }) {

    function closeModal() {
        setModalVisible(!modalVisible);
        setEventName('');
        setEventLocation('');
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
                    <TextInput style = {styles.inputField} onChangeText = {(eventName) => {setEventName(eventName)}} value = {eventName} placeholder = 'Event Name' />
                    <TextInput style = {styles.inputField} onChangeText = {(eventLocation) => {setEventLocation(eventLocation)}} value = {eventLocation} placeholder = 'Event Location' />
                    <TouchableOpacity
                        style={styles.optionButton}
                        onPress={showDatePicker}
                    >
                        <BasicText style={styles.optionButtonText}>{date.toDateString()}</BasicText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.optionButton}
                        onPress={showTimePicker}
                    >
                        <BasicText style={styles.optionButtonText}>{date.toLocaleTimeString()}</BasicText>
                    </TouchableOpacity>
                    {visibleDateTimePicker}
                    <View style = {styles.buttons}>
                        <TouchableOpacity
                            style={[styles.optionButton , styles.green ]}
                            onPress={saveEvent}
                        >
                            <BasicText style={[ styles.optionButtonText , styles.whiteText ]}>Save</BasicText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionButton}
                            onPress={closeModal}
                        >
                            <BasicText style={styles.optionButtonText}>Close</BasicText>
                        </TouchableOpacity>
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
        justifyContent: 'center',
    },
    popup: {
        backgroundColor: "#ffffff",
        width: '90%',
        borderRadius: 10,
        marginTop: 30,
        padding: 30,
        justifyContent: 'center',
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
        borderBottomWidth: 0.5,
        width: "100%",
        marginBottom: 15,
    },
    fieldTitle: {
        color: 'grey',
        fontSize: 12,
    },
    buttons: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent : 'space-around',
    },
    optionButton: {
        borderRadius: 20,
        minWidth: 100,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#2196F3",
        backgroundColor: "white",
        padding: 10,
        elevation: 2,
        marginBottom: 15,
    },
    optionButtonText: {
        color: "#2196F3",
        fontWeight: "bold",
        textAlign: "center",
    },
    green: {
        backgroundColor: "#36BC7C",
    },
    whiteText: {
        color: "white",
    }
})