import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

export default function CustomDrawerContent({ navigation }) {
  return (
    <DrawerContentScrollView>
      <DrawerItem label="Home" onPress={() => navigation.navigate('Home')} labelStyle = {styles.drawerLabel} />
      <DrawerItem label="Calendar" onPress={() => navigation.navigate('Calendar')} labelStyle = {styles.drawerLabel} />
      <DrawerItem label="Chore" onPress={() => navigation.navigate('Chore')} labelStyle = {styles.drawerLabel} />
      <DrawerItem label="Finance" onPress={() => navigation.navigate('Finance')} labelStyle = {styles.drawerLabel} />
      <DrawerItem label="Task" onPress={() => navigation.navigate('Task')} labelStyle = {styles.drawerLabel} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerLabel: {
    fontFamily: "Montserrat",
    color: "#FFD897",
  },
});
