import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextInput } from "react-native-gesture-handler";


class LoginInputField extends Component {
  render() {
    const 
    { 
        labelText, 
        labelTextSize, 
        inputType, 
        textColor, 
        borderColor, 
        password, 
        labelWidth, 
        keyboardType, 
        myOnChangeText, 
    } = this.props;

    const inputColor = textColor || Colors.white; 
    const myfontSize = labelTextSize || 18; 
    const myKeyType = keyboardType || "default"; 

    return (
      <View style={styles.wrapper}>
        <TextInput 
        autoCorrect={false}
        style={[{color:inputColor}, {width:labelWidth}, styles.inputField]}
        // secureTextEntry={inputType === 'password'}
        placeholder={labelText}
        secureTextEntry={password}
        fontSize={myfontSize}
        keyboardType={myKeyType}
        onChangeText={myOnChangeText}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
export default LoginInputField;