import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import colors from '../config/colors';
import {useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <Text style = {styles.text} >Hello there!</Text> 
          
        </View>  
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  text: {
    padding: 30,
    paddingTop: 100,
    fontSize: 40,
    fontFamily: "Roboto",
    fontWeight: 'bold',
    color: colors.primary,
  }
})

export default HomeScreen