import React from 'react';
import { StyleSheet, View } from 'react-native';
//import Home from './components/Home';
import Navigator from './routes/HomeStack';

export default function App() {

  return (

    <View style={styles.screen}>          
     
      <Navigator/>
     
    </View>

  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },




})
