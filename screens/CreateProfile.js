// login
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
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
  Image,
  Linking,
  Picker,
  TextInput
} from "react-native";

import LoginInputField from "../components/LoginInputField";

export default class CreateProfile extends React.Component {
  render() {
    return (
      <>
        <KeyboardAvoidingView style={styles.avoidView} behavior="padding">
          <SafeAreaView>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
                padding: 20
              }}
            >
              ABOUT YOU
            </Text>
            <TouchableOpacity
              style={{
                borderStyle: "dashed",
                borderColor: "white",
                borderWidth: 2,
                width: "80%",
                height: "30%",
                alignSelf: "center",
                borderRadius: 20,
                marginBottom: 50
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  paddingTop: 75
                }}
              >
                Upload Image
              </Text>
            </TouchableOpacity>
            <View style={styles.input}>
              <Text style={styles.label}>First Name </Text>
              <LoginInputField labelText=" Password: " />
              <Text style={styles.label}>Last Name </Text>
              <LoginInputField labelText=" Password: " password={true} />
              <Text style={styles.label}>Organization (optional) </Text>
              <LoginInputField labelText=" Email: " />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProfileS")}
                style={styles.loginButton}
              >
                <Text style={styles.loginText}>Create Profile</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MapS")}
            >
              <Text style={styles.login}>I'll do this later...</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  avoidView: {
    flex: 1,
    backgroundColor: "black"
  },
  input: {
    paddingHorizontal: 10
  },
  label: {
    paddingTop: 10,
    paddingLeft: 20,
    color: "white"
  },
  loginText: {
    fontSize: 18,
    paddingTop: 12,
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  login: {
    color: "#75F6F2",
    fontSize: 14,
    paddingTop: 10,
    textDecorationLine: "underline",
    textAlign: "center"
  },
  loginButton: {
    borderRadius: 11,
    marginTop: 30,
    paddingTop: 1,
    paddingBottom: 5,
    fontSize: 18,
    backgroundColor: "#19DAD4",
    height: 50,
    textAlign: "center",
    marginHorizontal: 15
  }
});
