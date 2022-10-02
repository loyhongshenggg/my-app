import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native'
import AppText from '../components/AppText';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';
import Screen from '../components/Screen';

function CourseListing1() {
    const navigation = useNavigation()
    return (
        <Screen>
        <View>
            <Image style = {styles.image} source = {require('../assets/Logistics.png')} />
            <View style = {styles.backIcon}>
                    <MaterialCommunityIcons name='arrow-left-bold' 
                    color="white" 
                    size={35}
                    onPress={() => {
                        navigation.replace("tabs")
                  }} />
            </View>
            <View style = {styles.detailsContainer}>
                <AppText style = {styles.title}>Warehouse Management in Logistics</AppText>
                <AppText style = {styles.pricing}>$19.98/pax</AppText>
                <View styles = {styles.Profile}>
                    {/* <Profile
                        image = {require('../assets/IT.jpg')}
                        title = "Nike"
                        subTitle= "4 Events"
                    /> */}
                </View>
            </View>
            <Text style = {{padding: 20, bottom: 50}}>
            In this Warehouse Management in Logistics & Supply Chain Management course, you will 
            learn some of the key skills required to be a successful Warehouse Management 
            professional in Logistics and Supply Chain. You will learn about warehouse management 
            principles, important warehouse processes and common trends in logistics and supply 
            chain management. As well as learning about automation and warehouse management 
            technology, you will also learn about outsourcing. This warehouse management system 
            course will prepare you to successfully manage your own warehouse. So if you work in 
            logistics and supply chain industry this course will be a boon. As the instructor has 
            used infographics to boost the your imagination and it will help you understand better.
            </Text>
            
        </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
        bottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
    },
    pricing: {
        fontSize: 20,
        color: colors.secondary,
    },
    Profile: {
        padding: 30,
    },
    backIcon: {
        bottom: 280,
        left: 10,
    }
})

export default CourseListing1;