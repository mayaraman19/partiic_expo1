// login
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
//import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
  Linking,
  TextInput,
  ImageBackground,
  ActivityIndicator
} from "react-native";

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    };
  }

  componentDidMount() {
    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      let pic = this.state.dataSource.map((val, key) => {
        return (
          <View key={key}>
            <ImageBackground
              source={val.url}
              style={{ width: "100%", height: "100%" }}
            >
              <Text style={{ textAlignVertical: "center" }}>OOH BABY</Text>
            </ImageBackground>
          </View>
        );
      });
      return (
        <View>
          <ImageBackground
            source={require("../components/pics/johnsmith.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 610,
                backgroundColor: "black",
                padding: 30
              }}
            >
              <View>
                <Text style={{ color: "white", fontSize: 30 }}>
                  Norman Xavier{" "}
                </Text>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Creative Labs{" "}
                </Text>
              </View>
              <View style={{ width: "40%" }}>
                <TouchableOpacity
                  style={styles.edit}
                  onPress={() => this.props.navigation.navigate("CrProfS")}
                >
                  <Text>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  edit: {
    backgroundColor: "#19DAD4",
    color: "white",
    alignItems: "center",
    padding: 10,
    margin: 10,
    marginLeft: 20,
    borderRadius: 11
  }
});
