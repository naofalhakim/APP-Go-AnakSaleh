import React, {Component} from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Font from '../../assets/fonts';

class ButtonBasic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {buttonText, background, textColor, fontSize, underline, containerStyle } = this.props;
    return (
      <View style={[{display:'flex'}, containerStyle]}>
        <TouchableOpacity style={styles.buttonContainer(background)}>
            <Text style={styles.buttonText(textColor, fontSize, underline)}>{buttonText}</Text>
          </TouchableOpacity>
          </View>
    );
  }
}

const styles = StyleSheet.create({
    buttonContainer:(bgColor)=> ({
        backgroundColor:bgColor,
        padding:12,
        borderRadius: 10,
      }),
      buttonText:(textColor, fontSize, underline)=>({
        alignSelf: 'center',
        color:textColor, 
        fontSize: fontSize ||18, 
        fontFamily: Font.NunitoMedium,
        textDecorationLine: underline ? 'underline' : 'none',
      })
})

export default ButtonBasic;
