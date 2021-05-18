import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';
import ImageComp from './ImageComp';

const Items = item => {
  const {teaser, hero_image} = item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CurrentSection', item)}
      style={styles.item}
      testID="items">
      {teaser && <Text style={styles.textStyle}>{teaser}</Text>}
      <ImageComp image={hero_image} />
    </TouchableOpacity>
  );
};

export default Items;
