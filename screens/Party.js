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
// import { Linking } from 'expo';
import LikesButton from '../components/LikesButton';
import StreetDisplay from '../components/StreetDisplay';

export default function Party({navigation}) {
    return (
        <View style = {styles.background}>
            <Text>;skfjs;ljf;lsafj</Text>
            <Image source={require("../components/pics/rhosig.png")} />
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                <LikesButton number="123" />
                <LikesButton number="123"/>
                <TouchableOpacity><Image style={{marginTop: 20}} source={require("../components/icons/flag.png")}/></TouchableOpacity>
            </View>
            <Text style={{ color: "white", fontSize: 30 }}>ORGANIZATION</Text>
            <StreetDisplay number="649 Gayley"/>
            <StreetDisplay number="10pm-2am"/>
            <View style={{borderBottomWidth: 2, borderBottomColor: "#19DAD4", padding: 10, marginHorizontal: 15,}}/>
            <View style={styles.appBox}>
                <Image source={require('../components/icons/venmo.png')} />
                <Image source={require('../components/icons/venmo.png')} />
                <Image source={require('../components/icons/venmo.png')} />
                {/* <Image source={require('../components/icons/venmo.png')} /> */}
                <TouchableOpacity style={styles.report} onPress={(()=>navigation.navigate('ReportS'))}><Text style={{color: "white"}}>REPORT</Text></TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        flex: 1,
    },
    topButton: {
        margin: 10,
        borderRadius: 10, 
        padding: 10, 
        backgroundColor: "#19DAD4", 
    }, 
    appBox: {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-evenly", 
        paddingVertical: 20, 
        backgroundColor: "#484848", 
        marginTop: 15, 
        marginHorizontal: 15, 
        borderRadius: 10, 

    }, 
    report: {
        backgroundColor: "#F44949", 
        borderRadius: 10, 
        marginVertical: 10, 
        paddingTop: 8, 
        paddingHorizontal: 15, 

    }

});