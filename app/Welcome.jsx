import React from 'react';
import { View,Text,StyleSheet, SafeAreaView, Image } from 'react-native';
import { COLORS, FONT, SIZES,icons, images } from '../constants';
import SearchBar from './SearchBar';

const Welcome = () => {
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Left} >
            <Text style={{fontSize:SIZES.xLarge,color:COLORS.gray}}>HI, Icecube</Text>
            <Text style={{fontSize:SIZES.xxLarge,color:COLORS.black,fontFamily:FONT.bold}}>What would you like to cook today?</Text>
            </View>
            <View style={styles.Right} > 
                <View >
                    <Image source={images.profile} style={styles.profile} resizeMode='contain'/>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingTop:80,
        marginLeft:20,
        display:"flex",
        flexDirection:"row"
        ,
        marginRight:10
    },
    Left:{
        width:"80%"
    },
    Right:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    Image:{
        width:70,
        height:70,
        backgroundColor:COLORS.gray,
        borderWidth:2,
        borderRadius:9,
        borderColor:COLORS.white,
        display:"flex",
        justifyContent:"center"
        ,
        alignItems:"center",
    },
    profile:
    {
        height:60,
        width:60,
        borderWidth:1,
        borderRadius:11,
        borderColor:
        "white"
    }
    
})
export default Welcome;
