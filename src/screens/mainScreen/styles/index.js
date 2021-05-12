import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  deliverToStyle: {
    fontFamily: 'BrandonText-Medium',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 8,
  },
  addressTextStyle: {
    fontSize: 16,
    fontFamily: 'BrandonText-Medium',
    flexShrink: 1,
    width: '80%',
    color: 'black',
  },
  titleStyle: {
    fontFamily: 'BrandonText-Bold',
    fontSize: 18,
    marginLeft: 16,
    marginBottom: 16,
    color: '#242a37',
  },
  foodCategoriesIconStyle: {
    height: 72,
    width: 72,
  },
  foodCategoriesTitleStyle: {
    marginTop: 8,
    fontFamily: 'BrandonText-Medium',
    fontSize: 12,
    color: '#242a37',
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 12,
    justifyContent: 'space-between',
  },
  addressContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  cartIconContainerStyle: {marginRight: 16},
  cartIconStyle: {width: 20, height: 20},
});
