import React, {Component} from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import Font from '../../assets/fonts';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metric';
import ICON from '../../assets/icons';

class HeaderBasic extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const {title, navigation} = this.props;
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
            <Image source={ICON.ic_back} style={styles.backButton} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      borderBottomWidth:0.2, 
      paddingHorizontal:horizontalScale(12), 
      paddingVertical:verticalScale(12), 
      borderBottomColor:'black', 
      display:'flex', 
      flexDirection:'row',
      alignItems:'center', 
    },
      backButton:{
        width:horizontalScale(24), 
        height:verticalScale(24)
      },
      textContainer:{
        flex:1,
        alignItems:'center'
      },
      titleText:{
        fontSize:moderateScale(20),
        fontFamily: Font.NunitoRegular,
      }
})

export default HeaderBasic;
