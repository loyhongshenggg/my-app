import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../app/screens/HomeScreen";
import colors from "../app/config/colors";
import UserProfileScreen from "../app/screens/UserProfileScreen"
import Scan from "../app/screens/Scan";
import CoursesScreen from "../app/screens/CoursesScreen";
import Form from "../app/screens/Form"
import ViewMyCoursesScreen from "../app/screens/ViewMyCoursesScreen"

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: "center",
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45'
            
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: colors.white,
                borderRadius: 15,
                height: 90,
                ...styles.shadow}
            }}
        >
            <Tab.Screen name = "home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 5}}>
                        <Image 
                            source={require('../app/assets/home.png')}
                            resizeMode = 'contain'
                            style= {{
                                width: 35,
                                height: 35,
                                tintColor: focused ? colors.primary : null,
                            }}
                        />
                        <Text style={{color: focused ? colors.primary : '#748c94'}}>Home</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name = "My Courses" component={ViewMyCoursesScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 5}}>
                        <Image 
                            source={require('../app/assets/courses.png')}
                            resizeMode = 'contain'
                            style= {{
                                width: 35,
                                height: 35,
                                top: 2,
                                tintColor: focused ? colors.primary : null,
                            }}
                        />
                        <Text style={{color: focused ? colors.primary : '#748c94'}}>Courses</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name = "Scan" component={Form} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 5}}>
                        <Image 
                            source={require('../app/assets/scan.png')}
                            resizeMode = 'contain'
                            style= {{
                                width: 35,
                                height: 35,
                                tintColor: focused ? colors.primary : null,
                            }}
                        />
                        <Text style={{color: focused ? colors.primary : '#748c94'}}>Scan</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name = "UserProfile" component={UserProfileScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 5}}>
                        <Image 
                            source={require('../app/assets/userprofile.png')}
                            resizeMode = 'contain'
                            style= {{
                                width: 35,
                                height: 35,
                                tintColor: focused ? colors.primary : null,
                            }}
                        />
                        <Text style={{color: focused ? colors.primary : '#748c94'}}>Profile</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})

export default Tabs;