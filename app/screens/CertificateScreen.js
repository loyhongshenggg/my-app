import React from 'react'
import { Image, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/core';

const CertificateScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
    <MaterialCommunityIcons name='arrow-left-bold' 
            color={colors.primary}
            size={35}
            onPress={() => {
              navigation.replace("pastCourses")
            }}
            />
    <Image
      source = {require('../assets/Certificate.png')}

      style = {{
        height: '90%',
        width: '100%',
      }}>
    </Image>
    
    </View>
  )
}

export default CertificateScreen