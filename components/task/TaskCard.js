import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";

import DropDownPicker from "react-native-dropdown-picker";

import ProfilePic from "../../assets/Finance-assets/Kimberly.png";

export default function TaskCard(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.taskCardContainer}>
      <Text >Do the dishes</Text>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Would you like to edit the tast 'Mop the floor'?</Text>
            
            <View style={{ flexDirection: "row" }}>
            {/* day */}
            <DropDownPicker 
                 items={[
                    {label: 'Item 1', value: '1'},
                    {label: 'Item 2', value: '2'},
                    {label: 'Item 3', value: '3'},
                 ]}
                defaultNull
                placeholder= "day"
                containerStyle={{width: 80, height: 20}}
                onChangeItem={item => console.log(item.label, item.value)}
              />
              {/* month */}
            <DropDownPicker 
                 items={[
                    {label: 'Item 1', value: '1'},
                    {label: 'Item 2', value: '2'},
                 ]}
                 defaultNull
                 placeholder= "month"
                containerStyle={{width: 100, height: 20}}
                onChangeItem={item => console.log(item.label, item.value)}/>
              {/* year*/}
            <DropDownPicker
                 items={[
                    {label: 'Item 1', value: '1'},
                    {label: 'Item 2', value: '2'},
                 ]}
                 defaultNull
                 placeholder= "year"
                containerStyle={{width: 100, height: 20}}
                onChangeItem={item => console.log(item.label, item.value)}/>
                
            </View>
            <View style={{ flexDirection: "row", marginTop: 50, justifyContent: 'space-around'}}>
            {/* CANCEL BUTTON */}
            <Pressable
              style={[styles.buttonCancel]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            {/* SAVE BUTTON */}
            <Pressable
              style={[styles.buttonSave]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle1}>Save</Text>
            </Pressable>
            
           </View> 
           <View style={{ flexDirection: "row", marginTop: 20 }}>
             {/* UNLOAD BUTTON */}
            <Pressable
              style={[styles.buttonUnload]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle2}>Unload</Text>
            </Pressable>
           </View>
           </View>
        </View>


      </Modal>
    </View>
      <Text onPress={() => setModalVisible(true)}>Set own deadline</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskCardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
    borderWidth: 0.1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  
  buttonCancel: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#7B98FF',
    borderRadius: 10,
    padding: 8,
    
  },
  buttonSave: {
    backgroundColor: '#36BC7C',
    borderRadius: 10,
    padding: 8,
  },
  buttonUnload: {
    backgroundColor: '#FF1A1A',
    borderRadius: 10,
    padding: 8,
  },
  textStyle: {
    color: "#7B98FF",
    fontWeight: "bold",
    textAlign: "center"
  },
  textStyle1: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center"
  },
  textStyle2: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 40,
    textAlign: "center",
    fontSize: 18
  }
});
