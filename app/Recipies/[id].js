import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { COLORS, SIZES, FONT } from '../../constants';
import { TouchableOpacity } from 'react-native';
import {icons} from '../../constants';
import Footer from '../Footer';
const Id = () => {
  const [loading, setloading] = useState(true);
  const [state, setstate] = useState([]);
  const route = useLocalSearchParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.id}`);
      const data = await response.json();
      if (data && data.meals) {
        setstate(data.meals[0]);
        setloading(false);
      } else {
        console.log("Could not fetch data");
        setstate([]);
        setloading(true);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      setloading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.imageContainer}>
        <Image source={{ uri: state.strMealThumb }} style={styles.image} />
      </View>
      <ScrollView style={styles.scrollview}>
        <View style={styles.contentContainer}>
          <View style={styles.upperbody}>
            <Text style={styles.Text}>{state.strMeal}</Text>
            <TouchableOpacity>
              <Text>❤</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.category}>
            <Text style={styles.smallText}>{state.strCategory}, {state.strArea}</Text>
          </View>
          <View style={styles.Description}>
            <Text style={styles.TextSub}>Instructions</Text>
            <Text>{state.strInstructions}</Text>
          </View>
          <View style={styles.Description}>
            <Text style={styles.TextSub}>Ingredients</Text>
            <Text style={styles.ing}> {state.strIngredient1=="" ? null : state.strIngredient1 + "-"}    {state.strMeasure1 == "" ? null : state.strMeasure1}</Text>
            <Text style={styles.ing}> {state.strIngredient2=="" ? null : state.strIngredient2 + "-"}    {state.strMeasure2 == "" ? null : state.strMeasure2}</Text>
            <Text style={styles.ing}> {state.strIngredient3=="" ? null : state.strIngredient3 + "-"}    {state.strMeasure3 == "" ? null : state.strMeasure3}</Text>
            <Text style={styles.ing}> {state.strIngredient4=="" ? null : state.strIngredient4 + "-"}    {state.strMeasure4 == "" ? null : state.strMeasure4}</Text>
            <Text style={styles.ing}> {state.strIngredient5=="" ? null : state.strIngredient5 + "-"}    {state.strMeasure5 == "" ? null : state.strMeasure5}</Text>
            <Text style={styles.ing}> {state.strIngredient6=="" ? null : state.strIngredient6 + "-"}    {state.strMeasure6 == "" ? null : state.strMeasure6}</Text>
            <Text style={styles.ing}> {state.strIngredient7=="" ? null : state.strIngredient7 + "-"}    {state.strMeasure7 == "" ? null : state.strMeasure7}</Text>
            <Text style={styles.ing}> {state.strIngredient8=="" ? null : state.strIngredient8 + "-"}    {state.strMeasure8 == "" ? null : state.strMeasure8}</Text>
            <Text style={styles.ing}> {state.strIngredient9=="" ? null : state.strIngredient9 + "-"}    {state.strMeasure9 == "" ? null : state.strMeasure9}</Text>
            <Text style={styles.ing}> {state.strIngredient10=="" ? null : state.strIngredient10 + "-"}    {state.strMeasure10 == "" ? null : state.strMeasure10}</Text>
            <Text style={styles.ing}> {state.strIngredient11=="" ? null : state.strIngredient11 + "-"}    {state.strMeasure11 == "" ? null : state.strMeasure11}</Text>
            <Text style={styles.ing}> {state.strIngredient12=="" ? null : state.strIngredient12 + "-"}    {state.strMeasure12 == "" ? null : state.strMeasure12}</Text>
            <Text style={styles.ing}> {state.strIngredient13=="" ? null : state.strIngredient13 + "-"}    {state.strMeasure13== "" ? null : state.strMeasure13}</Text>
            <Text style={styles.ing}> {state.strIngredient14=="" ? null : state.strIngredient14 + "-"}    {state.strMeasure14 == "" ? null : state.strMeasure14}</Text>
            <Text style={styles.ing}> {state.strIngredient15=="" ? null : state.strIngredient15 + "-"}    {state.strMeasure15 == "" ? null : state.strMeasure15}</Text>
            <Text style={styles.ing}> {state.strIngredient16=="" ? null : state.strIngredient16 + "-"}    {state.strMeasure16 == "" ? null : state.strMeasure16}</Text>
            <Text style={styles.ing}> {state.strIngredient17=="" ? null : state.strIngredient17 + "-"}    {state.strMeasure17 == "" ? null : state.strMeasure17}</Text>
            <Text style={styles.ing}> {state.strIngredient18=="" ? null : state.strIngredient18 + "-"}    {state.strMeasure18 == "" ? null : state.strMeasure18}</Text>
            <Text style={styles.ing}> {state.strIngredient19=="" ? null : state.strIngredient19 + "-"}    {state.strMeasure19 == "" ? null : state.strMeasure19}</Text>
            <Text style={styles.ing}> {state.strIngredient20=="" ? null : state.strIngredient20 + "-"}    {state.strMeasure20 == "" ? null : state.strMeasure20}</Text>
          </View>
        </View>
      </ScrollView>
      <Footer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"auto"
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  image: {
    height: 300,
    width: '100%',
  },
  scrollview: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position:'relative',
    top:-20,
    height:"auto"
  },
  contentContainer: {
    paddingTop: 30,
    paddingLeft: 15, // Adjust the bottom padding to show the entire content
  },
  upperbody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 11,
  },
  Text: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
  },
  smallText: {
    color: COLORS.gray,
    fontSize: SIZES.medium,
  },
  category: {
    marginTop: 2,
  },
  TextSub: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
  },
  Description: {
    marginTop: 10,
  },
  ing:{
    fontSize:SIZES.medium
  },
  closebtn:{
    position:'absolute',
    top:50,
    backgroundColor:COLORS.white,
    borderWidth:1,
    borderColor:"black",
    borderRadius:45,
    zIndex:99,
  }
});

export default Id;
