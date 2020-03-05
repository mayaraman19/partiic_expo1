import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, Entypo } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';

//import HomeScreen from '../screens/unused_screens/HomeScreen';
import Login from '../screens/Login';
import Safety from '../screens/Safety1';
import Signup from '../screens/Signup';
import ProfileScreen from '../screens/Profile';
import Map from '../screens/Map';
import Report from '../screens/Report';
import Party from '../screens/Party';
import PartyCreate from '../screens/PartyCreate';
import CreateProfile from '../screens/CreateProfile'; 
import MyParties from '../screens/MyParties';
const config = {headerMode: 'none'};

// const config = Platform.select({
//   web: { headerMode: 'screen' },
//   default: {},
// });

// const HomeStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//   },
//   config
// );

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

// HomeStack.path = '';

const Profile = createSwitchNavigator(
  {
    LoginS: Login,
    SignupS: Signup,
    CrProfS: CreateProfile, 
    ProfileS: ProfileScreen,
  },
  config
);


Profile.navigationOptions =  {
  tabBarIcon: ({focused}) => (
    <Ionicons focused = {focused} name = "md-person" size = {40} />
  ),
  tabBarOptions: {
    style: {
      backgroundColor: '#75F6F2',
      color: 'red',
    },
    paddingVertical: '0%',
    activeBackgroundColor: '#19DAD4',
    showIcon: 'true',
    //tabBarVisible: Profile.navigationOptions,
    showLabel: false,
  },
};


Profile.navigationOptions = ({navigation, focused}) => {
  let tabBarVisible = true;
  let showIcon = true; 
  if(navigation.state.index == 0 || navigation.state.index == 1 || navigation.state.index == 2) {
    tabBarVisible = false;
    showIcon = false; 
  }
  return {
    tabBarVisible,
    showIcon,
  };
  
// if(tabVisible({navigation}) === booleeeen) {
//   tabBarLabel: 'Profile',
// },
//tabBarLabel: 'Profile',
  
};
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
//};

// LeftStack.navigationOptions = {
  
//   // tabBarIcon: ({ focused }) => (
//   //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   // ),
// };

Profile.path = '';

const MapStack = createStackNavigator(
  {
    MapS: Map,
    PartyScreen: Party,
    ReportS: Report,
  },
  config
);

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  tabBarIcon: ({focused}) => (
    <Entypo focused = {focused} name = "location-pin" size = {40} />

  ),
  tabBarOptions: {
    style: {
      backgroundColor: '#75F6F2',
      color: 'red',
    },
    paddingVertical: '0%',
    activeBackgroundColor: '#19DAD4',
    showIcon: 'true',
    showLabel: false,
  },
};

MapStack.path = '';

const SafetyStack = createStackNavigator(
  {
    SafetyS: Safety,
  },
  config
);


SafetyStack.navigationOptions = {
  //tabBarLabel: 'Safety',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  tabBarIcon: ({focused}) => (
    <Entypo focused ={focused} name = "phone" size = {40}/>
  ),
  tabBarOptions: {
    style: {
      backgroundColor: '#75F6F2',
      color: 'red',
    },
    paddingVertical: '0%',
    activeBackgroundColor: '#19DAD4',
    showIcon: 'true',
    showLabel: false,
  },
};

SafetyStack.path = '';

//just for now!! to easily navigate and see the page
// const ReportStack = createStackNavigator(
//   {
//     ReportS: Report,
//   },
//   config
// );

// ReportStack.navigationOptions = {
//   tabBarLabel: 'ReportTEMP',
//   // tabBarIcon: ({ focused }) => (
//   //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   // ),
// };

// ReportStack.path = '';

const PartyCreateStack = createStackNavigator(
  {
    PartyCreateS: PartyCreate,
  },
  config
);

PartyCreateStack.navigationOptions = {
  tabBarLabel: 'Create Party',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  tabBarIcon: ({focused}) => (
    <Entypo focused = {focused} name = "plus" size = {40} />

  ),
  tabBarOptions: {
    style: {
      backgroundColor: '#75F6F2',
      color: 'red',
    },
    paddingVertical: '0%',
    activeBackgroundColor: '#19DAD4',
    showIcon: 'true',
    showLabel: false,
  },
  
};


const tabNavigator = createBottomTabNavigator({
  //LeftStack,
  //HomeStack,
  Profile,
  MapStack,
  PartyCreateStack,
  SafetyStack,
  //ReportStack,
  // PartyCreateStack,
},
{
  tabBarOptions: {
    style: {
      backgroundColor: '#75F6F2',
      color: 'red',
    },
    paddingVertical: '0%',
    activeBackgroundColor: '#19DAD4',
    showIcon: 'true',
    showLabel: 'false',

  }
}
);

tabNavigator.path = '';

export default tabNavigator;