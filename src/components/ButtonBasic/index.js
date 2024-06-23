import React, {Component} from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Font from '../../assets/fonts';
import COLOR from '../../utils/ColorSystem';

class ButtonBasic extends Component {
  constructor(props) {
    super(props);

    this.bgColor = COLOR.BLUISH_GREY;
    this.textColor = COLOR.WHITE;
  }

  _onPressAction(){
    if(this.props.onPress){
      this.props.onPress();
    }
  }

  _isActive(){
    if(this.props.onPress){
      return this.props.onPress() ? 0 : 1;
    }
    return 1
  }

  render() {
    const {buttonText, background = this.bgColor, textColor = this.textColor, fontSize, underline, containerStyle, } = this.props;
    return (
      <View style={[{display:'flex'}, containerStyle]}>
        <TouchableOpacity activeOpacity={this._isActive()} style={styles.buttonContainer(background)} onPress={()=> this._onPressAction()}>
            <Text style={styles.buttonText(textColor, fontSize, underline)}>{buttonText}</Text>
          </TouchableOpacity>
          </View>
    );
  }
}

const styles = StyleSheet.create({
    buttonContainer:(bgColor)=> ({
        backgroundColor: bgColor,
        padding:12,
        borderRadius: 10,
      }),
      buttonText:(textColor, fontSize, underline)=>({
        alignSelf: 'center',
        color: textColor || this.textColor, 
        fontSize: fontSize ||18, 
        fontFamily: Font.NunitoMedium,
        textDecorationLine: underline ? 'underline' : 'none',
      })
})

export default ButtonBasic;
