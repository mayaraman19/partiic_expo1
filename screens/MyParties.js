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

// const coordinates={
//     latitude: 34.06, 
//     longitude: -118.44
// }

export default class MyParties extends React.Component {  
    
  constructor(props){
      super(props); 
      this.state = {
          isLoading: true, 
          dataSource: null, 
      }
  }
  
  componentDidMount(){

      //return fetch('https://facebook.github.io/react-native/movies.json')
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
  
  render(){

      if (this.state.isLoading){
          return(
              <View><ActivityIndicator /></View>
          )
      }
      else
      {
          // let movies = this.state.dataSource.map((val, key) => {
          //     return <View key={key}><PartyListItem partyName={val.title} partyAddress="Gayley" partyDate="date"/></View>
          // })

          let parties = this.state.dataSource.map((val, key) => {
              return (
                <View key={key}><PartyListItem partyName={val.name} partyAddress={val.address} partyDate="date" guysAllowed={true}/></View>
              );
          })

          // what u gonna see on the screen baby
          return (
            <View style = {styles.background}>
                <ScrollView>
                    <Text style={{color: "white", fontSize: 16, paddingLeft: 10}}>Current Listings</Text>
                    <TouchableOpacity 
                    style={styles.loginButton}>
                      <Text style={styles.loginText}>Edit Listing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('PartyCreateS')}>
                    <Text style={styles.login}>Create a new party</Text>
                  </TouchableOpacity>
                    <Text style={{color: "white", fontSize: 16, paddingLeft: 10}}>Past Events</Text>
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
        paddingTop: 50, 
    },
    login: {
        color: "#75F6F2", 
        fontSize: 14, 
        // textAlign: "center", 
        paddingTop: 10, 
        textDecorationLine: 'underline', 
        textAlign: "center"
      },
    loginText: {
        fontSize: 18, 
        paddingTop: 12,
        textAlign: "center", 
        color: "white", 
        fontWeight: "bold", 
        width: 325,
      },
      loginButton: {
        borderRadius: 11, 
        marginTop: 30,
        paddingTop: 1,
        paddingBottom: 5, 
        fontSize: 18, 
        height: 18,
        backgroundColor: '#19DAD4', 
        height: 50, 
        textAlign: "center",
        marginHorizontal: 15, 
        marginBottom: 30, 
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