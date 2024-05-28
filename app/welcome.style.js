import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  userNameNote: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.white,
  },
  addNameNote: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.tertiary
  },
  userNameNotePara: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
    marginLeft:10
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    borderColor:"black",
    borderWidth:2,

  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,

  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.Green,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginRight:10
  },
  createButton: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginRight:10
  },
  addButton: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginRight:10
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (number, active) => ({
      backgroundColor: number === active ? COLORS.white : COLORS.Green,
      width:"auto",
      height:50,
      paddingTop:10,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:10,
      display:"flex",
      marginLeft:10
      ,
      borderWidth:1,
      borderColor:"white",
      borderRadius:10
  ,
  justifyContent:"center"

  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
