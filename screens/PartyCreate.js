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

import InputField from '../components/InputField';

export default function PartyCreate({navigation}) {
    return (
        <View style = {styles.background}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>
                    HOST A PARTY
                </Text>
            </View>
            <TouchableOpacity style = {styles.photoButton}>
                <Text style = {styles.photoText}>
                    Upload Party Image
                </Text>
            </TouchableOpacity>
            <TextInput placeholder='Party Name' style = {styles.input}></TextInput>
            <TextInput placeholder = 'when' style = {styles.smallInput}></TextInput>
            <TextInput placeholder = 'where' style = {styles.smallInput}></TextInput>
            <Text style = {{fontSize: 20,
                            color: 'white',
                            marginTop: 30,
                            marginLeft: 30,}}>
                TAGS
            </Text>
            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.other}>
                Price:   
                </Text>
                <TextInput placeholder = '    ' style = 
                                    {{borderBottomColor: 'white',
                                    borderBottomWidth: 3,
                                    color: 'white',}}>

                </TextInput>
            </View>


            
        </View>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#141516',
    },
    header: {
        backgroundColor: '#000000',
        height: 130,
        width: '100%',
        marginBottom: 30,
        alignSelf: 'center',
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
    photoButton: {
        width: '60%',
        height: 160,
        borderRadius: 11,
        borderWidth: 5,
        alignSelf: 'center',
        borderStyle: 'dashed',
        borderColor: 'white',
        alignItems: 'center',
        paddingTop: 64,
        paddingBottom: 64,
    },
    photoText: {
        fontSize: 16,
        color: 'white',
    },
    input: {
        alignSelf: 'flex-start',
        color: '#141516',
        fontSize: 32,
        color: 'white',
        marginTop: 30,
        marginLeft: 30,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    smallInput: {
        alignSelf: 'flex-start',
        color: '#141516',
        fontSize: 20,
        color: 'white',
        marginTop: 30,
        marginLeft: 30,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    other: {
        marginTop: 30,
        marginLeft: 30,
        fontSize: 16,
        color: 'white',
    }

});