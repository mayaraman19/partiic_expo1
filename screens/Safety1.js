import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import { AuthSession } from 'expo';

/*dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };*/

export default function Safety() {
    return (
        <View style = {styles.background}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>
                UCLA SAFETY RESOURCES
                </Text>
            </View>
            <TouchableOpacity /*key = {index} */ style = {styles.policeButton}
            /*onPress={()=>{this.dialCall(4085477683)}}*/>
                <Text style = {styles.policeText}>EMERGENCY: 911</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>
                    UCPD
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>
                    UCPD Anonymous
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>
                    Evening Escort Service
                </Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#141516',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#000000',
        height: 130,
        width: '100%',
        marginBottom: 30,
        alignItems: 'center',
        shadowOffset:{  width: 2,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    headerText: {
        fontSize: 32,
        fontStyle: 'italic',
        color: 'white',
        paddingVertical: 60,
    },
    policeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        width: 340,
        height: 55,
        marginTop: 10,
        // top: 156,
        backgroundColor: 'rgba(244, 73, 73, 0.8)',
        borderRadius: 11,
    },
    policeText: {
        // position: 'absolute',
        /*left: 4.8,
        right: 4.53%,
        top: 21.06%,
        bottom: 75.99%,*/

        //font-family: SF Pro Display;
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 29,
        textAlign: 'center',
        letterSpacing: 0.2,

        color: '#FFFFFF',

        opacity: 0.9,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 340,
        height: 55,
        top: 40,
        marginBottom: 30,

        backgroundColor: '#19DAD4',
        borderRadius: 11,
    },
    buttonText: {
        // position: 'absolute',
        /*left: 11.2%;
        right: 11.2%;
        top: 44.21%;
        bottom: 52.83%;*/
        //font-family: SF Pro Display;
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        letterSpacing: 0.1,

        color: '#FFFFFF',

        opacity: 0.9,
    },
});