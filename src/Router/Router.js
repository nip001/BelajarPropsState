import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Component/Login';

const Stack = createStackNavigator();

class Router extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={Login}/>
      </Stack.Navigator>
    );
  }
}

export default Router