import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import Screen from '../components/Screen';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/core';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';




function ViewMyCoursesScreen(props) {
    const navigation = useNavigation()

    return (
        
        <Screen>
        <ScrollView>
        <View>
                <View style = {styles.primary}>
                
                   
                <TouchableOpacity onPress={() => {
                      navigation.replace("pastCourses")
                }}>
                    <Text style = {styles.topButton} >
                        Past Courses
                    </Text>
                 </TouchableOpacity>
                </View>
            
                <View style = {styles.secondary}>
                <TouchableOpacity onPress={
                    () => {
                        navigation.replace("currentCourses")
                  }
                }
                >
                    <Text style = {styles.bottomButton} >
                        Current Courses
                    </Text>
                </TouchableOpacity>
                </View>
            
        </View>
        </ScrollView>
        </Screen>
        
    );
}

const styles = StyleSheet.create({
    primary: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        height: 380, //unable to use flex

    }, 
    secondary: {
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        height: 400, //unable to use flex
    },
    topButton: {
        textAlign: 'center',
        fontSize: 70,
        fontWeight: 'bold',
        color: colors.white,
        bottom: 15,
    },
    bottomButton: {
        textAlign: 'center',
        fontSize: 65,
        fontWeight: 'bold',
        color: colors.white,
        bottom: 35,
    },
    backIcon:{
        bottom: 90,
        paddingLeft: 15
    }
})

export default ViewMyCoursesScreen;