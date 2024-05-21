import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, TextInput, Image } from 'react-native';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

  
export default function MyPage() {
  const [menuVisible, setMenuVisible] = useState(false);
  const mobileNumber  = 8978564320

  const navigation = useNavigation();

  const handleDocumentsClick = () => {
    // Navigate to the Documents page
    navigation.navigate('Documents');
  };

  const handleAccountTypeClick = () => {
    // Navigate to the Account Type page
    navigation.navigate('AccountType');
  };

  const handleDeleteAccountClick = () => {
    // Navigate to the Delete Account page
    navigation.navigate('DeleteAccount');
  };

  const handleLogoutClick = () => {
    // Navigate to the Logout page
    navigation.navigate('Logout');
  };

  const navigateBack = () => {
    // Add navigation logic to go back to the previous page
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigateToSettings = () => {
    // Add navigation logic to go to settings page
  };

  const navigateToHelp = () => {
    // Add navigation logic to go to help page
  };

  const navigateToAbout = () => {
    // Add navigation logic to go to about page
  };

  const navigateToLegal = () => {
    // Add navigation logic to go to legal page
  };

  const rating = 3
  const percentage = (rating / 5) * 100;
 

  
 

  return (
    <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
      <View style={{ flex: 1, paddingTop: 50 }}>
        {/* Header */}
        <View style={{ backgroundColor:"grey", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height:60,  marginBottom: 20, paddingHorizontal: 30 }}>
          {/* Left Arrow */}
          <TouchableOpacity onPress={navigateBack}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <Image source={{ uri: "https://via.placeholder.com/150" }} style={{width: 80,
    height: 40,
    width:40,
    borderRadius: 40,
    }} />
      {/* {image && <Image source={{ uri: image }} style={styles.image} onPress={pickImage}/>} */}
      </View>
          {/* Right Menu */}
          <TouchableOpacity onPress={toggleMenu}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>

        

        {/* Menu Options */}
        {menuVisible && (
          <View style={{ position: 'absolute', top: 75, right: 20, backgroundColor: 'white', padding: 10, borderRadius: 5, elevation: 5 }}>
            <TouchableOpacity onPress={navigateToSettings} style={{ marginBottom: 10 }}>
              <Text>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToHelp} style={{ marginBottom: 10 }}>
              <Text>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToAbout} style={{ marginBottom: 10 }}>
              <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToLegal}>
              <Text>Legal</Text>
            </TouchableOpacity>
          </View>
        )}

<View>
      <Text style={{ fontSize: 24, paddingLeft: 80 }}>
        Hello @{mobileNumber}
      </Text>
    </View>

<View style={styles.boxContainer}>
      <View style={styles.box}>
        <Text style={styles.boxText}>KYC Verification</Text>
      </View>
    </View>




<View style={styles.circleContainer}>
  <View>
<View style={styles.circle} >
    <Text style={styles.number}>3</Text>
    </View>
    <Text style={styles.number}>Rating</Text>
    </View>
    <View>
    <View style={styles.circle} >
    <Text style={styles.number}>3</Text>
    </View>
    <Text style={styles.number}>Orders</Text>
    </View>
    </View>

  


    <View style={styles.container}>
      {/* Documents */}
      <TouchableOpacity onPress={handleDocumentsClick}>
        <Text style={styles.linkText}>Wallet</Text>
      </TouchableOpacity>

      {/* Account Type */}
      <TouchableOpacity onPress={handleAccountTypeClick}>
        <Text style={styles.linkText}>Goods insurance</Text>
      </TouchableOpacity>

      
    </View>

        {/* Footer */}
        <View style={{ backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 20 }}>
          <TouchableOpacity>
            <AntDesign name="home" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'blue', borderRadius: 24, padding: 10 }}>
            <Entypo name="shop" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    photoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    photo: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
    },
    submitButton: {
      backgroundColor: 'blue',
      borderRadius: 5,
      padding: 15,
      alignItems: 'center',
    },
    submitButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 100, padding: 10
    },
    button: {
      height: 20,
      width: 20,
      fontSize: 10,
    },
    linkText: {
      fontSize: 18,
      color: 'blue',
      marginBottom: 20,
    },
    circle: {
      width: 40,
      height: 40,
      borderRadius: 50,
      borderWidth: 2, // Border width for the entire circle
      borderColor: 'grey', // Color of the entire border
      borderRightColor: 'black', // Make 1/4 of the border transparent
      // borderDownColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    number: {
      fontSize: 24,
      // fontWeight: 'bold',
      color: 'black',
    },
    circleContainer: {
      flexDirection: 'row', // Arrange circles in a row
      justifyContent: 'center', // Center circles horizontally
      alignItems: 'center', // Center circles vertically
      gap : 80
    },
    boxContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: '#CCCCCC', // Grey background color
      padding: 20,
      borderRadius: 10, // Rounded corners
    },
    boxText: {
      fontSize: 20,
      // fontWeight: 'bold',
      textAlign: 'center',
    },
  });