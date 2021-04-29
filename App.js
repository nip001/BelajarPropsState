import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/Router/Router';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Router/>
        </NavigationContainer>
      </Provider>
    )
  }
}


export default App

//Stack navigate install
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view 