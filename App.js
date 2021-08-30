/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Webpage from './Webpage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Menus from './Menus';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, useColorScheme} from 'react-native';
import InfoPage from './InfoPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SpecialInfo from './SpecialInfo'

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="webpage" component={Webpage} />
        <Stack.Screen name="infopage" component={InfoPage} />
        <Stack.Screen name="specialinfo" component={SpecialInfo} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'white',
    flex: 1,
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'pricetag-outline' : 'pricetag-outline';
          } else if (route.name === 'menus') {
            iconName = focused ? 'newspaper-outline' : 'newspaper-outline';
          } else {
            iconName = 'newspaper-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color="black" />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{title: 'Specials'}}
        style={styles.header}
      />
      <Tab.Screen name="menus" component={Menus} options={{title: 'Menus'}} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
