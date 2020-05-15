import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
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
} from "react-native";
import { AuthSession } from "expo";
import PartyListItem from "../components/PartyListItem";
import MapPin from "../components/MapPin";
import { tsConstructorType } from "@babel/types";
import axios from "axios";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isLoadingTwo: true,
      isLoadingThree: true,
      dataSource: null,
      guysAllowed: true,
      freeEntry: true,
      partyToday: true,
      purtyLats: null,
      purtyLongs: null,
      partyLongs: null
    };
  }

  // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${partyAddress}&key=AIzaSyAfVkUPSkzptZxFgU3H4iGF3pod9Mvn8mY`)
  //   .then((response) => {
  //     if (response.status == 200) {
  //       lat = response.data.results[0].geometry.location.lat;
  //       long = response.data.results[0].geometry.location.lng;
  //       console.log('\n\n\n\n');
  //       console.log(response.data.results[0].formatted_address);
  //       console.log(lat);
  //       console.log(long);
  //       // lat = response.data.geometry.location.lat;
  //       // long = response.data.geometry.location.lng;
  //       // console.log("hello");
  //       // console.log(lat);
  //       // console.log(long);
  //     }
  //   });
  componentDidMount() {
    this.getParties();
  }

  getParties() {
    fetch("http://ucla-partic.herokuapp.com/")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });

        let allLats = {};
        let allLongs = {};

        console.log("length???");
        console.log(responseJson.length);
        let oohbaaby = responseJson.length;

        responseJson.map((val, key) => {
          let myitem = this.state.dataSource[key].address;
          console.log("myitem");
          console.log(myitem);
          axios
            .get(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${myitem}&key=AIzaSyAfVkUPSkzptZxFgU3H4iGF3pod9Mvn8mY`
            )
            .then(response => {
              if (response.status == 200) {
                console.log(response.data.results[0].formatted_address);
                let blehLat = response.data.results[0].geometry.location.lat;
                let blehLong = response.data.results[0].geometry.location.lng;
                allLats[key] = blehLat;
                allLongs[key] = blehLong;
                console.log(allLats[key]);
                this.setState({
                  partyLongs: blehLong,
                  isLoadingTwo: false
                });
                if (key == oohbaaby - 1) {
                  this.setState({
                    purtyLats: allLats,
                    purtyLongs: allLongs,
                    isLoadingThree: false
                  });
                }
                console.log("buh bye");
              }
            });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  guysNotAllowed() {
    this.setState({ guysAllowed: !this.state.guysAllowed });
  }

  noFreeEntry() {
    this.setState({ freeEntry: !this.state.freeEntry });
  }

  noPartyToday() {
    this.setState({ partyToday: !this.state.partyToday });
  }

  render() {
    var bColor = "transparent";

    if (!this.state.guysAllowed) {
      bColor = "#eee";
    }

    const mybColor = bColor;

    if (
      this.state.isLoading ||
      // this.state.isLoadingTwo ||
      this.state.isLoadingThree
    ) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      console.log("helllllsjdfa;lkdfj");
      console.log(this.state.purtyLats);
      let pins = this.state.dataSource.map((val, key) => {
        return (
          <View key={key}>
            <MapPin
              partyName={val.name}
              partyAddress={val.address}
              partyDate={val.dateTime}
              partyLat={this.state.purtyLats[key]}
              partyLong={this.state.purtyLongs[key]}
            />
          </View>
        );
      });
      let parties = this.state.dataSource.map((val, key) => {
        return (
          <View key={key}>
            <PartyListItem
              partyName={val.name}
              partyAddress={val.address}
              partyDate={val.dateTime}
              guysAllowed={this.state.guysAllowed}
              freeEntry={this.state.freeEntry}
              partyToday={this.state.partyToday}
            />
          </View>
        );
      });

      // what u gonna see on the screen baby
      return (
        <View style={styles.background}>
          <MapView
            style={styles.mapStyle}
            region={{
              latitude: 34.06,
              longitude: -118.44,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            {pins}
          </MapView>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.filterButton, { backgroundColor: "transparent" }]}
              onPress={() => this.noPartyToday()}
            >
              <Text style={styles.buttonText}>Parties Today</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterButton, { backgroundColor: { bColor } }]}
              onPress={() => this.guysNotAllowed()}
            >
              <Text style={styles.buttonText}>Guys Allowed</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style = {styles.filterButton}><Text style = {styles.buttonText}>Free Drinks</Text></TouchableOpacity> */}
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => this.noFreeEntry()}
            >
              <Text style={styles.buttonText}>Free Entry</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{ marginBottom: 10 }}>{parties}</ScrollView>
        </View>
      );
    }
  } //render
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: 350
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
    paddingBottom: 10
  },
  filterButton: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white"
  },
  buttonText: {
    color: "white",
    padding: 5
  },
  eventTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white"
  }
});
