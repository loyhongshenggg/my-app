import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import {Keyboard, TouchableOpacity, Text, KeyboardAvoidingView, TouchableWithoutFeedback,ImageBackground, StyleSheet, View, Button, Image, TextInput } from "react-native"
import colors from '../config/colors';
import AppButton from '../components/AppButton' 
import {ERRORS} from '../constants/AuthErrorMessages'

/* firebase */
import { auth } from '../../firebase'
import { signInWithEmailAndPassword} from "firebase/auth";





function WelcomeScreen() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigation = useNavigation();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // navigation.replace("home")//Welcome screen navigate to homescreen
        navigation.replace("editUserProfile")
      }
    })
    return unsubscribe
  },[])


  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userInfo => {
        const user = userInfo.user;
        // console.log(user.email); 
      })
      .catch(error => {
        const errorCode = String(error.code);
        window.alert(ERRORS[errorCode]);
        
      })
  }
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ImageBackground 
          style = {styles.imageContainer}
          blurRadius = {8}
          source = {require('../assets/LoginScreen.png')}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          
          
        <Image 
            source = {require('../assets/Logo.png')}
            style = {{
              alignSelf: 'center',
              height: 400,
              width: 300,
              bottom: 50,
              
            }}
            />


          <View style = {styles.txt}>
            <TextInput
              placeholder = "Email" 
              value = {email}
              onChangeText = {text => setEmail(text)}
              style = {styles.textInput}>
            </TextInput>
          </View>
          <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.textInput}
          secureTextEntry={true}>
          
         </TextInput>
          <View style={styles.btnContainer}>
            <AppButton title="Login" onPress={login} />
            <AppButton title="Register" onPress={() => navigation.replace('register')} />
            <TouchableOpacity style={styles.forget} onPress={() => navigation.replace('forgetPassword')}>
              <Text style={styles.forget}>Forget Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 30,
    bottom: 90,
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    
  },
  btnContainer: {
    marginTop: 12,
    width: 150,
    alignSelf: 'center',
    bottom: 80,
    paddingTop: 10,
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    
  },
  txt: {
    paddingBottom: 60,
  },
  forget: {
    color: colors.white,
    alignSelf: 'center',
    paddingTop: 5,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  }
});