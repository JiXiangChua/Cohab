import React from 'react';
import { Modal, View , StyleSheet } from 'react-native';

export default function JoinGroupModal({ joinModalVisible , setJoinModalVisible }) {

    function closeModal() {
        setJoinModalVisible(false);
    }

    return(
        <Modal
            animationType="slide" 
            transparent = {true} 
            visible={joinModalVisible}
            onRequestClose={closeModal}
        >
            <View style = {styles.darkBackground}>
                <View style = {styles.popup}>
                    
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
})