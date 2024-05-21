import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView, Text, TextInput, StyleSheet, View, Button, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Logo from '../assets/images/logo.svg';
import Ind from '../assets/images/ind.svg';
import { AntDesign } from '@expo/vector-icons';

// import Button from '../components/Buttons/Button';

export default ({navigation}) => {
    return (
        <LinearGradient colors={['#06264D', "#FFF"]} style={{flex: 1}}>
            <View className="mt-[50px] ml-[20px] flex-row">       
            <AntDesign name="arrowleft" size={44} color="black" />
            <Text className="text-3xl ml-[40px]">KYC Verification</Text>
            </View> 
            <SafeAreaView style={{flex: 1, padding: 10}}>
            <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0} // Adjust this value based on your needs
      >
        <ScrollView contentContainerStyle={styles.container}>
          <TextInput placeholder='Aadhar Number' style={styles.input} placeholderTextColor="#000" />
          <TextInput placeholder='PAN Number' style={styles.input} placeholderTextColor="#000" />
          <TextInput placeholder='CIN Number' style={styles.input} placeholderTextColor="#000" />
          <View className="flex-row"><Text className="p-2 m-2 ml-0">Terms and Conditions</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('KycTC')}}><Text className="bg-white p-2 m-2">Verify</Text></TouchableOpacity>
          </View>
          {/* <TextInput placeholder='Permissible Item' style={styles.input} placeholderTextColor="#000" />
          <TextInput placeholder='Website' style={styles.input} placeholderTextColor="#000" /> */}
        </ScrollView>
      </KeyboardAvoidingView>
            
            <TouchableOpacity onPress={() => navigation.navigate('Kyc2')}>
            <View className="flex-row" >
                <Text className="ml-[250px] mr-[10px] text-xl ">Next</Text>
                <AntDesign className="ml-[280px]" name="right" size={27} color="black" />
            </View>
            </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderStyle: 'solid',
        padding: 10,
        width: '100%',
        marginTop: 10
    }
})
