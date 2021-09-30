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
  //holds an array of objects
  const [events, setEvents] = useState([
    {
      eventName: "Party",
      date: new Date(41241241),
      eventLocation: "house",
      important: true,
    },
  ]);

  function addEvent(event) {
    setEvents([...events , event]);
  }

  //modal
  const [modalVisible , setModalVisible] = useState(false);
  const [modalDate , setModalDate] = useState();

  function openModalWithDate(date) {
    setModalDate(date);
    setModalVisible(true);
  }

  //eventsList
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
          <MyCalendar openModalWithDate = {openModalWithDate} />
        </View>
        <BasicText style={styles.headerText}>Upcoming Events</BasicText>
        {eventsList}
        
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
    marginBottom: 10,
    alignSelf: "center",
  },
  headerText: {
    fontSize: 18,
    color: "#826335",
    fontWeight: "bold",
  },
});
