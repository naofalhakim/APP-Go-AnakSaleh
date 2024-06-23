import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../utils/ColorSystem';
import styles from './styles';
import ButtonBasic from '../../components/ButtonBasic';
import { verticalScale } from '../../utils/Metric';
import InputTextBasic from '../../components/InputTextBasic';
import HeaderBasic from '../../components/HeaderBasic';
import { SCREEN_NAME } from '../../utils/Enum';

class ResetPassword extends Component {
  formValues = {
    password: {
      value: '',
      validationStatus: false,
      errorMessage: '',
    },
    confirm_password: {
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

  _doSubmit() {
    console.log('Login');
    this.props.navigation.navigate(SCREEN_NAME.LOGIN);
  }

  _inputValidation(id, value, validationStatus, errorMessage) {
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

      this.setState({ isButtonActive: allValid })
    } else {
      this.setState({ isButtonActive: false })
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBasic navigation={this.props.navigation} title={'Perbarui Kata Sandi'} />
        <ScrollView style={styles.margin}>
          <View>
            <InputTextBasic id={'password'} mandatory inputTitle={'Kata Sandi'} inputType={'password'} placeholder={'masukkan kata sandi baru'}
              onChangeText={this._inputValidation}
            />
            <InputTextBasic id={'confirm_password'} mandatory inputTitle={'Konfirmasi Kata Sandi'} inputType={'password'} placeholder={'masukkan kata sandi baru'}
              onChangeText={this._inputValidation}
              password={this.formValues.password.value}
            />

            <View style={{ marginTop: verticalScale(40) }} />
            <ButtonBasic
              textColor={COLOR.WHITE}
              background={this.state.isButtonActive ? COLOR.BLUE_PRIMER : COLOR.BLUISH_GREY}
              buttonText={'Perbarui'}
              onPress={() => this.state.isButtonActive && this._doSubmit()}
            />

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ResetPassword;
