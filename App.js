import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet, View } from 'react-native'
import Login from './src/Component/Login'
import { NavigationContainer } from '@react-navigation/native';
import TextAsik from './src/Component/TextAsik';

const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
            name="Login" 
            component={Login}/>
            <Stack.Screen name="TextAsik" component={TextAsik}/>
          </Stack.Navigator>
        </NavigationContainer>
    )
  }
}


export default App

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10
  },
})

//Stack navigate install
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view 