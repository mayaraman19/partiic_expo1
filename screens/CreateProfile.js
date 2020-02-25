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

export default function CreateProfile ({navigation}) {
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
          
              {/* <Image style={{marginTop: 100, marginBottom: 50}} source={require('../components/icons/ParTiiCnewer.png')} /> */}
              {/* <Text style={styles.sectionTitle}>PARTIIIC</Text> */}
              <Text style={{color: "white", fontSize: 24, fontWeight: "bold", padding: 20}}>ABOUT YOU</Text>
              <TouchableOpacity style={{borderStyle: "dashed", borderColor: "white", borderWidth: 2, width: "80%", height: "30%", alignSelf: "center", borderRadius: 20, marginBottom: 50}}>
                  <Text style={{color: "white", fontSize: 20, textAlign: "center", paddingTop: 75}}>Upload Image</Text>
              </TouchableOpacity>
              <View style={styles.input}>
              <Text style={styles.label}>First Name </Text>
                <LoginInputField labelText=' Username: ' />
                <Text style={styles.label}>Last Name </Text>
                <LoginInputField labelText=' Password: ' password={true}/>
                <Text style={styles.label}>Organization (optional) </Text>
                <LoginInputField labelText=' Email: ' />
                {/* <Picker selectedValue="stuff" style={{ height: 60, color: 'white'}}>
                    <Picker.Item label='item' value='oh'/>
                </Picker> */}
                <TouchableOpacity onPress={()=>navigation.navigate('ProfileS')}
                style={styles.loginButton}>
                  <Text style={styles.loginText}>Create Profile</Text>
                </TouchableOpacity>
              </View>

              {/* <Text style={{display: flex, flexDirection: "row"}}> */}
              {/* <Text style={styles.need} >Already have an account? 
                {" "}
              </Text> */}
              <TouchableOpacity onPress={()=>navigation.navigate('MapS')}
            //   style={styles.loginButton}
              >
                <Text style={styles.login}>I'll do this later...</Text>
              </TouchableOpacity>
            {/* </Text> */}
              
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
       paddingHorizontal: 30, 
     },
     label: {
      paddingTop: 10, 
      paddingLeft: 10, 
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
  
  