import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView, Text, TextInput, StyleSheet, View, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Logo from '../assets/images/logo.svg';
import Ind from '../assets/images/ind.svg';
// import Button from '../components/Buttons/Button';

export default ({navigation}) => {
    return (
        <LinearGradient colors={['#FFF', "#FFF"]} style={{flex: 1}}>
            <SafeAreaView style={{flex: 1, padding: 10}}>
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={true}
            enableAutomaticScroll={true}
            enableOnAndroid={true}
            >
                {/* <Logo /> */}
                <TextInput placeholder='Vendor Firm Name' style={styles.input} placeholderTextColor="#000" />
                <TextInput placeholder='Owner Name' style={styles.input} placeholderTextColor="#000" />
                <TextInput placeholder='Whatsapp Number' style={styles.input} placeholderTextColor="#000" />
                <TextInput placeholder='Email ID' style={styles.input} placeholderTextColor="#000" />
                <TextInput placeholder='Address' style={styles.input} placeholderTextColor="#000" />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TextInput placeholder='City' style={[styles.input, {width: 100}]} placeholderTextColor="#000" />
                    <TextInput placeholder='State' style={[styles.input, {width: 150, marginLeft: 50}]} placeholderTextColor="#000" />
                </View>
                <TextInput placeholder='Pincode' style={styles.input} placeholderTextColor="#000" />
                <Button title="Login" style={{marginTop: 20}} onPress={() => navigation.navigate('Home')} />
            </KeyboardAwareScrollView>
            
            <View style={{alignItems: 'center', flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
                {/* <Ind /> */}
                <Text> Made In India</Text>
            </View>
           
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
