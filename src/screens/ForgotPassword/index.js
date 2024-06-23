import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../utils/ColorSystem';
import styles from './styles';
import ButtonBasic from '../../components/ButtonBasic';
import { verticalScale } from '../../utils/Metric';
import InputTextBasic from '../../components/InputTextBasic';
import HeaderBasic from '../../components/HeaderBasic';

class ForgotPassword extends Component {
  formValues = {
    email: {
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

      this.setState({isButtonActive: allValid})
    }else{
      this.setState({isButtonActive: false})
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBasic navigation={this.props.navigation} title={'Reset Kata Sandi'} />
        <ScrollView style={styles.margin}>
            <View>
              <InputTextBasic id={'email'} mandatory inputTitle={'Email'} inputType={'email'} placeholder={'masukkan email'}
                onChangeText={this._inputValidation}
              />

              <Text style={styles.underlineText}>*Link untuk reset kata sandi akan dikirimkan melalui email terdaftar yang kamu inputkan</Text>

              <View style={{ marginTop: verticalScale(40) }} />
              <ButtonBasic
                textColor={COLOR.WHITE}
                background={this.state.isButtonActive ? COLOR.BLUE_PRIMER : COLOR.BLUISH_GREY}
                buttonText={'Masuk'}
                onPress={() => this.state.isButtonActive && this._doSubmit()}
              />
            
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ForgotPassword;
