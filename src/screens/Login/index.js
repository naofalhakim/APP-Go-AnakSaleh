import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import ICON from '../../assets/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../utils/ColorSystem';
import styles from './styles';
import ButtonBasic from '../../components/ButtonBasic';
import { verticalScale } from '../../utils/Metric';
import InputTextBasic from '../../components/InputTextBasic';

class Login extends Component {
  formValues = {
    email: {
      value: '',
      validationStatus: false,
      errorMessage: '',
    },
    password: {
      value: '',
      validationStatus: false,
      errorMessage: '',
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      isButtonActive: false,
    }

    this._inputValidation = this._inputValidation.bind(this);
  }  

  _doLogin() {
    console.log('Login');
  }

  _inputValidation(id, value, validationStatus, errorMessage) {
    console.log(this.formValues, 'this.formValues');
    this.formValues[id] = {
      value,
      validationStatus,
      errorMessage
    }

    if (validationStatus) {
      let allValid = true;
      for (let index in this.formValues) {
        if (!this.formValues[index].validationStatus) {
          allValid = false;
          break;
        }
      }

      this.setState({isButtonActive: allValid})
    }else{
      this.setState({isButtonActive: false})
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.margin}>
          <Image source={ICON.ic_header_app} style={styles.iconHeader} />
          <View style={{ marginHorizontal: verticalScale(8), }}>
            <Text style={styles.headerText}>Masuk dan mulai belajar</Text>
            <View style={{ marginTop: verticalScale(40) }}>

              <InputTextBasic id={'email'} mandatory inputTitle={'Email'} inputType={'email'} placeholder={'masukkan email'}
                onChangeText={this._inputValidation}
              />
              <InputTextBasic id={'password'} mandatory inputTitle={'Kata Sandi'} inputType={'password'} placeholder={'masukkan kata sandi'}
                onChangeText={this._inputValidation}
              />

              <Text onPress={() => this.props.navigation.navigate('ForgotPassword')} style={styles.underlineText}>Lupa Kata Sandi</Text>

              <View style={{ marginTop: verticalScale(40) }} />
              <ButtonBasic
                textColor={COLOR.WHITE}
                isDisable={!this.state.isButtonActive}
                background={this.state.isButtonActive ? COLOR.BLUE_PRIMER : COLOR.BLUISH_GREY}
                buttonText={'Masuk'}
                onPress={() => this._doLogin()}
              />
              <ButtonBasic
                textColor={COLOR.BLUISH_GREY}
                background={COLOR.TRANSPARENT}
                buttonText={'Buat akun baru'}
                onPress={() => this.props.navigation.navigate('Register')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Login;
