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
  pointText: {
    fontFamily: Font.NunitoBlack,
    fontSize: 18,
    color: COLOR.BLACK,
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
    backgroundColor: isActive ? COLOR.BLUE_PRIMER : COLOR.BLUISH_GREY,
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