import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button, 
    TouchableOpacity
  } from 'react-native';
//import Login from 'Login';

export default class Home extends Component {
    render() {
      return (
        <>
          {/* <View>
        <Text style={styles.partiic}> Welcome to Partiic</Text> 
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Go to Signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        </View> */}
        {/* <Login /> */}
        <Text style={{textAlign: "center", color: "blue", paddingTop: 300}}> welcome 2 partiic </Text>
        <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.button}>login</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}><Text style={styles.button}>signup</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Text style={styles.button}>home</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}><Text style={styles.button}>profile</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('EventDescription')}><Text style={styles.button}>event</Text></TouchableOpacity>
        </View>
        </>
      );
    }
  }
  
  const styles = StyleSheet.create({
    partiic: {
      textAlign: 'center', 
      fontSize: 30, 
      marginTop: 50, 
    },
    wrapper: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        position: "absolute",
        left: 0, 
        right: 0, 
        bottom: 0, 
        marginTop: 10, 
        padding: 10
      }, 
      button: {
          fontSize: 12,
          color: "blue"
      }
  });