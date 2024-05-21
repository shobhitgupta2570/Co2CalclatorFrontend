import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import { useState } from "react";
import Cons from '../assets/images/cons.svg';
import Vsp from '../assets/images/vsp.svg';
import { SwipeButton } from 'react-native-expo-swipe-button';
// import Button from "../components/Buttons/Button";

export default ({navigation}) => {

    const [check, setCheck] = useState(-1);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignItems: 'center'}}>
                {/* <Cons /> */}
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</Text>
                <Button style={{marginTop: 20}} title="Consumer" onPress={() => setCheck(0)} />
            </View>

             <SwipeButton
                title={`Swipe to complete for ${check === 0 ? "Consumer" : 'VSP'}`}
                borderRadius={180}
                onComplete={() => navigation.navigate(check === 0 ? 'LoginCons' : 'LoginVsp')}
                containerStyle={{ backgroundColor: '#A9CBF4'}}
                underlayTitle="Release to complete"
                underlayTitleStyle={{ color: 'black'}}
                disabled={check === -1}
            />

            <View style={{alignItems: 'center'}}>
                {/* <Vsp /> */}
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</Text>
                <Button style={{marginTop: 20}} title="VSP" onPress={() => setCheck(1)} />
            </View>

        </SafeAreaView>
    );
};

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FFF'
    }
})