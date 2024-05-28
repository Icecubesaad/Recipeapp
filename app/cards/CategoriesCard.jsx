import React,{useEffect,useState} from 'react';
import { Image, View,Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { COLORS, FONT } from '../../constants';
import { useRouter } from 'expo-router';
const CategoriesCard = ({image,Name,index}) => {
    const router = useRouter();
    const navigate = (index)=>{
        router.push(`/Recipies/${index}`)
    }
    return (
        <TouchableOpacity onPress={()=>{navigate(index)}}>
        <View style={styles.container} key={index}>
            <Image source={{uri:image}} style={styles.image}/>
            <Text style={styles.Text} numberOfLines={2}>{Name}</Text>
        </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        height:200,
        width:130,
        marginRight:20,
        borderWidth:1,
        borderRadius:11,
        borderColor:COLORS.white,
        
    }
    ,
    Text:{
        color:COLORS.gray
        ,
        fontFamily:FONT.medium
    },
    image:
    {
        width:130,
        height:150,
        borderWidth:1,
        borderColor:COLORS.white,
        borderRadius:9

    }
})

export default CategoriesCard;
