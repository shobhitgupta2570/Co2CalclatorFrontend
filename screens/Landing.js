import { SafeAreaView, Text, View, Button, Image  } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../assets/images/logo.svg';
import Ind from '../assets/images/ind.svg'
// import Button from "../components/Buttons/Button";

export default ({navigation}) => {
    return (
        <>
            {/* <Logo /> */}
            <Image
          className="mt-[50px] ml-[110px]"
          source={require("../assets/images/logo-removebg-preview 1.png")}
          style={{ width: 201, height: 181 }}
        />
        <TouchableOpacity className="ml-[80px] my-8 mt-[60%]" onPress={() => navigation.navigate('FlowSelect')}>
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#A9CBF4', '#06264D']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
        Login
        </Text>
    </LinearGradient>
    </TouchableOpacity >
    <TouchableOpacity className="ml-[80px]" onPress={() => navigation.navigate('Marketplace')}>
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#A9CBF4', '#06264D']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
        SignUp
        </Text>
    </LinearGradient>
    </TouchableOpacity>
            {/* <View className="py-[40%] flex flex-col-2 gap-3"> */}
            {/* <View className="my-3 px-[150px] rounded-full">
                <Button className="my-3 px-[150px] rounded-full" title="Login" onPress={() => navigation.navigate('FlowSelect')}  />
                </View>
                <View className="my-3 px-[150px] rounded-lg">
                <Button  title="Signup"  onPress={() => navigation.navigate('Marketplace')} />
                </View> */}
            {/* </View> */}
            {/* <Text><Ind /> Made In India</Text> */}
            <View className="flex-1 flex-row mt-[50%] ml-[35%]">
        <Text className="">Made in</Text>
        <Image
          className=" ml-2"
          source={require("../assets/images/image 10.png")}
          style={{ width: 40, height: 22 }}
        />
      </View>
        </>
    )
}


var styles = StyleSheet.create({
    linearGradient: {
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 20,
      height: 38,
      width:200
    },
    buttonText: {
      fontSize: 18,
      textAlign: 'center',
      margin: 5,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });