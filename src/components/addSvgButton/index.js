import React, {Component} from 'react';
import {Button, StyleSheet} from 'react-native';

export default class AddSvgButton extends Component{
  constructor(props) {
   super(props)
   }
  render() {
    return (
      <Button title="ee"/>
    )
  }
}

const styles = StyleSheet.create({
  row:{
    flex: 1,
    flexDirection: 'row'
  },
});
