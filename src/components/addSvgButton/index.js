import React, {Component} from 'react';
import {Button, StyleSheet,TouchableHighlight, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class AddSvgButton extends Component{
  constructor(props) {
   super(props)
   }
  render() {
    return (
      <TouchableHighlight onPress={this.addReadTextArea}>
        <Icon name="plus" size={30} color="#111111" />
      </TouchableHighlight>
    )
  }

  addReadTextArea(){
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
}

const styles = StyleSheet.create({
  row:{
    flex: 1,
    flexDirection: 'row'
  },
});
