import React, {Component} from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Font from '../../assets/fonts';

class ButtonBasic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {buttonText, background, textColor} = this.props;
    return (
        <TouchableOpacity style={styles.container(background)}>
            <Text style={styles.buttonText(textColor)}>{buttonText}</Text>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container:(bgColor)=> ({
        backgroundColor:bgColor,
        padding:12,
        alignItems:'center',
        borderRadius: 10,
      }),
      buttonText:(textColor)=>({color:textColor, fontSize:18, fontFamily: Font.NunitoMedium})
})

export default ButtonBasic;
