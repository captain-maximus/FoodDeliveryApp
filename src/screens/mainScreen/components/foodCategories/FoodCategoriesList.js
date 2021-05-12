import React from 'react';
import {View, Text, FlatList} from 'react-native';
import FoodCategory from './components/FoodCategoryModel';
import {styles} from './styles';

const FoodCategoriesList = () => {
  const cuisines = [
    {
      id: 1,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Categories%2Fcircle-cropped%20(5).png?alt=media&token=185be93c-7663-451e-8b5d-85c03ac39210',
      type: 'Breakfast',
    },
    {
      id: 2,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Categories%2Fcircle-cropped%20(8).png?alt=media&token=ee66ffcb-31f5-4380-80f7-b172736c4a9e',
      type: 'Lunch',
    },
    {
      id: 3,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Categories%2Fcircle-cropped%20(6).png?alt=media&token=37736e69-ddc9-4cd1-ac7a-c1e2e7f4bea1',
      type: 'Snacks',
    },
    {
      id: 4,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Categories%2Fcircle-cropped%20(7)-min.png?alt=media&token=688fec2c-7fea-4031-8128-fbdaec666451',
      type: 'Fast Food',
    },
    {
      id: 5,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Categories%2Fcircle-cropped%20(9).png?alt=media&token=028ac8a9-c86f-48bf-874c-7d2f0468ac51',
      type: 'Dessert',
    },
    {
      id: 6,
      image:
        'https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Popular%20Cuisines%2Fmexican.png?alt=media&token=fc53107c-5835-4e0b-927a-14d7c3ef0bd9',
      type: 'Dinner',
    },
  ];

  return (
    <View>
      <Text style={styles.cuisinesTitleStyle}>Food Categories</Text>
      <Text style={styles.subTitleStyle}>
        Morning, noon or evening... We got you covered
      </Text>
      <FlatList
        numColumns={3}
        keyExtractor={item => item.id.toString()}
        data={cuisines}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <FoodCategory category={item} />;
        }}
        ListFooterComponent={<View style={{marginRight: 16}} />}
      />
    </View>
  );
};

export default FoodCategoriesList;
