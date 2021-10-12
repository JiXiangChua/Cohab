import React from "react";
import { View , Text , StyleSheet , Image , TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import profileImage from '../assets/Calendar-assets/ProfileImage2.png';

export default function CustomDrawerContent({ navigation }) {

  function handleEditProfile() {
    console.log('edit profile');
  }

  function handleLogout() {
    console.log('logout');
  }

  return (
    <DrawerContentScrollView contentContainerStyle = {styles.container}>
      <View style = {styles.topContainer}>
        <DrawerItem label="Home" onPress={() => navigation.navigate('Home')} labelStyle = {styles.drawerLabel} />
        <DrawerItem label="Calendar" onPress={() => navigation.navigate('Calendar')} labelStyle = {styles.drawerLabel} />
        <DrawerItem label="Chore" onPress={() => navigation.navigate('Chore')} labelStyle = {styles.drawerLabel} />
        <DrawerItem label="Finance" onPress={() => navigation.navigate('Finance')} labelStyle = {styles.drawerLabel} />
        <DrawerItem label="Task" onPress={() => navigation.navigate('Task')} labelStyle = {styles.drawerLabel} />
      </View>
      <View style = {styles.bottomContainer}>
        <View style = {styles.alignRight}><Image source = {profileImage} style = {styles.profileImage} /></View>
        <TouchableOpacity onPress = {handleEditProfile}><Text style = {styles.alignRight}>Edit Profile</Text></TouchableOpacity>
        <TouchableOpacity onPress = {handleLogout}><Text style = {styles.alignRight}>Logout</Text></TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 4,
  },
  bottomContainer: {
    flex: 1,
  },
  drawerLabel: {
    fontFamily: "Montserrat",
    color: "#FFD897",
  },
  alignRight: {
    width: '90%',
    fontFamily: "Montserrat",
    textAlign: 'right',
    color: "#FFD897",
    flexDirection: 'row-reverse',
    marginTop: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
  }
});
