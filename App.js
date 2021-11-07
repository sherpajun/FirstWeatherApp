import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello i create this app</Text>
      
      <Text style={styles.text}>what is u r first App</Text>
      
      <Text style={styles.text}>what should pratice{"\n"} coding or get a job</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
    color: 'red',
  }
});
