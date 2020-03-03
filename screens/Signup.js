// login
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
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
    Picker, 
  } from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LoginInputField from '../components/LoginInputField'; 
//import BottomBar from '../../components/BottomBar/BottomBar'; 

export default function Signup ({navigation}) {
    const pressHandler = () => {
        navigation.navigate('Login'); 
      }
    // render() {
      return (
        <>
        <>
        <KeyboardAvoidingView style={styles.avoidView} behavior="padding">
        {/* <StatusBar barStyle="dark-content" /> */}
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
              <Image style={{marginTop: 100, marginBottom: 50}} source={require('../components/icons/ParTiiCnewer.png')} />
              {/* <Text style={styles.sectionTitle}>PARTIIIC</Text> */}
              <View style={styles.input}>
              <Text style={styles.label}>Username </Text>
                <LoginInputField labelText=' Username: ' />
                <Text style={styles.label}>Password </Text>
                <LoginInputField labelText=' Password: ' password={true}/>
                <Text style={styles.label}>University Email </Text>
                <LoginInputField labelText=' Email: ' />
                <Text style = {styles.warning}> Please use your university email! </Text>
                {/* <Picker selectedValue="stuff" style={{ height: 60, color: 'white'}}>
                    <Picker.Item label='item' value='oh'/>
                </Picker> */}
                <TouchableOpacity onPress={()=>navigation.navigate('CrProfS')}
                style={styles.loginButton}>
                  <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>
              </View>

              {/* <Text style={{display: flex, flexDirection: "row"}}> */}
              {/* <Text style={styles.need} >Already have an account? 
                {" "}
              </Text> */}
              <TouchableOpacity onPress={()=>navigation.navigate('LoginS')}
            //   style={styles.loginButton}
              >
                <Text style={styles.login}>Login</Text>
              </TouchableOpacity>
            {/* </Text> */}
              
          </ScrollView>
        </SafeAreaView>
        </KeyboardAvoidingView>
        {/* <BottomBar/> */}
      </>
      </>
      );
    //}
  }


const styles = StyleSheet.create({
    avoidView: {
      flex:1, 
      backgroundColor: "black"
     },
     input: {
       paddingHorizontal: 10, 
     },
     label: {
      paddingTop: 10, 
      paddingLeft: 20, 
      color: "white",
     },
    loginText: {
      fontSize: 18, 
      paddingTop: 12,
      textAlign: "center",
      color: "white", 
      fontWeight: "bold"
    },
    login: {
        color: "#75F6F2", 
        fontSize: 14, 
        // textAlign: "center", 
        paddingTop: 10, 
        textDecorationLine: 'underline', 
        textAlign: "center"
      },
    loginButton: {
      borderRadius: 11, 
      marginTop: 30,
      paddingTop: 1,
      paddingBottom: 5, 
      fontSize: 18, 
      backgroundColor: '#19DAD4', 
      height: 50, 
      textAlign: "center",
      marginHorizontal: 15, 
    },
    warning: {
      color: 'white',
      fontSize: 14,
      paddingTop: 10, 
      textAlign: 'center',
    },
    need: {
      color: "#75F6F2", 
      fontSize: 14, 
      textAlign: "center", 
      paddingTop: 10
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
  
  