import React from 'react'
import PresentCourse from '../components/PresentCourse'
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/core';

const CurrentCoursesScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
    <MaterialCommunityIcons name='arrow-left-bold' 
            color={colors.primary}
            size={35}
            onPress={() => {
              navigation.replace("tabs")
            }}
            />
    <View style = {{marginTop:12, flexDirection: "column", justifyContent: "space-between", marginLeft:12}}>
    <PresentCourse title = "IT" icon = "Entypo" iconName = "classic-computer" color = "blue"/>
    <View style = {{marginTop: 12}}>
    <PresentCourse title = "Safety" icon = "Foundation" iconName = "safety-cone" color = "red"/>
    </View>
    <View style = {{marginTop: 12}}>
    <PresentCourse title = "Logistics" icon = "FontAwesome5" iconName = "truck" color = "green" />
    </View>
    </View>
    </View>
    
  )
}

export default CurrentCoursesScreen

