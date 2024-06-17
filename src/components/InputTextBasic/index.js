import React, {Component} from 'react';
import { Text, TextInput, StyleSheet, View } from "react-native";
import Font from '../../assets/fonts';
import { moderateScale, verticalScale } from '../../utils/Metric';
import COLOR from '../../utils/ColorSystem';

class InputTextBasic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {inputTitle, inputType, background, textColor} = this.props;
    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>{inputTitle}</Text>
            <TextInput style={styles.inputTextContainer} keyboardType={inputType}/>
          </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{marginVertical:verticalScale(8), flex:1},
    inputTitle:{marginBottom:8, fontSize:moderateScale(14), color:COLOR.BLUISH_GREY, fontFamily: Font.NunitoRegular},
    inputTextContainer:{padding:8, fontSize:moderateScale(18), fontFamily:Font.NunitoRegular, borderWidth:1, borderBottomColor:COLOR.BLUISH_GREY, borderRadius:8}
})

export default InputTextBasic;
