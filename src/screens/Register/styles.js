import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/Metric";
import COLOR from "../../utils/ColorSystem";
import Font from "../../assets/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    margin: { margin: 24, },
    iconHeader: { width: horizontalScale(210), height: verticalScale(25), alignSelf: 'center' },
    headerText: {
        color: COLOR.BLACK,
        fontSize: moderateScale(21),
        maxWidth: '50%',
        fontFamily: Font.NunitoMedium,
        marginTop: verticalScale(80)
    },
    underlineText: {
        color: COLOR.BLUISH_GREY,
        textDecorationLine: 'underline',
        fontSize:moderateScale(14),
        fontFamily: Font.NunitoRegular,
        marginVertical: verticalScale(4),
    },
});

export default styles;