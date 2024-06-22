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

  _doLogin(){
    console.log('Login');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.margin}>
          <Image source={ICON.ic_header_app} style={styles.iconHeader} />
          <View style={{ marginHorizontal: verticalScale(8), }}>
            <Text style={styles.headerText}>Masuk dan mulai belajar</Text>
            <View style={{ marginTop: verticalScale(40) }}>

              <InputTextBasic mandatory inputTitle={'Email'} inputType={'email'} placeholder={'masukkan email'} />
              <InputTextBasic mandatory inputTitle={'Kata Sandi'} inputType={'password'} placeholder={'masukkan kata sandi'}/>
              
              <Text onPress={()=> this.props.navigation.navigate('ForgotPassword')} style={styles.underlineText}>Lupa Kata Sandi</Text>

              <View style={{ marginTop: verticalScale(40) }} />
              <ButtonBasic 
                textColor={COLOR.WHITE} 
                background={COLOR.BLUE_PRIMER} 
                buttonText={'Masuk'} 
                onPress={()=> this._doLogin()}
                />
              <ButtonBasic 
                textColor={COLOR.BLUISH_GREY} 
                background={COLOR.TRANSPARENT} 
                buttonText={'Buat akun baru'} 
                onPress={()=> this.props.navigation.navigate('Register')}
                />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Login;
