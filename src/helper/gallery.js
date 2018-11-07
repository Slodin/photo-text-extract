import React from 'react';
import {
  CameraRoll,
} from 'react-native';

let IMAGE_ROW_MARGIN;

const galleryHelpers = {
  calculatImageSize(windowWidth, imagePerRow, imageRowMargin){
    IMAGE_ROW_MARGIN = imageRowMargin;
    let size = windowWidth / imagePerRow - 2 * imageRowMargin;
    return {width: size, height: size}
  },
  async _getRecentPhotos(photoCount, type){
    try{
      const photos = await CameraRoll.getPhotos({
        first: photoCount,
        assetType: type
      });
      return photos;
    } catch(e){
      console.log(e.message);
    }
  }
}

export default galleryHelpers;
