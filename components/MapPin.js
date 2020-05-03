import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import MapView, { Marker, Callout } from "react-native-maps";
import axios from 'axios';

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
  TextInput
} from "react-native";

class MapPin extends Component {
  render() {
    const { partyName, partyAddress, partyDate} = this.props;
    var lat = 34.0654631; //default lat/long in case we hit an error
    var long = -118.4486436;
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${partyAddress}&key=AIzaSyAfVkUPSkzptZxFgU3H4iGF3pod9Mvn8mY`)
    .then((response) => {
      if (response.status == 200) {
        lat = response.data.results[0].geometry.location.lat;
        long = response.data.results[0].geometry.location.lng;
        console.log('\n\n\n\n');
        console.log(response.data.results[0].formatted_address);
        console.log(lat);
        console.log(long);
        // lat = response.data.geometry.location.lat;
        // long = response.data.geometry.location.lng;
        // console.log("hello");
        // console.log(lat);
        // console.log(long);
      }
    });
    return (
      <View>
        <Marker coordinate={{ latitude: lat, longitude: long}}>
          <Callout style={{ width: 200 }}>
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
    borderRadius: 20
  },
  mainButton: {
    margin: 3
  },
  filterButton: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    width: 20
  },
  buttonText: {
    color: "white",
    padding: 5
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
