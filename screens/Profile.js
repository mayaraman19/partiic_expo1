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
  Image,
  Text,
  StatusBar,
  KeyboardAvoidingView, 
  Button, 
  TouchableOpacity, 
  Linking, 
  TextInput, 
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import InputField from '../components/InputField'; 

export default function ProfileScreen({navigation}) {
    const pressHandler = () => {
      navigation.navigate('Safety'); 
    }
    
    // render() {
      // const navigation = useNavigation();
      return (
          <View>
              <ImageBackground source={require('../components/pics/johnsmith.png')} style={{width: '100%', height: '100%'}}>
                </ImageBackground>
          </View>
      );
    //}
  }



const styles = StyleSheet.create({
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 300,
    flex:1, 
    backgroundColor: "#050A39"
   },
  loginText: {
    fontSize: 18, 
    paddingTop: 12,
    textAlign: "center"
    // color: "blue"
  },
  loginButton: {
    borderRadius: 11, 
    marginTop: 10,
    paddingTop: 1,
    paddingBottom: 5, 
    fontSize: 18, 
    height: 18,
    backgroundColor: 'white', 
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
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});