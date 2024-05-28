import React from 'react';
import { View } from 'react-native';
import styles from './welcome.style';
import { COLORS,SIZES,icons } from '../constants';
import { TextInput,TouchableOpacity,Image } from 'react-native';
const SearchBar = () => {

    return (
        <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    );
}

export default SearchBar;
