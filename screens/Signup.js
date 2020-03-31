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
  Picker
} from "react-native";

import LoginInputField from "../components/LoginInputField";

export default function Signup({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Login");
  };
  return (
    <>
      <KeyboardAvoidingView style={styles.avoidView} behavior="padding">
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <Image
              style={{ marginTop: 100, marginBottom: 50 }}
              source={require("../components/icons/ParTiiCnewer.png")}
            />
            <View style={styles.input}>
              <Text style={styles.label}>Username </Text>
              <LoginInputField labelText=" Username: " />
              <Text style={styles.label}>Password </Text>
              <LoginInputField labelText=" Password: " password={true} />
              <Text style={styles.label}>University Email </Text>
              <LoginInputField labelText=" Email: " />
              <Text style={styles.warning}>
                {" "}
                Please use your university email!{" "}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("CrProfS")}
                style={styles.loginButton}
              >
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            {/* <Text style={{display: flex, flexDirection: "row"}}> */}
            {/* <Text style={styles.need} >Already have an account?
                {" "}
              </Text> */}
            <TouchableOpacity onPress={() => navigation.navigate("LoginS")}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
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
  },
  warning: {
    color: "white",
    fontSize: 14,
    paddingTop: 10,
    textAlign: "center"
  },
  need: {
    color: "#75F6F2",
    fontSize: 14,
    textAlign: "center",
    paddingTop: 10
  },
  partiic: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 30,
    marginLeft: 50
  }
});
