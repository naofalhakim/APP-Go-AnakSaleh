import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/Metric";
import COLOR from "../../utils/ColorSystem";
import Font from "../../assets/fonts";

const DOT_SIZE = moderateScale(16);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  margin: {
    paddingVertical: verticalScale(22),
    paddingHorizontal: horizontalScale(12),
    flex: 1,
  },
  cardContainer: {
    backgroundColor: COLOR.BLUE_EGG_DUCK,
    borderRadius: 10,
    padding: moderateScale(20),
    margin: moderateScale(6),
    marginBottom: moderateScale(32),
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: 'center',
  },
  imageCardContainer:{
    backgroundColor: COLOR.AQUARIUM_BLUE,
    width: horizontalScale(186),
    height: verticalScale(186),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentBox:{
    backgroundColor: COLOR.AQUARIUM_BLUE,
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(10),
    marginTop: verticalScale(15),
    alignItems: 'center',
  },
  contentTitle:{
    color: COLOR.WHITE,
    fontFamily: Font.NunitoBold,
    fontSize: moderateScale(18),
  },
  contentDesc:{
    color: COLOR.WHITE,
    fontFamily: Font.NunitoSemiBold,
    fontSize: moderateScale(14),
    marginTop: verticalScale(12),
    marginBottom: verticalScale(14),
    textAlign: 'center',
  },
  textUnit:{
    color: COLOR.WHITE,
    fontSize: moderateScale(14),
    fontFamily: Font.NunitoBold,
  },
  lineSeparator:{
    backgroundColor: COLOR.WHITE,
    height: verticalScale(16),
    borderRadius: 10,
    width: horizontalScale(2),
    marginHorizontal: horizontalScale(12),
  },
  contentStatusContainer:{
    flexDirection: 'row',
    marginBottom: verticalScale(12),
    marginTop: verticalScale(8)
  },
  contentStatusText:{
    color: COLOR.WHITE,
    fontFamily: Font.NunitoSemiBold,
    fontSize: moderateScale(14),
    marginLeft: horizontalScale(4),
  },
  buttonStatus:{
    backgroundColor: COLOR.WHITE,
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(18),
    borderRadius: 20,
    marginTop: 12,
  },
  buttonStatusText:{
    color: COLOR.CIYAN_Opaque,
    fontFamily: Font.NunitoExtraBold,
    fontSize: moderateScale(14)
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationDot: (isActive) => ({
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: 100,
    backgroundColor: isActive ? COLOR.BLUE_EGG_DUCK : COLOR.GREY_CLOUD,
    shadowColor: COLOR.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }),
  paginationDotContainer: {
    paddingHorizontal: horizontalScale(12),
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export default styles;