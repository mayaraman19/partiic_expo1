import React, {Component} from 'react';
//import { useNavigation } from '@react-navigation/native';
import {
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
  ActivityIndicator
} from 'react-native';

import LoginInputField from '../components/LoginInputField';

export default class PartyCreate extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            isLoading: true, 
            dataSource: null, 
            partyNameInput: '', 
            partyAddress: '', 
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

    go(){
        this.props.navigation.navigate('MyPartiesS'); 
    }

    async submit(){
        let collection={}
        collection.name = this.state.partyNameInput
        collection.address = this.state.partyAddress
        console.log(JSON.stringify(collection));
        try {
            const response = await fetch('http://ucla-partic.herokuapp.com/', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              credentials: 'include',
              body: JSON.stringify(collection),
            });
            const status = response.status;
            if (status >= 200 && status < 300) {
              const data = await response.json();
              return (
                    console.log("teehee"), 
                    {err: false,},
                    console.log("hi"),
                    this.props.navigation.navigate('MyPartiesS')
              ); 
            } else {
              const data = await response.json();
              throw new Error(data.message);
            }
          } catch (e) {
            return (
                console.log("caught an error lmao coooool"),
                {err: e.message,},
                this.props.navigation.navigate('MyPartiesS') )
          }
          
    }






    // submit(){
    //     // console.log(this.state.partyNameInput)
    //     // console.log(this.state.partyAddress)
    //     let collection={}
    //     collection.name = this.state.partyNameInput
    //     collection.address = this.state.partyAddress
    //     console.log(JSON.stringify(collection));
    //     // fetch('http://ucla-partic.herokuapp.com/', {
    //     //         method: 'POST', 
    //     //         credentials: 'omit', 
    //     //         headers: new Headers ({
    //     //             'Content-Type': 'application/json'
    //     //         }), 
    //     //         body: JSON.stringify(collection), 
    //     //     }) .then(res=>res.json())
    //     //     // .then(res=>res.text())
    //     //     .then(console.log(JSON.stringify(collection)))
    //     //     .catch(e=>console.error('Error:', e))
    //     //     .then(response=>console.log('Succ:', response))
    //     this.props.navigation.navigate('MyPartiesS'); 
    // }

    render() {
        if (this.state.isLoading){
            return(
                <View><ActivityIndicator /></View>
            )
        }
        else
        {
            // console.log("hihihi"); 
            return (
                <ScrollView style = {styles.background}>
                    <View style = {styles.header}>
                        <Text style = {styles.headerText}>
                            HOST A PARTY
                        </Text>
                    </View>
                    <TouchableOpacity style = {styles.photoButton}>
                        <Text style = {styles.photoText}>
                            Upload Party Image
                        </Text>
                    </TouchableOpacity>
                    <Text>{'\n'}</Text>
                    <View style={styles.input}>
                        <Text style={styles.label}>  Party Name </Text>
                        <LoginInputField labelText=' Username: ' myOnChangeText={(text) => this.setState({partyNameInput:text})}/>
                        <Text style={styles.label}>  When </Text>
                        <LoginInputField labelText=' Username: ' />
                        <Text style={styles.label}>  Where </Text>
                        <LoginInputField labelText=' Username: ' myOnChangeText={(text) => this.setState({partyAddress:text})}/>
                        <Text style={styles.label}>  Price </Text>
                        <TextInput keyboardType='numeric' style={{borderBottomColor: "white", paddingBottom: 5, borderBottomWidth: 1, marginHorizontal:15, fontSize: 20, color: "white", marginTop: 10}}/>
                        {/* <LoginInputField labelText=' Username: ' myKeyType='numeric'/> */}
                        <Text style={styles.label}>  Venmo Handle </Text>
                        <LoginInputField labelText=' Username: ' />
                        {/* <Text style={styles.label}>  Tags </Text> */}
        
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 10}}>
                            <TouchableOpacity style={styles.tags}><Text style={styles.tagText}>Drinks</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.tags}><Text style={styles.tagText}>Guys Allowed</Text></TouchableOpacity>
                            {/* <TouchableOpacity></TouchableOpacity> */}
                        </View>
                        <TouchableOpacity 
                        style={styles.loginButton} 
                        // onPress={()=>this.props.navigation.navigate('MyPartiesS')}
                        onPress={()=>{this.submit()}}
                        >
                          <Text style={styles.loginText}>CREATE PARTY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyPartiesS')}>
                        <Text style={styles.login}>Go to my parties</Text>
                      </TouchableOpacity>
                        <Text>{'\n'}</Text>
                        <Text>{'\n'}</Text>
                        
                        <TouchableOpacity style={{borderWidth: 1, borderColor: "white"}}
                            onPress={() => Linking.openURL('http://google.com')}>
                            <Text style={{color: 'white', fontSize: 20}}>Google</Text>
                        </TouchableOpacity>
                        
                      </View>            
                </ScrollView>
        
            );
        }
    
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#141516',
    },
    header: {
        backgroundColor: '#000000',
        height: 130,
        width: '100%',
        marginBottom: 30,
        alignSelf: 'center',
        alignItems: 'center',
        shadowOffset:{  width: 2,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    headerText: {
        fontSize: 32,
        fontStyle: 'italic',
        color: 'white',
        paddingVertical: 60,
    },
    photoButton: {
        width: '60%',
        height: 160,
        borderRadius: 11,
        borderWidth: 5,
        alignSelf: 'center',
        borderStyle: 'dashed',
        borderColor: 'white',
        alignItems: 'center',
        paddingTop: 64,
        paddingBottom: 64,
    },
    photoText: {
        fontSize: 16,
        color: 'white',
    },
    // input: {
    //     alignSelf: 'flex-start',
    //     color: '#141516',
    //     fontSize: 32,
    //     color: 'white',
    //     marginTop: 30,
    //     marginLeft: 30,
    //     borderBottomColor: 'white',
    //     borderBottomWidth: 2,
    // },
    smallInput: {
        alignSelf: 'flex-start',
        color: '#141516',
        fontSize: 20,
        color: 'white',
        marginTop: 30,
        marginLeft: 30,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    other: {
        marginTop: 30,
        marginLeft: 30,
        fontSize: 16,
        color: 'white',
    },

    loginText: {
        fontSize: 18, 
        paddingTop: 12,
        textAlign: "center", 
        color: "white", 
        fontWeight: "bold", 
        // color: "blue"
      },
      input:{
        paddingHorizontal: 10, 
        alignContent: "center",
      },
      label: {
        // padding: 10, 
        paddingTop: 10, 
        paddingLeft: 10, 
        color: "white", 
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
      },
      tags: {
          borderRadius: 10, 
          borderWidth: 1, 
          borderColor: "white", 
          color: "white", 
          margin: 5, 

      }, 
      tagText: {
          color: "white", 
          padding: 8, 
          fontSize: 15
          
      },
      login: {
        color: "#75F6F2", 
        fontSize: 14, 
        // textAlign: "center", 
        paddingTop: 10, 
        textDecorationLine: 'underline', 
        textAlign: "center"
      },


      wrapper: {
        display: "flex",
      }, 
      inputField: {
        borderBottomWidth: 1,
        borderBottomColor: "white", 
        borderRadius: 11, 
        paddingTop: 1,
        paddingLeft: 10, 
        paddingBottom: 5, 
        height: 30,
        margin: 10, 
      }
});