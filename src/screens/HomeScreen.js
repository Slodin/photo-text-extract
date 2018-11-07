import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, CameraRoll, ScrollView, Image, Dimensions} from 'react-native';
import galleryHelpers from '../helper/gallery';
import {getScreenDimensions} from '../helper/utility';

import Gallery from '../components/gallery/index';

const IMAGE_PER_ROW = 3;
const IMAGE_ROW_MARGIN = 5;

export default class HomeScreen extends Component{
  state = {data : [], photos: []};

  async componentDidMount(){
      const result = await galleryHelpers._getRecentPhotos(20, 'Photos');
      let windowSize = getScreenDimensions();
      let imageSize = galleryHelpers.calculatImageSize(windowSize.width, IMAGE_PER_ROW, IMAGE_ROW_MARGIN);
      this.setState({photos: result.edges, imageSize: imageSize});
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            <Gallery
            imagePerRow={IMAGE_PER_ROW}
            imageRowMargin={IMAGE_ROW_MARGIN}
            imageSize={this.state.imageSize}
            photos={this.state.photos}
            nav={navigation}
            />
          }
       </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
