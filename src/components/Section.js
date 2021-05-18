import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import ImageComp from './ImageComp';

const Section = ({title, body_elements}) => {
  return (
    <View>
      {title && (
        <Text style={styles.title} testID="title">
          {title}
        </Text>
      )}

      {body_elements.map((item, key) => {
        return item.hasOwnProperty('image_url') ? (
          <ImageComp image={item.image_url} key={key} />
        ) : (
          <Text style={styles.info} key={key}>
            {item}
          </Text>
        );
      })}
    </View>
  );
};

export default Section;
