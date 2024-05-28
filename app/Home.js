import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { FONT,COLORS,SIZES } from "../constants";
import Welcome from "./Welcome";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import { useEffect } from "react";
import Recommendations from "./Recommendations";
import Footer from "./Footer";
import { Router } from "react-router-native";
import {NavigationContainer} from '@react-navigation/native';
const Home = () => {
  const [Array, setArray] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async()=>{
    const response  = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list",{
        method:"GET",
    })
    const data = await response.json()
    setArray([data])
  }
  return (
    <>
    <ScrollView>
    <SafeAreaView style={{flex:1}}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: false,
          headerTitle: " ",
          headerShown:false
        }}
      />
      <Welcome/>
      <SearchBar/>
      <Categories list={Array} />
      <Recommendations/>
    </SafeAreaView>
    </ScrollView>
    <View>
      <Footer/>
    </View>
    </>
  );
};



export default Home;
