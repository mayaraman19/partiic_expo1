import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';

//import HomeScreen from '../screens/unused_screens/HomeScreen';
import Login from '../screens/Login';
import Safety from '../screens/Safety';
import Signup from '../screens/Signup';
import ProfileScreen from '../screens/Profile';
import Map from '../screens/Map';

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
    ProfileS: ProfileScreen,
  },
  config
);

Profile.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if(navigation.state.index == 0 || navigation.state.index == 1) {
      tabBarVisible = false;
    }
    return {
      tabBarVisible,
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
  },
  config
);

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
};

MapStack.path = '';

const SafetyStack = createStackNavigator(
  {
    SafetyS: Safety,
  },
  config
);

SafetyStack.navigationOptions = {
  tabBarLabel: 'Safety',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
};

SafetyStack.path = '';

const tabNavigator = createBottomTabNavigator({
  //LeftStack,
  //HomeStack,
  Profile,
  MapStack,
  SafetyStack,
});

tabNavigator.path = '';

export default tabNavigator;
