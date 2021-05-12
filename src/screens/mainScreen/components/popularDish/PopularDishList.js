import React from 'react';
import {View, FlatList} from 'react-native';
import PopularDish from './components/popularDishModel';
import {styles} from './styles';

const PopularDishList = () => {
  const popularDish = [
    {
      id: '1',
      name: 'Chicken Biryani',
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Popular%20Dishes%2Ffamous-dishes-of-delhi-biryani.jpg?alt=media&token=e1528474-bef3-4a9a-b33b-3694349b8e62',
    },
    {
      id: '2',
      name: 'Gol Gappa',
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Popular%20Dishes%2Ffamous-dishes-of-delhi-gol-gappa.jpg?alt=media&token=97e8c77c-8826-4bb1-8552-c2f5a7feeee6',
    },
    {
      id: '3',
      name: 'Paranthas',
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Popular%20Dishes%2Ffamous-dishes-of-delhi-parantha.jpg?alt=media&token=9d74a120-e12c-48e1-a297-896c8ec5a0b0',
    },
    {
      id: '4',
      name: 'Butter Chicken',
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Popular%20Dishes%2Ffamous-dishes-of-delhi-butter-chicken.jpg?alt=media&token=fd20f024-3d5f-46cc-9770-672920c9c059',
    },
  ];

  return (
    <View style={styles.containerStyle}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={popularDish}
        renderItem={({item}) => {
          return <PopularDish popularDish={item} />;
        }}
        ListFooterComponent={<View style={styles.footerStyle} />}
      />
    </View>
  );
};

export default PopularDishList;
