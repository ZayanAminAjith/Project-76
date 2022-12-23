import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftScreen from './screens/SpaceCrafts';
import StarScreen from './screens/StarMap';

const Stack = createStackNavigator()

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"} screenOptions={{headerShown:false}}>
          <Stack.Screen name={"Home"} component={HomeScreen}/>
          <Stack.Screen name={"DailyPic"} component={DailyPicScreen}/>
          <Stack.Screen name={"SpaceCraft"} component={SpaceCraftScreen}/>
          <Stack.Screen name={"Star"} component={StarScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
