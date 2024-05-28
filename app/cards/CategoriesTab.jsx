import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';

const CategoriesTab = ({ number, category,change }) => {
  const [categoryF, setcategoryF] = useState("Beef");
  const [active, setActive] = useState(0);

  const changeActive = (number) => {
    setActive(number);
  };
  const sending_Name = (name)=>{
    console.log(name)
  }

  return (
    <TouchableOpacity
      key={category}
      style={[
        styles.card,
        {
          backgroundColor:
            number === active ? COLORS.white : COLORS.Green,
        },
      ]}
      onPress={() => {changeActive(number),change(category)}}
    >
      <View>
        <Text style={styles.text}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 'auto',
    height: 50,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    display: 'flex',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});

export default CategoriesTab;
