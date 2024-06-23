import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from "react-native";
import Font from '../../assets/fonts';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metric';
import ICON from '../../assets/icons';
import COLOR from '../../utils/ColorSystem';

class PointBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { point = 0, background } = this.props;
    return (
      <View style={styles.pointContainer(background)}>
        <Image style={styles.imageDiamond} source={ICON.ic_diamond} />
        <Text style={styles.pointText}>{point}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pointContainer:(background)=>({
    backgroundColor: background || COLOR.BLUE_EGG_DUCK,
    padding: moderateScale(10),
    borderRadius: 10,
    flexDirection: 'row'
}),
imageDiamond:{
    width:horizontalScale(15),
    height:verticalScale(22),
    marginRight: horizontalScale(6),
},  
pointText:{
    fontFamily: Font.NunitoBlack,
    fontSize: moderateScale(18),
    color: COLOR.BLACK,
},
})

export default PointBar;
