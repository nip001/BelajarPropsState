import React, { Component } from 'react';
import { View,StyleSheet, Text } from 'react-native';

class TextAsik extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

  render() {
    return (
      <View>
        <Text style={styles.styleText}>Count : {this.props.textCounter}</Text>
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
