import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import ICON from '../../assets/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../utils/ColorSystem';
import Font from '../../assets/fonts';
import styles from './styles';
import ButtonBasic from '../../components/ButtonBasic';
import { verticalScale } from '../../utils/Metric';
import InputTextBasic from '../../components/InputTextBasic';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.margin}>
          <Image source={ICON.ic_header_app} style={styles.iconHeader}/>

          <Text style={styles.headerText}>Masuk dan mulai belajar</Text>
          <View style={{marginTop: verticalScale(40)}}>

          <InputTextBasic inputTitle={'Email'} inputType={'email'}/>
          <InputTextBasic inputTitle={'Password'} inputType={'password'} />
          <ButtonBasic textColor={COLOR.BLUISH_GREY} background={COLOR.TRANSPARENT} buttonText={'Lupa Katasandi'}/>
          
          <View style={{marginTop: verticalScale(40)}}/>
          <ButtonBasic textColor={COLOR.WHITE} background={COLOR.BLUE_PRIMER} buttonText={'Masuk'}/>
          <ButtonBasic textColor={COLOR.BLUISH_GREY} background={COLOR.TRANSPARENT} buttonText={'Buat akun baru'}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Login;
