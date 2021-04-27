import React, { Component } from 'react';
import { View,StyleSheet, Text } from 'react-native';

class TextAsik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.route.params.username
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.styleText}>Selamat data {this.state.name}</Text>
      </View>
    );
  }
}

export default TextAsik;

const styles = StyleSheet.create({
    styleText:{
        fontSize:20,
    }
})
