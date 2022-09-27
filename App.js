import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import ForgetPassswordScreen from './app/screens/ForgetPasswordScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = { {headerShown: false}} name ="login" component={LoginScreen} />
        <Stack.Screen options = { {headerShown: false}} name ="register" component={RegistrationScreen} /> 
        <Stack.Screen options = { {headerShown: false}} name ="home" component={HomeScreen} /> 
        <Stack.Screen options = { {headerShown: false}} name ="forgetPassword" component={ForgetPassswordScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>

    );
    
    
      
  
}



export default App;
