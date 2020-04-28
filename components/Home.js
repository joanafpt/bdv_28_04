import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import StartScreen from './StartScreen';
import GoForwardButtons from '../constants/GoForwardButtons';
import GenericLabels from '../constants/GenericLabels';

 const Home = ( { navigation }) => {

  const [isClickMode, setIsClickMode] = useState(false);

  const cancelSearch = () => {
    setIsClickMode(false); //closes the modal
  };

  return (

    <View style={styles.screen}>
        
      <Header title="Repositório de Vinhos Vegan" />
      <View style={styles.container}>

        <View style={styles.introText}>
          <Text style={GenericLabels.welcomeText}>Bem-vindo!</Text>
        </View>

        <TouchableOpacity
          style={GoForwardButtons.forwardButton}
          onPress={() => setIsClickMode(true)}
        >
          <Text style={GoForwardButtons.buttonLabel}>Vamos a isso!</Text>
        </TouchableOpacity>

        <StartScreen visible={isClickMode}
          onCancel={cancelSearch} />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },



})

 
export default Home;