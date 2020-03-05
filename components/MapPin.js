import React, {Component} from 'react';
import {withNavigation} from 'react-navigation'; 
import MapView, {Marker, Callout} from 'react-native-maps';

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



class MapPin extends Component {
    render(){
        const {
            partyName, 
            partyAddress, 
            partyDate, 
            partyCoordinate
        } = this.props; 
    return (
        <View>
           <Marker coordinate={{latitude: 34.06, longitude: -118.44}} >
                <Callout style={{width: 200}}>
                    <Text> {partyName} </Text>
                    <Text> {partyAddress} </Text>
                    <Text> {partyDate} </Text>

                </Callout>
            </Marker>
        </View>
    );
    }
    
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: "#7443FF",
        width: 350,
        justifyContent: "space-between",
        display: "flex", 
        flexDirection: "row",
        paddingLeft: 20, 
        paddingRight: 20, 
        paddingTop: 10, 
        paddingBottom: 10,
        marginVertical: 10, 
        borderRadius: 20, 
        
    },
    mainButton: {
        margin: 3, 


    }, 
    filterButton: {
        borderWidth: 1, 
        borderRadius: 20,
        borderColor: "white",
        width: 20
    },
    buttonText: {
        color: "white", 
        padding: 5, 
    },
    eventTitle: {
        fontWeight: "bold", 
        fontSize: 18, 
        color: "white"
    }, 
    eventAddress: {
        fontSize: 16, 
        color: "white"
    }
});

export default withNavigation(MapPin); 