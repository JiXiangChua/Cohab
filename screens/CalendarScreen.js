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
  const [event, setEvent] = useState([
    {
      eventName: "Award Ceremony",
      eventDate: "MON, 20SEP",
      eventTime: "2.30pm to 4.30pm",
      eventLocation: "NTU",
      important: true,
    },
    {
      eventName: "Party",
      eventDate: "FRI, 16 SEP",
      eventTime: "5pm",
      eventLocation: "Adam's house",
      important: false,
    },
    {
      eventName: "Hiking trail @ hillview",
      eventDate: "SAT, 10 SEP",
      eventTime: "9am",
      eventLocation: "NTU",
      important: false,
    },
  ]);

  const [modalVisible , setModalVisible] = useState(false);
  const [modalDate , setModalDate] = useState();

  function openModalWithDate(date) {
    setModalDate(date);
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <MenuBar navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: "90%" }}>
        <BasicText style={styles.calendarText}>Calendar</BasicText>
        <View style={{ width: "100%", marginVertical: 10 }}>
          <MyCalendar openModalWithDate = {openModalWithDate} />
        </View>
        <View style={styles.eventContainer}>
          <BasicText style={styles.headerText}>Upcoming Events</BasicText>
          {event.map((eventItem, index) => {
            return (
              <EventCard
                key={index}
                eventName={eventItem.eventName}
                eventDate={eventItem.eventDate}
                eventTime={eventItem.eventTime}
                eventLocation={eventItem.eventLocation}
                importantStatus={eventItem.important}
              />
            );
          })}
        </View>
        
        <CalendarModal modalVisible = {modalVisible} setModalVisible = {setModalVisible} modalDate = {modalDate} />
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
  eventContainer: {
    width: "100%",
    height: 400,
    marginTop: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    color: "#826335",
    fontWeight: "bold",
  },
});
