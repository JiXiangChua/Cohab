import React , { useState , useEffect } from "react";

import { Calendar } from "react-native-calendars";

export default function MyCalendar({ openModalWithDate , events , selectedDate , setSelectedDate }) {
  
  const [markedDates , setMarkedDates] = useState({});
  
  function handleDayPress(date) {
    const newDate = new Date(date.timestamp);
    if (newDate.getTime() === selectedDate.getTime()) {
      openModalWithDate(date);
    }
    else {
      setSelectedDate(newDate);
    }
  }

  function formatDate(date) {
    var todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    return todayUTC.toISOString().slice(0, 10);
  }

  useEffect(() => {
    for (let i in events) {
      let date = formatDate(events[i]['date']);
      let newMarkedDates = {...markedDates};
      newMarkedDates[date] = {
        ...newMarkedDates[date],
        marked: true,
      }
      setMarkedDates(newMarkedDates);
    }
  },[events]);

  useEffect(() => {
    let newMarkedDates = {...markedDates};
    for (let date in newMarkedDates) {
      if (newMarkedDates[date]['marked']) {
        newMarkedDates[date] = {
          'marked': true,
        }
      } else {
        delete newMarkedDates[date];
      }
    }
    newMarkedDates[formatDate(selectedDate)] = {
      ...newMarkedDates[formatDate(selectedDate)],
      selected: true,
    }
    setMarkedDates(newMarkedDates);
  },[formatDate(selectedDate)])

  return (
    <Calendar
      markedDates={markedDates}
      // Specify style for calendar container element. Default = {}
      style={{
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
      }}
      // Specify theme properties to override specific styles for calendar parts. Default = {}
      theme={{
        backgroundColor: "#ffffff",
        calendarBackground: "#ffffff",
        textSectionTitleColor: "#b6c1cd",
        textSectionTitleDisabledColor: "#d9e1e8",
        selectedDayBackgroundColor: "#00adf5",
        selectedDayTextColor: "lightblue",
        todayTextColor: "#00adf5",
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e1e8",
        dotColor: "#00adf5",
        selectedDotColor: "#ffffff",
        arrowColor: "orange",
        disabledArrowColor: "#d9e1e8",
        monthTextColor: "blue",
        indicatorColor: "blue",
        textDayFontWeight: "300",
        textMonthFontWeight: "bold",
        textDayHeaderFontWeight: "300",
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
      }}
      onDayPress = {handleDayPress}
    ></Calendar>
  );
}
