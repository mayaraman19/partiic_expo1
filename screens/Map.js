import React from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { AuthSession } from 'expo';
import PartyListItem from '../components/PartyListItem';
import MapPin from '../components/MapPin';
import { tsConstructorType } from '@babel/types';

    
export default class Map extends React.Component {  
    
    constructor(props){
        super(props); 
        this.state = {
            isLoading: true, 
            dataSource: null, 
            guysAllowed: true, 
            freeEntry: true, 
            partyToday: true, 
        }
    }
    
   
    
    componentDidMount(){

        return fetch('http://ucla-partic.herokuapp.com/')

            .then( (response) => response.json() )
            .then( (responseJson) => {

                this.setState(
                    {
                        isLoading: false, 
                        dataSource: responseJson,
                    }
                )

            })
            .catch((error) => {
                console.log(error)
            });
    }
    

    guysNotAllowed(){
        this.setState({guysAllowed: !this.state.guysAllowed}); 
    }

    noFreeEntry(){
        this.setState({freeEntry: !this.state.freeEntry}); 
    }

    noPartyToday(){
        this.setState({partyToday: !this.state.partyToday}); 
    }
    
    render(){

        var bColor="transparent"; 

        if (!this.state.guysAllowed)
        {
            bColor = "#eee"; 
        }
            
        const mybColor = bColor; 

        if (this.state.isLoading){
            return(
                <View><ActivityIndicator /></View>
            )
        }
        else
        {
            let pins = this.state.dataSource.map((val, key) => {
                return <View key={key}><MapPin partyName={val.name} partyAddress={val.address} partyDate={val.dateTime}/></View>
            })
            let parties = this.state.dataSource.map((val, key) => {
                return <View key={key}><PartyListItem partyName={val.name} partyAddress={val.address} partyDate={val.dateTime} guysAllowed={this.state.guysAllowed} freeEntry={this.state.freeEntry} partyToday={this.state.partyToday}/></View>
            })

            // what u gonna see on the screen baby
            return (
                <View style = {styles.background}>
                    <MapView style={styles.mapStyle} region={{latitude: 34.06, longitude: -118.44, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}>
                    {pins}
                    </MapView>
                    <View style = {styles.row}>
                        <TouchableOpacity style = {[styles.filterButton, {backgroundColor: "transparent"}]} onPress={()=>this.noPartyToday()}><Text style = {styles.buttonText}>Parties Today</Text></TouchableOpacity>
                        <TouchableOpacity style = {[styles.filterButton, {backgroundColor: {bColor}}]} onPress={()=>this.guysNotAllowed()}><Text style = {styles.buttonText}>Guys Allowed</Text></TouchableOpacity>
                        {/* <TouchableOpacity style = {styles.filterButton}><Text style = {styles.buttonText}>Free Drinks</Text></TouchableOpacity> */}
                        <TouchableOpacity style = {styles.filterButton} onPress={()=>this.noFreeEntry()}><Text style = {styles.buttonText}>Free Entry</Text></TouchableOpacity>
                    </View>
                    <ScrollView style={{marginBottom: 10}}>
                        {parties}
                    </ScrollView>

                </View>
            );
        }

    } //render
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: 350,
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
        fontWeight: "bold", 
        fontSize: 18, 
        color: "white"
    }
});