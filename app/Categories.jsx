import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { COLORS, FONT, SIZES } from '../constants';
import CategoriesTab from './cards/CategoriesTab';
import CategoriesCard from './cards/CategoriesCard';

const Categories = ({ list }) => {
  const [loadingCard, setLoadingCard] = useState(true);
  const [categoryF, setCategoryF] = useState("Beef");
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    setLoadingCard(true)
    fetchData();
  }, [categoryF]);
  const change = (data)=>{

    setCategoryF(data)
  }
  const fetchData = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryF}`);
      const data = await response.json();
      if (data && data.meals) {
        setListCategory(data.meals.slice(0, 9));
        setLoadingCard(false);
      } else {
        setListCategory([]);
        setLoadingCard(true);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      setLoadingCard(true);
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(list.length < 1);
  }, [list]);

  const renderItem = ({ item }) => (
    <>
      {item.meals.slice(0, 6).map((meal, index) => (

        <CategoriesTab number={index} category={meal.strCategory} change={change} />
      ))}
    </>
  );

  const renderCategoryCard = ({ item }) => (
    <CategoriesCard Name={item.strMeal} image={item.strMealThumb} index={item.idMeal} />
  );

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.Text}>Categories</Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.TextBtn}>see more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.category}>
        {loading ? (
          <ActivityIndicator size={'large'} color={COLORS.Green} />
        ) : (
          <FlatList data={list} renderItem={renderItem} horizontal />
        )}
      </View>
      <View style={styles.categoryCard}>
        {loadingCard ? (
          <ActivityIndicator size={'large'} color={COLORS.Green} />
        ) : (
          <FlatList data={listCategory} renderItem={renderCategoryCard} horizontal />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  Text: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
  },
  TextBtn: {
    fontSize: SIZES.medium,
    color: COLORS.Green,
  },
  btnContainer: {
    justifyContent: 'center',
  },
  category: {
    height: 100,
    width: '100%',
    marginTop: 30,
  },
  categoryCard: {
    height: "auto",
    width: '100%',
    marginLeft:10
    ,
  },
});

export default Categories;
