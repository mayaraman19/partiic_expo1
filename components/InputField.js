import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextInput } from "react-native-gesture-handler";


class InputField extends Component {
  render() {
    const 
    { 
        labelText, 
        labelTextSize, 
        inputType, 
        textColor, 
        borderColor, 
        password
    } = this.props;

    const inputColor = textColor || Colors.black; 
    const fontSize = labelTextSize || 24; 

    return (
      <View style={styles.wrapper}>
        <TextInput 
        autoCorrect={false}
        style={[{color:inputColor}, styles.inputField]}
        // secureTextEntry={inputType === 'password'}
        placeholder={labelText}
        secureTextEntry={password}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    paddingTop: 10, 
    paddingBottom: 10
  }, 
  inputField: {
    // borderBottomWidth: 1,
    // borderTopWidth: .5,
    // borderRightWidth: 1, 
    // borderLeftWidth: 1, 
    borderRadius: 11, 
    paddingTop: 1,
    paddingLeft: 10, 
    paddingBottom: 5, 
    fontSize: 18, 
    backgroundColor: '#AFAFAF', 
    height: 50
  }
});
export default InputField;