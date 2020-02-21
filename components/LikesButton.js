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

class LikesButton extends Component {
    render(){
        const 
        { 
            number,
        } = this.props;

    const num = number; 
    return (
            <>
            
            <TouchableOpacity style={styles.topButton}><View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}><Image source={require("../components/icons/likeIcon.png")} /><Text style={styles.text}>{num}</Text></View></TouchableOpacity>
            </>
    );
    }
    
}

const styles = StyleSheet.create({
    topButton: {
        margin: 10,
        borderRadius: 10, 
        padding: 10, 
        backgroundColor: "#19DAD4", 
        width: 130, 
        paddingHorizontal: 30, 

    },
    text: {
        color: "white", 
        fontSize: 15, 
    }

});

export default LikesButton; 