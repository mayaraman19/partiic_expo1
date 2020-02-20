import React, {Component} from 'react';
//import { useNavigation } from '@react-navigation/native';
import {
    Image,
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

export default function Party({navigation}) {
    return (
        <View style = {styles.background}>
            <Image source={(require('../components/pics/81540656_10215276407335785_2042179395023536128_n 3.png'))} />
            <Text>
                hello
            </Text>

        </View>

    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1e272e',
        flex: 1,
    },

});