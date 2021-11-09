
import React from 'react';
import {View } from 'react-native';

export default function App() {
  return (
    <View style={{flexDirection:"row",flex:"1"}}>/*부모가 가장중요하다*/
      <View style={{flex:"1",backgroundColor:"teal"}}></View>
    </View>
  );
}

