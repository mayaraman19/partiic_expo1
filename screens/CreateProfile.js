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

export default class CreateProfile extends React.Component { 
     render() {
      return (
        <>
        <>
        <KeyboardAvoidingView style={styles.avoidView} behavior="padding">
        <SafeAreaView>
          
              <Text style={{color: "white", fontSize: 24, fontWeight: "bold", padding: 20}}>ABOUT YOU</Text>
              <TouchableOpacity style={{borderStyle: "dashed", borderColor: "white", borderWidth: 2, width: "80%", height: "30%", alignSelf: "center", borderRadius: 20, marginBottom: 50}}>
                  <Text style={{color: "white", fontSize: 20, textAlign: "center", paddingTop: 75}}>Upload Image</Text>
              </TouchableOpacity>
              <View style={styles.input}>
              <Text style={styles.label}>First Name </Text>
                {/* <LoginInputField labelText=' Username: ' /> */}
                {/* <View style={styles.wrapper}>
                  <TextInput 
                  autoCorrect={false}
                  style={[{color:inputColor}, {width:labelWidth}, styles.inputField]}
                  // secureTextEntry={inputType === 'password'}
                  placeholder={labelText}
                  secureTextEntry={password}
                  fontSize={myfontSize}
                  keyboardType={myKeyType}
                  />
                </View> */}
                <LoginInputField labelText=' Password: '/>

                {/* hihihi */}
                <Text style={styles.label}>Last Name </Text>
                <LoginInputField labelText=' Password: ' password={true}/>
                <Text style={styles.label}>Organization (optional) </Text>
                <LoginInputField labelText=' Email: ' />
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileS')}
                style={styles.loginButton}>
                  <Text style={styles.loginText}>Create Profile</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('MapS')}>
                <Text style={styles.login}>I'll do this later...</Text>
              </TouchableOpacity>
              
        </SafeAreaView>
        </KeyboardAvoidingView>
      </>
      </>
      );
    }
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
  
  