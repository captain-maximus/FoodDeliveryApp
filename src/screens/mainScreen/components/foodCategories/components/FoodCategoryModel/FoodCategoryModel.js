import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import Ripple from 'react-native-material-ripple';

const FoodCategories = props => {
  const {category} = props;

  return (
    <Ripple style={styles.containerStyle}>
      <View style={styles.imageBackgroundStyle}>
        <Image style={styles.imageStyle} source={{uri: category.image}} />
      </View>
      <Text style={styles.titleStyle}>{category.type}</Text>
    </Ripple>
  );
};

export default FoodCategories;
