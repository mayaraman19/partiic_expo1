import React, { Component } from "react";
import { withNavigation } from "react-navigation";
//import { useNavigation } from '@react-navigation/native';
import {
  Image,
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
  TextInput
} from "react-native";

class PartyListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //guysAllowed: true,
      freeEntry: true,
      partyToday: true
    };
  }
  render() {
    const {
      partyName,
      partyAddress,
      partyDate = this.state.partyDate,
      guysAllowed,
      //guysAllowed = this.state.guysAllowed,
      freeEntry = this.state.freeEntry,
      partyToday = this.state.partyToday
    } = this.props;

    if (!guysAllowed) {
      return (
        <Text style={{ fontSize: 30, color: "white", top: 600 }}>
          NO GUYS ALLOWED
        </Text>
      );
    } else {
      return (
        <View style={styles.row}>
          <View>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={() => this.props.navigation.navigate("PartyScreen")}
            >
              <Text style={styles.eventTitle}>{partyName}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={() => this.props.navigation.navigate("PartyScreen")}
            >
              <Text style={styles.eventAddress}>{partyAddress}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={() => this.props.navigation.navigate("PartyScreen")}
            >
              <Text style={styles.eventAddress}>{partyDate}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "15%",
              display: "flex"
            }}
          >
            <TouchableOpacity>
              <Image
                style={{ marginTop: 11 }}
                source={require("../components/icons/likeIcon.png")}
              />
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity>
              <Image
                style={{ marginTop: 0 }}
                source={require("../components/icons/flag.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#7443FF",
    width: 350,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 10,
    borderRadius: 20
  },
  mainButton: {
    margin: 3
  },
  filterButton: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    width: 20
  },
  buttonText: {
    color: "white",
    padding: 5
  },
  eventTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white"
  },
  eventAddress: {
    fontSize: 16,
    color: "white"
  }
});

export default withNavigation(PartyListItem);
