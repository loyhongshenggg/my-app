import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Text} from 'react-native';
import AppButton from '../components/AppButton';



import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import { storage } from '../../firebase';
import { ref, getDownloadURL } from "firebase/storage";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';


function UserProfile() {

    const navigation = useNavigation();
    const [downloadURL, setdownloadURL] = useState('');
    const [arr, setArr] = useState([])

    const handleSignOut = () => {
        signOut(auth)
          .then(() => { 
            navigation.replace('login') //When sign out, brings back to login page
          })
          .catch(error => alert(error.message))
    }

    //get profile pic
    useEffect(async () => {
        const pathReference = ref(storage, 
            '/user_profile_pictures/' + auth.currentUser.uid + '/' + auth.currentUser.uid);
        setdownloadURL(await getDownloadURL(pathReference));
    }, [])

    //get status
    useEffect( async () => {
        const docRef = doc(db, "user_status", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setArr(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
    },[])
 
    return (
        
        <ScrollView>
            <View style = {styles.image} />
            <View>
                <View style = {styles.profileImageContainer}>
                <Image source = {{uri: String(downloadURL)}} style = {styles.profileImage}/> 
                <Text style = {styles.text}>{arr.status}</Text>
                <View style = {styles.buttonContainer}>
                    <AppButton title = 'Sign out' onPress = {handleSignOut} />
                    <AppButton title = 'Edit' onPress = {() => navigation.replace('editUserProfile')} />
                </View>
                </View>

                

                <View style = {styles.cardContainer}>
                <Text style = {styles.txt}>User Course Interests:</Text>

                <View style={styles.interest}>
                {arr.IT && <Image style = {{width: 100, height: 100}} source = {require('../assets/IT.png')} />}
                {arr.Safety && <Image style = {{width: 100, height: 100}} source = {require('../assets/Safety.png')}/>}
                {arr.Logistics && <Image style = {{width: 100, height: 100}} source = {require('../assets/Logistics.png')}/>}
                </View>

                
                
            </View>
        </View>
                    
            
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    profileImage:{
        width: 120,
        height: 120,
        borderRadius: 80,
        alignSelf: 'center',
        
    },
    profileImageContainer:{
        paddingBottom: 30,
        bottom: 50,
        alignItems: 'center',
    },
    cardContainer: {
        width: '95%',
        alignSelf: 'center',
        bottom: 80,
    },
    buttonContainer: {
        paddingTop: 10,
        flexDirection: 'row-reverse'
    },
    image: {
        height: 120,
        width: '100%'
    },
    text: {
        alignSelf: 'center',
        paddingTop: 30,
    },
    txt: {
        padding: 20,
        fontWeight: 'bold'
    },
    medal: {
        alignSelf: 'center',
        width: 100,
        height: 100, 
    },
    interest: {
        flexDirection: 'row',
        marginLeft: 20
    }
})

export default UserProfile;