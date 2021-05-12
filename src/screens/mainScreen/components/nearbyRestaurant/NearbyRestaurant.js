import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Restaurant from './components/restaurantModel';
import {styles} from './styles';

const RestaurantList = () => {
  const RestaurantNearYou = [
    {
      id: 1,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Fshreyak-singh-NQOLyfk7B3I-unsplash-min.jpg?alt=media&token=d9cf4326-b95b-4b26-ad04-26ebf5975d1f',
      name: 'Delhi Club House',
    },
    {
      id: 2,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Fchaitanya-shinde-mTyCp_D5vwk-unsplash-min.jpg?alt=media&token=1fb06e44-ef34-4815-b810-76361931afd4',
      name: 'Olive Bar & Kitchen',
    },
    {
      id: 3,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Fgayatri-malhotra-mlwXrYYAOms-unsplash-min.jpg?alt=media&token=88490795-6155-4e9c-a518-14584ae2de5c',
      name: 'Exotic Rooftop Restaurant sdgsgsfgdfgdfg',
    },
    {
      id: 4,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Fkabir-cheema-8T9AVksyt7s-unsplash-min.jpg?alt=media&token=844ed1f7-77ea-4388-928b-b45a3f86fa7e',
      name: 'Exotic Rooftop Restaurant',
    },
    {
      id: 5,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Flai-yuching-WxePxgrIJbQ-unsplash-min.jpg?alt=media&token=c5b701a6-65b1-4f62-86dd-417f0b4be93f',
      name: 'Delhi Club House',
    },
    {
      id: 6,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Flior-shapira-GKxsKNTfZd8-unsplash-min.jpg?alt=media&token=c2f3f5a2-9609-42d1-acda-b38601c46a3a',
      name: 'Olive Bar & Kitchen',
    },
    {
      id: 7,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Flouis-hansel-shotsoflouis-1keEJmqm8vU-unsplash-min.jpg?alt=media&token=00b8618a-c17b-4948-932f-e90f5925f237',
      name: 'Exotic Rooftop Restaurant',
    },
    {
      id: 8,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Fnand-shah-1fAjknDSumY-unsplash-min.jpg?alt=media&token=bb14f611-1605-419e-9441-d8651f473988',
      name: 'Exotic Rooftop Restaurant',
    },
    {
      id: 9,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Fshreyak-singh-NQOLyfk7B3I-unsplash-min.jpg?alt=media&token=d9cf4326-b95b-4b26-ad04-26ebf5975d1f',
      name: 'Delhi Club House',
    },
    {
      id: 10,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Fsyed-hussaini-r6Y01QzcVdY-unsplash-min.jpg?alt=media&token=03a281e6-a2b0-45bd-bba9-0cda7179e288',
      name: 'Olive Bar & Kitchen',
    },
    {
      id: 11,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Fviktor-forgacs-WmKXu-bzygo-unsplash-min.jpg?alt=media&token=b042174a-a067-480a-8829-854866f58ffe',
      name: 'Exotic Rooftop Restaurant',
    },
    {
      id: 12,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Restaurant%2Frsz_restaurant-hd-wallpaper-download-restaurant-pictures-free-windows-wallpaper-widescreen-artworks-1920x1200-1.png?alt=media&token=f2cc78cd-536d-4a59-8c5d-e7b8c1aab73b',
      name: 'Exotic Rooftop Restaurant',
    },
    {
      id: 13,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Restaurant%2Frsz_465581-interior-train-interior_design-restaurant-748x499.png?alt=media&token=5ed16327-c318-4a69-ab86-9fda364633d3',
      name: 'Delhi Club House',
    },
    {
      id: 14,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Restaurant%2Frsz_eresto_images1.png?alt=media&token=03ab2cfe-8581-4652-ae38-0b38b84a8ec3',
      name: 'Olive Bar & Kitchen',
    },
    {
      id: 15,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Restaurant%2Frsz_3da37dc6421f978a50e165466f221d72.png?alt=media&token=a5f0f5bc-2b8d-45a3-b750-3bc1ed950281',
      name: 'Exotic Rooftop Restaurant',
    },
    {
      id: 16,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Restaurant%2Frsz_restaurant-hd-wallpaper-download-restaurant-pictures-free-windows-wallpaper-widescreen-artworks-1920x1200-1.png?alt=media&token=f2cc78cd-536d-4a59-8c5d-e7b8c1aab73b',
      name: 'Exotic Rooftop Restaurant',
    },
  ];

  return (
    <View>
      <Text style={styles.titleStyle}>Restaurants near you</Text>
      <Text style={styles.subTitleStyle}>
        See what flavours your nearest kitchens have
      </Text>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={RestaurantNearYou}
        renderItem={({item}) => {
          return <Restaurant restaurant={item} />;
        }}
      />
    </View>
  );
};

export default RestaurantList;
