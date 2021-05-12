import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchBarContainer: {
    borderWidth: 0.5,
    shadowOffset: {height: 2, width: 2},
    shadowOpacity: 0.1,
    borderColor: '#D0D0D0',
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    height: 45,
    paddingLeft: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 5,
    borderRadius: 6,
    marginBottom: 16,
  },
  textInputStyle: {
    fontSize: 15,
    fontFamily: 'BrandonText-Regular',
    flex: 1,
  },
  iconStyle: {
    margin: 10,
  },
});
