import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/Metric";
import COLOR from "../../utils/ColorSystem";
import Font from "../../assets/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    margin: { 
        marginTop: verticalScale(2), 
        marginBottom: verticalScale(-30), 
        marginHorizontal: horizontalScale(24), 
        paddingVertical: verticalScale(20) 
    },
    photoContainer: {
        width: horizontalScale(130),
        height: verticalScale(130),
        borderWidth: 1,
        borderColor: COLOR.GREEN_WHITE,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    nameText:{
        marginTop: 18,
        fontFamily: Font.NunitoSemiBold,
        fontSize:20,
        color: COLOR.BLUE_WHALE,
        alignSelf:'center',
    },
    emailText:{
        fontFamily: Font.NunitoSemiBold,
        fontSize:16,
        color: COLOR.BLUISH_GREY,
        alignSelf:'center',
    },
    captionPointText:{
        fontFamily: Font.NunitoBold,
        fontSize: 14,
        color: COLOR.BLUISH_GREY,
        maxWidth:'40%'
    },
    pointContainer:{
        backgroundColor: COLOR.BLUE_EGG_DUCK,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },
    imageDiamond:{
        width:horizontalScale(15),
        height:verticalScale(22),
        marginRight: horizontalScale(6),
    },  
    pointText:{
        fontFamily: Font.NunitoBlack,
        fontSize: 18,
        color: COLOR.BLACK,
    },
    pointSectionContainer:{
        marginTop: verticalScale(8), 
        borderWidth: 2,
        borderRadius: 10,
        padding: 12,
        borderColor: COLOR.BLUE_EGG_DUCK,
    },
    pointSection:{ 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginBottom: 12
    },
    textLinkReward:{
        alignSelf:'center',
        color: COLOR.BLUE_PRIMER,
        fontFamily: Font.NunitoBold,
        fontSize: 12,
        textDecorationLine: 'underline',
      },
      userSection: {
        backgroundColor: COLOR.BLUE_EGG_DUCK,
        padding: moderateScale(12),
        marginVertical: verticalScale(12),
        borderRadius: 10,
      },
      iconEdit: {
        width:horizontalScale(18), 
        height: verticalScale(18),
        alignSelf: 'flex-end',
    },
    dataSection: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical: verticalScale(6),
    },
    textLabel:{
        color: COLOR.BLUE_WHALE,
        fontFamily: Font.NunitoBold,
        fontSize: moderateScale(16),
    },
    valueLabel:{
        color: COLOR.BLUISH_GREY,
        fontFamily: Font.NunitoSemiBold,
        fontSize: moderateScale(14),
    }
});

export default styles;