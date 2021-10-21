import React , { useState } from 'react';
import { Modal, View , StyleSheet , TextInput , TouchableOpacity , Text } from 'react-native';

export default function AddGroupModal({ addModalVisible , setAddModalVisible }) {

    const [groupName , setGroupName] = useState('');
    const [groupDescription , setGroupDescription] = useState('');

    function closeModal() {
        setAddModalVisible(false);
    }

    function addGroup() {
        const addGroupURL = "http://10.27.124.66:9999/cohab/addGroup";

        const addGroupPackage = {
            userId: 1,
            groupName: groupName,
            description: groupDescription,
        };

        const init = {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addGroupPackage),
        };

        ;(async () => {
            try {
                const response = await fetch(addGroupURL, init);
                const json = await response.json();
                console.log(json);
            } catch (error) {
              console.log(error);
            }
        })();

        closeModal();
    };

    return(
        <Modal
            animationType="slide" 
            transparent = {true} 
            visible={addModalVisible}
            onRequestClose={closeModal}
        >
            <View style = {styles.darkBackground}>
                <View style = {styles.popup}>
                    <TextInput style = {styles.inputField} onChangeText = {(groupName) => {setGroupName(groupName)}} value = {groupName} placeholder = 'Group Name' />
                    <TextInput style = {styles.inputField} onChangeText = {(groupDescription) => {setGroupDescription(groupDescription)}} value = {groupDescription} placeholder = 'Group Description' />
                    <View style = {styles.buttons}>
                        <TouchableOpacity style={[styles.optionButton , styles.green]} onPress={addGroup}>
                            <Text style={[styles.optionButtonText , styles.whiteText ]}>Add Group</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={closeModal}>
                            <Text style={styles.optionButtonText}>Close</Text>
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
    inputField: {
        borderBottomWidth: 0.5,
        width: "100%",
        marginBottom: 15,
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
    },
})