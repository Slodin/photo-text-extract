import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, CameraRoll, ScrollView, Image, TouchableOpacity} from 'react-native';
import _ from 'lodash';

export default class Gallery extends Component{
  constructor(props) {
   super(props)
   }
  render() {
    const images = this.props.photos;
    const imagePerRow = this.props.imagePerRow;
    const imageRowMargin = this.props.imageRowMargin;
    const imageSize = this.props.imageSize;

    return _.chunk(images, imagePerRow).map((imagesForRow,i) => {
      return (
        <View style={styles.row} key={i}>
          {imagesForRow.map((image,i) =>{
            let imageUri = image.node.image.uri;
            return(
              <TouchableOpacity key={i}
                activeOpacity = {.2}
                onPress={()=>{this.props.nav.navigate("CropImage", {uri: imageUri})}}>
                <Image key={i} style={[{margin: imageRowMargin}, imageSize]} source={{uri: imageUri}} />
              </TouchableOpacity>
            );
          })}
        </View>
      )
    });
  }
}

const styles = StyleSheet.create({
  row:{
    flex: 1,
    flexDirection: 'row'
  },
});
