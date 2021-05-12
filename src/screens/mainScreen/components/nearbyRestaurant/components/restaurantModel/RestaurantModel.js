import React from 'react';
import {View, Text, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import {styles} from './styles';

const RestaurantModel = props => {
  const {restaurant} = props;

  return (
    <Ripple style={styles.container}>
      {/* Restaurant Image */}

      <Image style={styles.imageStyle} source={{uri: restaurant.image}} />

      {/* Restaurant name and Rating Container */}

      <View style={styles.restaurantNameContainerStyle}>
        <Text style={styles.restaurantTitleStyle}>{restaurant.name}</Text>
        <View style={styles.ratingContainerStyle}>
          <MaterialCommunityIcons
            style={styles.starBoxIconStyle}
            name="star-box"
            size={18}
            color="#ffb900"
          />
          <Text>4.3</Text>
        </View>
      </View>
      <View style={styles.deliveryTimeContainerStyle}>
        <Text style={styles.cuisinesAvailableStyle}>
          North Indian, Chinese, Thai, Mexican
        </Text>
        <Text style={styles.deliveryNameStyle}>47 mins</Text>
      </View>
      <Text style={styles.addressNameStyle} numberOfLines={1}>
        Tagore Garden Extension, 3.2 mi
      </Text>
    </Ripple>
  );
};

export default RestaurantModel;
