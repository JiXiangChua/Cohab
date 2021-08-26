import React from 'react';
import { StyleSheet , View } from 'react-native';
import LoginScreen from './components/LoginScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});