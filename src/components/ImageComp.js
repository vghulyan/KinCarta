import React from 'react';
import styles from '../styles';
import {Image} from 'react-native';

const ImageComp = ({image}) => {
  return (
    <Image
      style={[
        styles.base,
        styles.leftMargin,
        {backgroundColor: 'rgba(0, 0, 100, 0.25)'},
        {borderRadius: 5},
      ]}
      source={{uri: image}}
    />
  );
};

export default ImageComp;
