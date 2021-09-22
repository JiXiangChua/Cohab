import React, { useState } from "react";
import {View , StyleSheet , TouchableOpacity , Image , ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//components
import { MenuBar , ChoreCard , BasicText } from "../components";
//assets
import NewChoresButton from "../assets/Chores-assets/Caddbutton.png";

export default function ChoreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <MenuBar navigation = {navigation} />
      {/*stuff*/}
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}>
        <BasicText style={styles.choreText}> Chores </BasicText>
        <View style={styles.choreContainer}>
          <BasicText style={styles.chorenewText}>New Chore</BasicText>
          <TouchableOpacity style={{ position: "absolute", right: 30}}>
            <Image source={NewChoresButton}></Image>
          </TouchableOpacity>
        </View>
        {/* Roommate Bill Container */}
      <View
        style={{
          width: "95%",
          paddingVertical: 5,
          alignItems: "center",
        }}>
        <ChoreCard
          duedate="14/7"
          dutyname="Wash the dishes"
          description="It's your turn!"
          choretype="Weekly"
          status="True"
        ></ChoreCard>
      </View>
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
  scrollView: {
    flex: 1,
    flexDirection: "column",
  },
  choreText: {
    flexWrap: "wrap",
    //fontFamily: "Montserrat-Regular",
    color: "#E16363",
    fontSize: 20,
    marginVertical: 10,
  },
  choreContainer: {
    width: "95%",
    height: 30,
    flexDirection: "row",
  },
  chorenewText: {
    //fontFamily: "Montserrat-Regular",
    position: "absolute", 
    right: 60,
    flexWrap: "wrap",
    color: "#826335",
    fontSize: 18,
  },
});
