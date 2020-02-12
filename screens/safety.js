import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';

/*dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };*/

export default function Safety() {
    return (
        <TouchableOpacity /*key = {index} */style={styles.policebutton}
        /*onPress={()=>{this.dialCall(4085477683)}}*/
        >
            <Text>
                POLICE
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    policebutton: {
        width: '80%', 
        height: 80, 

    },
});