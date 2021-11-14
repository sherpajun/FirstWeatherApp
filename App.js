
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,StyleSheet,Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>서울</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>30</Text>
          <Text style={styles.description}>판단기준</Text>
        </View>
      </View>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#F5DEB3",
  },
  city:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  cityName:{
    color:"#0099a4",
    fontSize:68,
    fontWeight:"500",

  },
  weather:{
    flex:3,
    backgroundColor:"#E9967A",
  },

  day:{
    flex:1,
    backgroundColor:"#4682B4",
    alignItems:"center",
  },
  temp:{
    fontSize:178,
    marginTop:50,
    color:"#FFFFFF",
    

  },
  description:{
    fontSize:60,
    marginTop:-30,
    color:"#FFFFFF",
  }


})

