import React from "react";

import { Calendar , CalendarList , Agenda } from "react-native-calendars";

export default function MyCalendar({ openModalWithDate }) {
  function handleDayPress(date) {
    openModalWithDate(date)
  }
  return (
    <Calendar
      markedDates={{
        "2021-06-30": {
          selected: true,
          marked: true,
          selectedColor: "red",
        },
      }}
      // Specify style for calendar container element. Default = {}
      style={{
        borderWidth: 1,
        borderColor: "gray",
        height: 350,
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
      onDayPress={handleDayPress}
    ></Calendar>
  );
}
