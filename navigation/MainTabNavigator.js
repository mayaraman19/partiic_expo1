import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';

import Home from '../screens/Home'
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import Safety from '../screens/Safety';
import Signup from '../screens/Signup';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

//the home that we're going to use
const HomieStack = createStackNavigator(
  {
    Homie: Home,
  },
  config
);

HomieStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

HomieStack.path = '';

/*const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';
*/

const LoginStack = createStackNavigator(
  {
    LoginS: Login,
    SignupS: Signup,
  },
  config
);

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

LoginStack.path = '';

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

// const SignupStack = createStackNavigator(
//   {
//     SignupS: Signup,
//   },
//   config
// );

// SignupStack.navigationOptions = {
//   tabBarLabel: null,
//   headerMode: 'false',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SignupStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  HomieStack,
  LoginStack,
  //LinksStack,
  //SettingsStack,
  SafetyStack,
});

tabNavigator.path = '';

/*const TotalStack = createStackNavigator({ 
  tabNavigator,
});

TotalStack.path = '';*/

export default tabNavigator;
