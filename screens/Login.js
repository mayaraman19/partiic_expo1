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
    
    // render() {
      // const navigation = useNavigation();
      return (
        <>
        <KeyboardAvoidingView style={styles.avoidView} behavior="padding">
        {/* <StatusBar barStyle="dark-content" /> */}
        {/* <SafeAreaView> */}
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
              {/* <Text style={styles.sectionTitle}>PARTIIC</Text> */}
              <Image style={{borderColor: "white", borderWidth: 1}} source={require('../components/icons/ParTiiC.png')} />
              <View style={styles.input}>
                <Text style={styles.label}>Username </Text>
                <LoginInputField labelText=' Username: ' />
                <Text style={styles.label}>Password </Text>
                <LoginInputField labelText=' Password: ' password={true}/>
                <TouchableOpacity 
                style={styles.loginButton} onPress={()=>navigation.navigate('ProfileS')}>
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
        {/* </SafeAreaView> */}
        </KeyboardAvoidingView>
      </>
      );
    //}
  }

const styles = StyleSheet.create({
  avoidView: {
    // paddingLeft: 30,
    // paddingRight: 30,
    // paddingTop: 300,
    flex:1, 
    backgroundColor: "black"
   },
  loginText: {
    fontSize: 18, 
    paddingTop: 12,
    textAlign: "center", 
    color: "white", 
    fontWeight: "bold", 
    // color: "blue"
  },
  input:{
    paddingHorizontal: 30, 
  },
  label: {
    // padding: 10, 
    paddingTop: 10, 
    paddingLeft: 10, 
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
  },
  need: {
    color: "#75F6F2", 
    fontSize: 14, 
    // textAlign: "center", 
    paddingTop: 10
  },
  signup: {
    color: "#75F6F2", 
    fontSize: 14, 
    // textAlign: "center", 
    paddingTop: 10, 
    textDecorationLine: 'underline'
  },
  partiic: {
    fontWeight: 'bold',
    fontSize: 30, 
    marginTop: 30, 
    marginLeft: 50, 
  }, 
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: "white",
    textAlign: "center"
  },
});