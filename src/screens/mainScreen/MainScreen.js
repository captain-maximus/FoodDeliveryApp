import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import SearchBar from './components/search';
import {styles} from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PopularDishList from './components/popularDish';
import FoodCategoryList from './components/foodCategories';
import NearbyRestaurant from './components/nearbyRestaurant';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.containerStyle} edges={['top']}>
      <StatusBar
        backgroundColor="transparent"
        animated
        barStyle="dark-content"
      />

      {/* Header */}

      <View style={styles.headerStyle}>
        <TouchableOpacity style={styles.addressContainerStyle}>
          <EvilIcons name="location" size={22} color="black" />
          <Text style={styles.addressTextStyle} numberOfLines={1}>
            Block C-62, Community Center, Janakpuri, New Delhi, Delhi 110058
          </Text>
          <MaterialIcons name="expand-more" size={18} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartIconContainerStyle}>
          <Image
            style={styles.cartIconStyle}
            source={require('../../assets/shopping-bag.png')}
          />
        </TouchableOpacity>
      </View>

      {/* SearchBar */}

      <SearchBar />

      <ScrollView>
        {/* PopularDishList */}

        <PopularDishList />

        {/* FoodCategoryList */}
        <FoodCategoryList />

        {/* Nearby Restaurant */}
        <NearbyRestaurant />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
