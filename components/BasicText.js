import React from 'react';
import { Text , StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function BasicText({ children , style }) {
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
    });
    
    if (!loaded) {
        return null;
    };

    return(
        <Text style = {styles.basicText}>
            <Text style = {style}>
                {children}
            </Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    basicText: {
        fontFamily: 'Montserrat',
    }
});