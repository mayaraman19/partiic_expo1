// login
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
  Image,
  Linking, 
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LoginInputField from '../components/LoginInputField'; 

export default function Login({navigation}) {
    const pressHandler = () => {
      navigation.navigate('ProfileS'); 
    }
    
      return (
        <>
        <KeyboardAvoidingView style={styles.avoidView} >
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
              <Image 
              style={{
                marginTop: 100, 
                marginBottom: 50, 
              }} 
              source={require('../components/icons/ParTiiCnewer.png')} />
              <View style={styles.input}>
                <Text style={styles.label}>Username </Text>
                <LoginInputField labelText=' Username: ' />
                <Text style={styles.label}>Password </Text>
                <LoginInputField labelText=' Password: ' password={true}/>
                <TouchableOpacity 
                style={styles.loginButton} onPress={()=>navigation.navigate('MapS')}>
                  <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
              </View>

            <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
              <Text style={styles.need}>Need an account? 
                {" "}
              </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('SignupS')}><Text
                style={styles.signup}
                
              >
                Sign up
              </Text></TouchableOpacity>
             </View> 
               
          </ScrollView>
        </KeyboardAvoidingView>
      </>
      );
  }

const styles = StyleSheet.create({
  avoidView: {
    flex:1, 
    backgroundColor: "black"
   },
  loginText: {
    fontSize: 18, 
    paddingTop: 12,
    textAlign: "center", 
    color: "white", 
    fontWeight: "bold", 
  },
  input:{
    paddingHorizontal: 10, 
    alignContent: "center",
  },
  label: {
    paddingTop: 10, 
    paddingLeft: 20, 
    color: "white", 
  },
  loginButton: {
    borderRadius: 11, 
    marginTop: 30,
    paddingTop: 1,
    paddingBottom: 5, 
    fontSize: 18, 
    height: 18,
    backgroundColor: '#19DAD4', 
    height: 50, 
    textAlign: "center",
    marginHorizontal: 15, 
  },
  need: {
    color: "#75F6F2", 
    fontSize: 14,  
    paddingTop: 10
  },
  signup: {
    color: "#75F6F2", 
    fontSize: 14, 
    paddingTop: 10, 
    textDecorationLine: 'underline'
  },
});