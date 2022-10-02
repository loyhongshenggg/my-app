import React from 'react'
import PresentCourse from '../components/PresentCourse'
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/core';


const CurrentCoursesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style = {{padding: 15}}>
    <MaterialCommunityIcons name='arrow-left-bold' 
            color={colors.primary}
            size={35}
            onPress={() => {
              navigation.replace("viewCourses")
            }}
        
            />
    <View style = {{marginTop:12, flexDirection: "column", justifyContent: "space-between"}}>
    <PresentCourse icon = "Entypo" iconName = "classic-computer" color = "blue"
    title = "Learn Java From Scratch"
    description = "Learn OOP with Java"/>
    <View style = {{marginTop: 12}}>
    <PresentCourse title = "Safety and Security" icon = "Foundation" iconName = "safety-cone" color = "red"
    description = "Learn ways to increase security in critical regions "/>
    </View>
    <View style = {{marginTop: 12}}>
    <PresentCourse title = "Logistics management" icon = "FontAwesome5" iconName = "truck" color = "green" description = "Keep track of inventory and stores"  />
    </View>
    </View>
    </View>
    
  )
}

export default CurrentCoursesScreen

