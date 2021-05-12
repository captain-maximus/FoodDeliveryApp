import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ripple from 'react-native-material-ripple';
import {styles} from './styles';

const SearchBar = () => {
  return (
    <Ripple style={styles.searchBarContainer}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Search dishes, restaurants & cuisines"
        selectionColor="#000"
      />
      <EvilIcons
        style={styles.iconStyle}
        name="search"
        size={24}
        color="rgba(0,0,0,0.5)"
      />
    </Ripple>
  );
};

export default SearchBar;
