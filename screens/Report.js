import React, {Component} from 'react';
//import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView, 
  Button, 
  TouchableOpacity, 
  Linking, 
  TextInput,
} from 'react-native';

import DropdownMenu from 'react-native-dropdown-menu';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import InputField from '../components/InputField'; 

export default function Report({navigation}) {
    var data = ["dangerous", "boring", "cops", "ppl"];
    return (
        <View style = {styles.background}>
            <View style = {styles.titleView}>
                <Text style = {styles.headerFont}>
                    ORGANIZATION'S FUNDRAGER
                </Text>
                <Text style = {styles.title}>
                    Why are you reporting this party?
                </Text>
            </View>
            <View style = {styles.contentView}>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>
                    Option 1
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>
                        Option 2
                    </Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="My reason isn't listed..."
                />
                <TouchableOpacity style = {styles.submitButton}>
                    <Text style = {{color: '#fff', fontSize: 18, 
                            margin: 'auto',}}>
                        Submit
                    </Text>
                </TouchableOpacity>
                <View style = {styles.finalView}>
                    <Text style = {{fontSize: 20}}>
                        Thank you for sending in a report.
                         ParTiiC takes reports very seriously, 
                         and will take appropriate measures to 
                         ensure the safety of our users.
                    </Text>
                </View>

                

            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1e272e',
        flex: 1,
        //alignItems: 'center',
    },
    titleView: {
        justifyContent: "space-between",
        display: "flex", 
        flexDirection: "column",
    },
    headerFont: {
        //position: 'absolute',
        // width: 302,
        // height: 0,
        // left: 24,
        // top: 100,
        left: 24,
        top: 100,


        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 30,

        color: '#FFFFFF',
    },

    title: {
        //position: 'absolute',
        left: 24,
        // right: 0,
        top: 120,
        // bottom: 83,
        //marginTop: 25,

        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 21,

        color: '#FFFFFF',

        opacity: 0.9,
        marginBottom: 30,

    },
    contentView: {
        justifyContent: "space-between",
        display: "flex", 
        alignItems: 'flex-start',
        flexDirection: "column",
        top: 120,
    },
    button: {
        backgroundColor: 'white',
        width: '89%',
        height: 30,
        left: 24,
        borderRadius: 11,
        //marginTop: 30,
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 16,
        color: 'black',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
    },
    input: {
        width: '89%',
        height: 150,
        padding: 0,
        backgroundColor: '#ffffff',
        borderRadius: 11,
        left: 24,
        opacity: 1.0,
        marginBottom: 30,
    },
    submitButton: {
        backgroundColor: '#19DAD4',
        borderRadius: 11,
        width: 89,
        height: 36,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    finalView: {
        width: '89%',
        height: 123,
        left: 24,
        borderRadius: 5,
        backgroundColor: '#CDCDCD',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    }

});