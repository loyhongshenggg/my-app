import React from 'react'
import { View } from 'react-native'
import PastCourse from '../components/PastCourse'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/core';


const PastCoursesScreen = () => {
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
    <PastCourse icon = "Entypo" iconName = "classic-computer" color = "blue" title = "Learn Programming From Scratch"
    description = "Install, maintain and repair software components in computers"
    expiry = "18/07/2023"/>
    <View style = {{marginTop: 12}}>
    <PastCourse icon = "Foundation" iconName = "safety-cone" color = "red" 
    title = "Workplace Safety"
    description = "Learn ways to limit hazards and accidents"
    expiry = "11/09/2025"/>
    </View>
    <View style = {{marginTop: 12}}>
    <PastCourse icon = "FontAwesome5" iconName = "truck" color = "green" title = "Warehouse Management" 
    description = "Coordinate and move resources around" 
    expiry = "22/11/2022"/>
    </View>
    </View>
    </View>
  )
}

export default PastCoursesScreen