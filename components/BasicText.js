import React from 'react';
import { Text , StyleSheet } from 'react-native';

export default function BasicText({ children }) {
    return(
        <Text>{children}</Text>
    )
}

const styles = StyleSheet.create({
    basicText: {
        fontFamily: 'Inter-Black',
    }
})