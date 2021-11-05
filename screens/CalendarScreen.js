import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MenuBar , MyCalendar , EventCard , BasicText , CalendarModal } from "../components";

export default function CalendarScreen({ navigation }) {

  const [events, setEvents] = useState([ //holds an array of objects
    {
      eventName: 'Party',
      eventLocation: 'My House',
      date: new Date('11/11/2021'),
      important: true,
    }
  ]);
  const [modalVisible , setModalVisible] = useState(false);
  const [modalDate , setModalDate] = useState();
  const [selectedDate , setSelectedDate] = useState(new Date(Date.now()));

  function addEvent(event) {
    setEvents([...events , event]);
  }

  function openModalWithDate(date) {
    setModalDate(date);
    setModalVisible(true);
  }

  function isSameDay(date1 , date2) {
    if (date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate()) {
      return true;
    } else {
      return false;
    }
  }
  
  const selectedDayEventsList = events.map((event , index) => {
    if (isSameDay(selectedDate , event.date)) {
      return(
        <EventCard
          key = {index}
          eventName = {event.eventName}
          date = {event.date}
          eventLocation = {event.eventLocation}
          importantStatus = {event.important}
        />
      );
    }
  })
  
  const eventsList = events.map((event , index) => {
    return(
      <EventCard
        key = {index}
        eventName = {event.eventName}
        date = {event.date}
        eventLocation = {event.eventLocation}
        importantStatus = {event.important}
      />
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <MenuBar navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: "90%" }}>
        <BasicText style={styles.calendarText}>Calendar</BasicText>
        <View style={{ width: "100%", marginVertical: 10 }}>
          <MyCalendar openModalWithDate = {openModalWithDate} events = {events} selectedDate = {selectedDate} setSelectedDate = {setSelectedDate} />
        </View>
        <BasicText style={styles.headerText}>{selectedDate.toDateString()}</BasicText>
        {selectedDayEventsList}
        <CalendarModal modalVisible = {modalVisible} setModalVisible = {setModalVisible} modalDate = {modalDate} addEvent = {addEvent} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD897",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  menuBarStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    position: "absolute",
    top: 40,
  },
  backToRoomButtonStyle: {
    color: "#E16363",
    fontSize: 20,
    alignSelf: "center",
    right: 10,
  },
  calendarText: {
    color: "#E16363",
    fontSize: 20,
    fontFamily: "MontserratBold",
    marginBottom: 10,
    alignSelf: "center",
  },
  headerText: {
    fontSize: 18,
    color: "#826335",
    fontWeight: "bold",
  },
});
