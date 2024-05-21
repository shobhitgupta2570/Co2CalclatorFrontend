import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView, Text, TextInput, StyleSheet, View, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Logo from '../assets/images/logo.svg';
import Ind from '../assets/images/ind.svg';
// import Button from '../components/Buttons/Button';

export default ({navigation}) => {
    return (
        <LinearGradient colors={['#06264D', "#FFF"]} style={{flex: 1}}>
            <SafeAreaView style={{flex: 1, padding: 10}}>
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={true}
            enableAutomaticScroll={true}
            enableOnAndroid={true}
            >
                {/* <Logo /> */}
                
                <TextInput placeholder='GSTIN' style={styles.input} placeholderTextColor="#000" />
                <TextInput placeholder='Whatsapp Number' style={styles.input} placeholderTextColor="#000" />
                <TextInput placeholder='Company Name' style={styles.input} placeholderTextColor="#000" />
                <TextInput placeholder='Email ID' style={styles.input} placeholderTextColor="#000" />
                <TextInput placeholder='Website' style={styles.input} placeholderTextColor="#000" />
                <Button title="Login" style={{marginTop: 20}} onPress={() => navigation.navigate('HomePreKyc')} />
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
