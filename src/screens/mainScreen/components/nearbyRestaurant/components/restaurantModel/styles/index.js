import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  imageStyle: {
    height: 200,
    marginRight: 16,
    marginLeft: 16,
    borderRadius: 4,
    marginBottom: 8,
    marginTop: 16,
  },
  restaurantTitleStyle: {
    fontSize: 18,
    marginLeft: 18,
    flexShrink: 1,
  },
  cuisinesAvailableStyle: {
    fontSize: 14,
    marginLeft: 18,
    opacity: 0.6,
  },
  addressNameStyle: {
    fontSize: 14,
    marginBottom: 16,
    width: '60%',
    marginLeft: 18,
    opacity: 0.6,
  },
  deliveryNameStyle: {
    fontSize: 14,
    marginRight: 18,
    opacity: 0.7,
  },
  starBoxIconStyle: {marginRight: 4, marginLeft: 8},
  ratingContainerStyle: {flexDirection: 'row', marginRight: 16},
  deliveryTimeContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantNameContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
