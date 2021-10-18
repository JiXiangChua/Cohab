import React from 'react';
import { Text , StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function BasicText({ children , style }) {
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
        MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
        MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    });
    
    if (!loaded) {
        return null;
    };

    return(
        <Text style = {[styles.basicText , style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    basicText: {
        fontFamily: 'Montserrat',
    }
});