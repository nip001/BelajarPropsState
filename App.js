import React, { Component } from 'react'
import { Text, TextInput,StyleSheet, TouchableOpacity, View } from 'react-native'
import TextAsik from './TextAsik'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter:0
    }
  }

  render() {
    return (
      <View>
        <TextAsik textCounter={this.state.counter}/>
        <TouchableOpacity style={styles.button} onPress={()=>{this.setState({counter:this.state.counter+1})}}><Text>Tambah 1</Text></TouchableOpacity>
      </View>
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