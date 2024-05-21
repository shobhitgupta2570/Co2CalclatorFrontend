import React, { useState } from 'react';
import {ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Formik, Form, Field } from 'formik';
import { TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
// import CheckBox from 'react-native-check-box';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup'

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const signUpSchema = yup.object().shape({
  
  userName: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('User name is required'),
  image: yup
    .string()
    .required('image is required'),
  mobileNumber:yup
  .string()
  .matches(phoneRegex, 'Enter a valid phone number')
  .required('Phone number is required'),
    pin: yup
    .string()
    .matches(phoneRegex, 'Enter a valid pin number')
    .required('Pin is required'),
    confirmPin: yup
    .string()
    .oneOf([yup.ref('pin')], 'Pin do not match')
    .required('Confirm pin is required'),
  // email: yup
  //   .string()
  //   .email("Please enter valid email")
  //   .required('Email is required'),
  // password: yup
  //   .string()
  //   .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
  //   .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
  //   .matches(/\d/, "Password must have a number")
  //   .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
  //   .min(8, ({ min }) => `Password must be at least ${min} characters`)
  //   .required('Password is required'),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'Passwords do not match')
  //   .required('Confirm password is required'),
})

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [image, setImage] = useState(null);
  const navigation = useNavigation();    
  const handleCheckBox = () => {
          setIsChecked(!isChecked);
  };
  const pickImage = async(setFieldValue) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);
    // console.log(result.assets[0].uri);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setFieldValue('image', result.assets[0].uri);
    }
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('photo', {
      uri: values.image.uri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });

    // Append other form fields to formData if necessary
    for (const key in values) {
      if (key !== 'image') {
        if (key === 'pin' || key === 'mobileNumber') {
          // Convert pin to a number
          formData.append(key, Number(values[key]));
        } else {
          formData.append(key, values[key]);
        }
      }
    }
    if (isChecked) {
        console.log(values);
        console.log(formData);
        // Navigate to the next page
        navigation.navigate('Calculator');
      } else {
        // Do nothing, stay on the same page
      }

    // try {
    //   const response = await axios.post('http://192.168.1.8:8000/api/v1/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
    //   console.log('Upload success', response.data);
    // } catch (error) {
    //   console.error('Upload error', error);
    // }
  };

    //     const cities = [
    //       {name:"Los Angeles", id: 1},
    //       {name:"Philadelphia", id: 2},
    //       {name:"Chicago", id: 3},
    //       {name:"Washington DC", id: 4},
    //       {name:"New York", id: 5},
    //       {name:"San Diego", id: 6},
    //       {name:"Fort Worth", id: 7},
    //       {name:"Houston", id: 8},
    //       {name:"Cleveland", id: 9},
    //       {name:"Pittsburg", id: 10},
    //       {name:"Detroit", id: 11},
    //       {name:"Jacksonville", id: 12},
    //       {name:"Denver", id: 13},
    //       {name:"Columbus", id: 14},
    //       {name:"El Paso", id: 15},
    //       {name:"New Orleans", id: 16},
    //       {name:"Cincinnati", id: 17},
    //       {name:"Nashville", id: 18},
    //       {name:"Miami", id: 19},
    //       {name:"Tampa", id: 20},
    //       {name:"Bakersfield", id: 22},
    //       {name:"Tuscon", id: 23},
    //       {name:"Baltimore", id: 25},
    //       {name:"St Louis", id: 26},
    //       {name:"Las Vegas", id: 27},
    //       {name:"Memphis", id: 28},
    //       {name:"Seatle", id: 29},
    //       {name:"San Fransisco", id: 30},
     
    //  ]

    
  return(
  <View className=" h-[100%] ">
    <ImageBackground source={require("../../assets/images/image2.png")} resizeMode="cover" className="h-[100%] flex items-center">
      <View className="w-[105%] h-[13%] bg-[#ABE87A] rounded-b-[100px] flex-row">
        <Text className="mt-[40px] text-2xl ml-[100px]">Welcome, User</Text>
        <TouchableOpacity className="mt-[40px] ml-[60px] flex items-center justify-center h-[40px] w-[40px] bg-white rounded-3xl" onPress={()=>navigation.navigate('Profile')}>
        <FontAwesome name="user-o" size={24} color="black" /></TouchableOpacity>
      </View>

     

      <Text className="text-xl mt-2 px-6">Track your carbon footprint </Text>
      <Text className="text-xl px-6">effortlessly with our CO2 emission</Text>
      <Text className="text-xl px-6">calculator. Small steps, big impact!</Text>

      <KeyboardAvoidingView className=" h-[70%] w-[100%] mt-8">
        <ScrollView>
      <Formik
     initialValues={{ userName: '' , mobileNumber: null, pin: null ,confirmPin: null,  image: null, isOtpVerified: false }}
     validationSchema={signUpSchema}
     onSubmit={handleSubmit}
   >
     {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, isValid,touched  }) => (
       <View className="pb-[50px]">
         <Text className="text-3xl ml-[140px] font-semibold mb-11">Sign Up</Text>
        {/* Photo Input */}
    
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 20}}>
      {values.image && <Image source={{ uri: values.image }} className="h-[80px] w-[80px] rounded-[100px]" />}
      <Button title="add photo" onPress={()=>pickImage(setFieldValue)} />
      </View>
      {(errors.image && touched.image) &&
                  <Text style={{ color: 'red' }}>{errors.image}</Text>
                }
       
         <TextInput className="mx-[12%] my-2 rounded-xl border-2 text-black-200 text-lg font-semibold pl-[90px]"
           onChangeText={handleChange('userName')}
           onBlur={handleBlur('userName')}
           value={values.userName}
           placeholder='User Name'
         />
         {(errors.userName && touched.userName) &&
                  <Text style={{ color: 'red' }}>{errors.userName}</Text>
                }
         <TextInput className="mx-[12%] my-2 rounded-xl border-2 text-black-200 text-lg font-semibold pl-[90px]"
           onChangeText={handleChange('mobileNumber')}
           onBlur={handleBlur('mobileNumber')}
           value={values.mobileNumber}
           placeholder='Mobile Number'
           keyboardType="numeric"
         />
          {(errors.mobileNumber && touched.mobileNumber) &&
                  <Text style={{ color: 'red' }}>{errors.mobileNumber}</Text>
                }
         <TouchableOpacity className="mx-[50px] px-[50px] bg-white"><Text className="text-blue-800">Verify Number By Otp</Text></TouchableOpacity>
        
           <TextInput className="mx-[12%] my-2 rounded-xl border-2 text-black-200 text-lg font-semibold pl-[90px]"
           onChangeText={handleChange('pin')}
           onBlur={handleBlur('pin')}
           value={values.pin}
           placeholder='Pin'
           keyboardType="numeric"
         />
         {(errors.pin && touched.pin) &&
                  <Text style={{ color: 'red' }}>{errors.pin}</Text>
                } 

<TextInput className="mx-[12%] my-2 rounded-xl border-2 text-black-200 text-lg font-semibold pl-[90px]"
           onChangeText={handleChange('confirmPin')}
           onBlur={handleBlur('confirmPin')}
           value={values.confirmPin}
           placeholder='Confirm Pin'
           keyboardType="numeric"
         />
         {(errors.confirmPin && touched.confirmPin) &&
                  <Text style={{ color: 'red' }}>{errors.confirmPin}</Text>
                }         
          
        <View className="mx-[65px]  flex-row">
         <CheckBox
        title='By checking this box, you agree to our terms and conditions'
        checked={isChecked}
        onPress={handleCheckBox}
      /> 
      <TouchableOpacity><Text className="text-blue-800 font-bold w-[50px] pl-2 bg-white text-lg mt-2 mr-11 pt-5 h-[70px]">T&C</Text></TouchableOpacity>
        </View>

         <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
         <View className="w-[150px] h-[50px] ml-[130px] rounded-2xl mt-5 bg-blue-900 flex items-center justify-center">
         <Text className="text-white text-2xl">Submit</Text>
         </View>
         </TouchableOpacity>
       </View>
     )}
   </Formik>
   </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;