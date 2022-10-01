import React, {useState} from 'react'
import { ScrollView, Image, Button, Text, StyleSheet, View, SafeAreaView, Platform } from 'react-native'
import {Formik} from "formik"
import AppButton from "../components/AppButton"
import { TextInput } from 'react-native-paper';
import * as Yup from 'yup'
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker'
import colors from '../config/colors';

import { uploadBytes, ref, getDownloadURL, uploadString } from 'firebase/storage';


function Form(props) {

    //input validation
    const scanValidationSchema = Yup.object().shape({
        titleOfCertification: Yup.string().required('Title of Certification is Required'),
        courseID: Yup.string().required('Course ID is Required'),
        expiryDate: Yup.string().required('Certificate Expiry Date is Required'),
        certifyingAuthority: Yup.string().email("Invalid email address").required('Certifying Authority is Required'),
     
      });

      //image certification
      const [image, setImage] = useState(null);
      const [upload, setUpload] = useState(false);

      const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        setImage(result.uri);
        setRes(result);
    
      };
    
      function handleButton() {
       handleImagePicked(res);
       writeStatus();
       writeInterest();
       alert('uploaded')
      }
    
      const handleImagePicked = async (result) => {
        try {
          setUpload(true);
    
          if (!result.cancelled) {
            const uploadUrl = await uploadImageAsync(result.uri);
            setImage(uploadUrl);
          }
        } catch (e) {
          console.log(e);
        } finally {
          setUpload(false);
        }
      };
    
      async function uploadImageAsync(uri) {
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            resolve(xhr.response);
          };
          xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", uri, true);
          xhr.send(null);
        });
      
        const photoRef = ref(storage, 'user_profile_pictures/' + auth.currentUser.uid + '/' + auth.currentUser.uid);
        const result = await uploadBytes(photoRef, blob);
        
    
        blob.close();
    
        return await getDownloadURL(photoRef);
    
      } 
    
      const [date, setDate] = useState(new Date())
      const [show, setShow] = useState(false)
      const [text, setText] = useState('Empty')

      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        console.log("date:", tempDate)
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        
        return tempDate;
        console.log("date!!!", tempDate)
      }


  return (
    <Formik 
        initialValues = {{
            titleOfCertification: "",
            courseID: "",
            expiryDate: date,
            certifyingAuthority: "",
            
        }}
        validationSchema={ scanValidationSchema }
        onSubmit={values => console.log(values)}
    >
        

    {({ errors, touched, setFieldValue, handleChange, handleSubmit, values }) => (
    
    <ScrollView style ={{paddingTop: 100, flex: 1}}>
        <Text style = {styles.title} >Submit </Text> 
        <Text style = {styles.title2} >Certificate</Text> 
        <TextInput 
            label="Title of Certification"
            value={values.titleOfCertification}
            onChangeText={handleChange('titleOfCertification')}
            style={styles.textInput}
        />
        {errors.titleOfCertification && touched.titleOfCertification ? (
            <Text style = {styles.errorMessage}>{errors.titleOfCertification}</Text>
        ) : null}
        
        <TextInput 
            label="Course ID"
            value={values.courseID}
            onChangeText={handleChange('courseID')}
            style={styles.textInput}
        />
        {errors.courseID && touched.courseID ? (
            <Text style = {styles.errorMessage}>{errors.courseID}</Text>
        ) : null}
        <View style={styles.dateButton}>
        <Button title='Certificate Expire Date' onPress={setShow}/>
        </View>
        {show && <DateTimePicker
            name={'expiryDate'}
            value={values.expiryDate}
            style={styles.textInput}
            onChange ={onChange}
            display='default'
        />}
        <Text style = {styles.dateText}>{date.toDateString()}</Text>
        {errors.expiryDate && touched.expiryDate ? (
            <Text style = {styles.errorMessage}>{errors.expiryDate}</Text>
        ) : null}
        
        <TextInput 
            label="Certifying Authority (Email)"
            value={values.certifyingAuthority}
            onChangeText={handleChange('certifyingAuthority')}
            style={styles.textInputAuth}
        />
        {errors.certifyingAuthority && touched.certifyingAuthority ? (
            <Text style = {styles.errorMessage}>{errors.certifyingAuthority}</Text>
        ) : null}
        <View style = {styles.choosecert}>
        <Button title='Choose Certificate' onPress={pickImage}/>
        </View>
        {image != null && <Image source = {{uri: image}} style = {styles.cert}/>}
    <View style={{top: 15, width: 150, alignSelf: 'center'}}>
        <AppButton onPress={() => {handleSubmit(); setFieldValue("expiryDate", date)}} title="Submit" />
    </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
    </ScrollView>)}
    </Formik>
)}

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 30,
        width: 300,
        bottom: 5,
        alignSelf: 'center',
    },
    textInputAuth: {
        marginBottom: 20,
        width: 300,
        bottom: 15,
        alignSelf: 'center',
    },
    errorMessage: {
        paddingLeft: 60,
        bottom: 33,
        color: "red",
        fontWeight: '500',
    },
    cert: {
        height: 150,
        width: 120, 
        left: 225,
        bottom: 68
    },
    choosecert: {
        width: 190,
        paddingLeft: 46,
        bottom: 15
    }, 
    title: {
        paddingLeft: 45,
        fontSize: 40,
        fontFamily: "Roboto",
        fontWeight: 'bold',
        color: colors.primary,
    },
    title2: {
        paddingLeft: 45,
        paddingBottom: 40,
        fontSize: 40,
        fontFamily: "Roboto",
        fontWeight: 'bold',
        color: colors.primary,
    },
    dateButton: {
        width: 190,
        paddingLeft: 46,
        bottom: 15
    },
    dateText: {
        bottom: 50,
        paddingLeft: 216,
        fontSize: 17,
        fontWeight: '600'
    }
})

export default Form