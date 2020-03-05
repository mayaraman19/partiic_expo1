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


// export default function Map({navigation}) {
    
export default class Map extends React.Component {  
    
    constructor(props){
        super(props); 
        this.state = {
            isLoading: true, 
            dataSource: null, 
        }
    }
    
    componentDidMount(){

        return fetch('https://facebook.github.io/react-native/movies.json')
            .then( (response) => response.json() )
            .then( (responseJson) => {

                this.setState(
                    {
                        isLoading: false, 
                        dataSource: responseJson.movies,
                    }
                )

            })
            .catch((error) => {
                console.log(error)
            });

    }
    
    render(){

        if (this.state.isLoading){
            return(
                <View><ActivityIndicator /></View>
            )
        }
        else
        {
            let movies = this.state.dataSource.map((val, key) => {
                return <View key={key}><PartyListItem partyName={val.title} partyAddress="Gayley" partyDate="date"/></View>
            })


            // what u gonna see on the screen baby
            return (
                <View style = {styles.background}>
                    <MapView style={styles.mapStyle} region={{latitude: 34.06, longitude: -118.44, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}>
                    <MapPin partyName="hello" partyAddress="address" partyDate="insert date here"/>
                    </MapView>
                    <View style = {styles.row}>
                        <TouchableOpacity style = {styles.filterButton}><Text style = {styles.buttonText}>Parties Today</Text></TouchableOpacity>
                        <TouchableOpacity style = {styles.filterButton}><Text style = {styles.buttonText}>1 Mile</Text></TouchableOpacity>
                        <TouchableOpacity style = {styles.filterButton}><Text style = {styles.buttonText}>Free Drinks</Text></TouchableOpacity>
                        <TouchableOpacity style = {styles.filterButton}><Text style = {styles.buttonText}>Free Entry</Text></TouchableOpacity>
                    </View>
                    <ScrollView>
                        {movies}
                        {/* <PartyListItem partyName={movies} partyAddress="Gayley" partyDate="date"/>
                        <PartyListItem partyName=";lskfdj;alskfhs;" partyAddress="Gayley" partyDate="date"/>
                        <PartyListItem partyName=";lskfdj;alskfhs;" partyAddress="Gayley" partyDate="date"/>
                        {movies}
                        {movies[0]} */}
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