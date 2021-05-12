import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {styles} from './styles';

const PopularDish = props => {
  const {popularDish} = props;

  return (
    <Ripple style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{uri: popularDish.image}} />
      <View style={styles.dishTitleContainerStyle}>
        <Text style={styles.titleStyle}>{popularDish.name}</Text>
        <Text style={styles.popularItemDeliveryTimeStyle}>32 min</Text>
      </View>
    </Ripple>
  );
};

export default PopularDish;
