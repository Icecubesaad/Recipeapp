import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { COLORS, icons } from "../constants";
const Footer = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={icons.Home} style={styles.image} />
      </View>
      <View>
        <Image source={icons.search} style={styles.image} />
      </View>
      <View>
        <Image source={icons.BookMark} style={styles.image} />
      </View>
      <View>
        <Image source={icons.Profile} style={styles.image} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 45,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItem: "center",
    position: "absolute",
    alignItems:"center",
    bottom: 0,
    backgroundColor:COLORS.white,
    paddingLeft:10,
    paddingRight:10

  },
  image: {
    height: 30,
    width: 30,
  },
});
export default Footer;
