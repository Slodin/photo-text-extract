import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AddSvgButton from '../components/addSvgButton/index';

export default class CropScreen extends Component{
  static navigationOptions = {
    // headerTitle instead of title
    headerRight: <AddSvgButton />,
  };
  constructor(props) {
   super(props)
   }
  render(){
    const { navigation } = this.props;
    const imageUri = navigation.getParam('uri');
    return(
        <View style={styles.container}>
          <Image style={{width: 500, height: 500}} source={{uri: imageUri}}/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
