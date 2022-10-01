import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React , {useEffect, useState} from 'react'
import colors from '../config/colors';
import Card from '../components/Card'
import Carousel from 'react-native-snap-carousel';
import {useNavigation } from '@react-navigation/native';

import { auth } from '../../firebase';
import {db} from '../../firebase';
import {getDoc, collection, doc, query, where, onSnapshot} from 'firebase/firestore';


const HomeScreen = () => {

  const navigation = useNavigation();
  const [courses, setCourses] = useState([]);
  const colRef = collection(db, "courses");

  useEffect(() => {
    getUserPreference();
  },[])

  const addCourse = (q) => 
    onSnapshot(q, (snapshot) => {
    const events = []
    snapshot.docs.forEach((doc) => {
        events.push({...doc.data()}) //put the data into an array
        
    })
    setCourses(prev => prev.concat(events));
})

  const getUserPreference = async() => {
    const docRef = doc(db, "user_status", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      newData = docSnap.data();
      if (newData.IT) {
        const q1 = query(colRef, where('type', '==', 1));
        addCourse(q1);
      }
      if (newData.Marketing) {
        const q2 = query(colRef, where('type', '==', 2));
        addCourse(q2);
      }
      if (newData.Leadership) {
        const q3 = query(colRef, where('type', '==', 3));
        addCourse(q3);
      }
    }
    
  }

    return (
      <View style={styles.container}>
          
      <ImageBackground
      source = {require('../assets/splash-page.jpg')}
      blurRadius = {8}
      style = {styles.imageContainer}
        >
      <Text style = {styles.text} >Hello there!</Text> 
      <Text style = {styles.smalltext} >Ongoing events:</Text> 
      <Text style = {styles.smalltext} >(slide to find out more!)</Text> 
      
      <View style = {styles.carousel}>
          <Carousel
            layout='tinder'
            layoutCardOffset={`40`}
            data={courses}
            renderItem={({ item }) => (
              <View>
                  <Card title={item.title} subTitle = {item.subTitle} image={String(item.url)} onPress={() => navigation.navigate('listing')} />
              </View>
            )}
            sliderWidth={350}
            itemWidth={350}
          />
      </View>
      </ImageBackground>
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
  },
  carousel: {
    alignSelf: 'center',
    paddingTop: 20,
  }
})

export default HomeScreen