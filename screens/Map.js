import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import { AuthSession } from 'expo';

/*dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };*/

export default function Map({navigation}) {
    return (
        <View style = {styles.background}>
            <Image source={require('../components/pics/map.png')} />
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.filterButton}><Text style = {styles.buttonText}>Parties Today</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.filterButton}><Text style = {styles.buttonText}>1 Mile</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.filterButton}><Text style = {styles.buttonText}>Free Drinks</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.filterButton}><Text style = {styles.buttonText}>Free Entry</Text></TouchableOpacity>
            </View>
            <View style = {styles.row}>
                <TouchableOpacity onPress={(()=>navigation.navigate('PartyScreen'))}><Text style = {styles.eventTitle}>1. Fundrager</Text></TouchableOpacity>
                <View style = {{width: "20%", flexDirection: "row", justifyContent: "space-evenly"}}>
                    <TouchableOpacity style = {styles.filterButton}><Text style = {styles.buttonText}>L</Text></TouchableOpacity>
                    <TouchableOpacity style = {styles.filterButton}><Text style = {styles.buttonText}>F</Text></TouchableOpacity>
                </View>
                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    row: {
        backgroundColor: "red",
        width: "100%",
        justifyContent: "space-between",
        display: "flex", 
        flexDirection: "row",
        paddingLeft: 20, 
        paddingRight: 20, 
        paddingTop: 10, 
        paddingBottom: 10,
    },
    filterButton: {
        borderWidth: 1, 
        borderRadius: 20,
        borderColor: "white",
    },
    buttonText: {
        color: "white", 
        padding: 5, 
    },
    eventTitle: {
        fontWeight: "bold", fontSize: 18, color: "white"
    }
});