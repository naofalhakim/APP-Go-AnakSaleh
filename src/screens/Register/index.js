import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import ICON from '../../assets/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../utils/ColorSystem';
import styles from './styles';
import ButtonBasic from '../../components/ButtonBasic';
import { horizontalScale, verticalScale } from '../../utils/Metric';
import InputTextBasic from '../../components/InputTextBasic';
import HeaderBasic from '../../components/HeaderBasic';

class Register extends Component {
  formValues = {
    email: {
      value: '',
      validationStatus: false,
      errorMessage: '',
    },
    name: {
      value: '',
      validationStatus: false,
      errorMessage: '',
    },
    age: {
      value: '',
      validationStatus: false,
      errorMessage: '',
    },
    gender: {
      value: '',
      validationStatus: false,
      errorMessage: '',
    },
    telp: {
      value: '',
      validationStatus: false,
      errorMessage: '',
    },
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

  _doRegister() {
    console.log('Register');
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

      this.setState({ isButtonActive: allValid })
    } else {
      this.setState({ isButtonActive: false })
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBasic navigation={this.props.navigation} title={'Daftar Akun'} />
        <ScrollView style={styles.margin}>
          <View>
            <InputTextBasic id={'email'} mandatory inputTitle={'Email'} inputType={'email'} placeholder={'masukkan email'}
              onChangeText={this._inputValidation}
            />
            <InputTextBasic id={'name'} mandatory inputTitle={'Nama'} inputType={'name'} placeholder={'masukkan nama'}
              onChangeText={this._inputValidation}
            />
            <View style={{flex:1, flexDirection:'row', flexWrap:'wrap' }}>
              <View style={{minWidth:'20%', maxWidth:'30%', marginRight:horizontalScale(12)}}>
              <InputTextBasic id={'age'} mandatory inputTitle={'Umur'} inputType={'age'} placeholder={'masukkan umur'}
                onChangeText={this._inputValidation}
              />
              </View>
              <InputTextBasic id={'gender'} mandatory inputTitle={'Jenis Kelamin'} inputType={'gender'} placeholder={'jenis kelamin'}
                onChangeText={this._inputValidation}
              />
            </View>

            <InputTextBasic id={'telp'} mandatory inputTitle={'No. Telpon'} inputType={'telp'} placeholder={'masukkan nomor telphon'}
              onChangeText={this._inputValidation}
            />
            <InputTextBasic id={'password'} mandatory inputTitle={'Kata Sandi'} inputType={'password'} placeholder={'masukkan kata sandi'}
              onChangeText={this._inputValidation}
            />
            <InputTextBasic id={'confirm_password'} mandatory inputTitle={'Konfirmasi Kata Sandi'} inputType={'password'} placeholder={'masukkan kata sandi'}
              onChangeText={this._inputValidation}
              password={this.formValues.password.value}
            />

            <View style={{ marginTop: verticalScale(40) }} />
            <ButtonBasic
              textColor={COLOR.WHITE}
              background={this.state.isButtonActive ? COLOR.BLUE_PRIMER : COLOR.BLUISH_GREY}
              buttonText={'Daftar Akun'}
              onPress={() => this.state.isButtonActive && this._doRegister()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Register;
