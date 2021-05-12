import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 4,
    flexDirection: 'column',
    flex: 1 / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 13,
    alignSelf: 'center',
    marginBottom: 18,
  },
  imageStyle: {
    width: 75,
    height: 75,
  },
  imageBackgroundStyle: {
    backgroundColor: '#d3d3d3',
    padding: 1.5,
    marginBottom: 8,
    borderRadius: 50,
    elevation: 2,
  },
});
