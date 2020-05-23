import React from "react";
import {
    Alert,
  SafeAreaView,
  Component,
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
} from "react-native";
import { render } from "react-dom";

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
    }
    showAlert = () => {
        Alert.alert(
            'Are you sure?',
            '',
            [
                {text: 'Yes', onPress: () => this.props.navigation.navigate('LoginS')},
                {text: 'No', onPress: () => this.props.navigation.navigate('ProfileS')}
            ],
            {cancelable: false}
        );
    }
    render() {
        return (
            <View 
            style={styles.background}
            >
                <TouchableOpacity 
                style={styles.button}
                onPress={this.showAlert}>
                    <Text style={styles.lgtext}>LOG OUT</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.jkbutton}
                    onPress={() => this.props.navigation.navigate('ProfileS')}>
                    <Text style={styles.jktext}>Just kidding...</Text>
                </TouchableOpacity>
            </View>
            

        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    button: {
        top: '33%',
        backgroundColor: 'rgba(244, 73, 73, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 40,
        borderRadius: 20,
    },
    lgtext: {
        color: 'white',
    },
    jkbutton: {
        top: '50%',
    },
    jktext: {
        color: '#19DAD4',
        textDecorationLine: 'underline',
    }


});