import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View } from "react-native";
import Font from '../../assets/fonts';
import { moderateScale, verticalScale } from '../../utils/Metric';
import COLOR from '../../utils/ColorSystem';

class InputTextBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
    }
    this.value = '';
    this.errorMessage = '';
    this.validationStatus = false;
    this.eightMinCharReq = false;
  }

  _handleOnChange(value) {
    this.value = value

    if (this.props.onChangeText) {
      this.props.onChangeText(value);
    }
  }

  _onFocusAndBlur(isFocus) {
    this.setState({ isFocus });
    this._handleValidation();
  }

  _handleMandatory() {
    if (this.props.mandatory) {
      if (this.value.length == 0) {
        let text = this.props.inputTitle || this.props.placeholder || 'information';
        this.validationStatus = false;
        this.errorMessage = text.toLowerCase() + ' harus diisi';
      } else {
        this.validationStatus = true;
        // this.errorMessage = '';
      }
    }
  }

  _handleEmail() {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.value.length > 0) {
      if (re.test(this.value)) {
        this.validationStatus = true;
      } else {
        this.validationStatus = false;
        this.errorMessage = this.props.errorMessageWhenInvalidFormat
          ? this.props.errorMessageWhenInvalidFormat
          : "email tidak sesuai";
      }
    }
  }

  _handleName() {
    var re = /^[a-zA-Z ]{2,30}$/;

    if (re.test(this.value)) {
      this.validationStatus = true;
    } else {
      this.validationStatus = false;
      this.errorMessage = this.props.errorMessageWhenInvalidFormat
        ? this.props.errorMessageWhenInvalidFormat
        : 'Please enter a valid name';
    }
  }

  _handlePassword() {
    this.eightMinCharReq = true;
    // this.oneUppercaseCharReq = true;
    // this.oneNumberCharReq = true;

    if (this.value.length < 8) this.eightMinCharReq = false;
    // if (!/\d/.test(this.value)) this.oneNumberCharReq = false;
    // if (!/[A-Z]/.test(this.value)) this.oneUppercaseCharReq = false;

    if (
      this.eightMinCharReq 
      // && this.oneNumberCharReq &&
      // this.oneUppercaseCharReq
    )
      this.validationStatus = true;
    else {
      this.errorMessage = 'kata sandi harus lebih dari 8 digit'
      this.validationStatus = false
    };

    // const invalidCheckIcon = this.firstPasswordCheck
    //   ? this.checkGray
    //   : this.checkRed;

    // this.setState({
    //   passwordReqEightChar: !this.eightMinCharReq
    //     ? invalidCheckIcon
    //     : this.checkGreen,
    //   passwordReqOneNumber: !this.oneNumberCharReq
    //     ? invalidCheckIcon
    //     : this.checkGreen,
    //   passwordReqOneUppercase: !this.oneUppercaseCharReq
    //     ? invalidCheckIcon
    //     : this.checkGreen,
    // });
  }

  _handlePhone() {
    var re = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;

    if (re.test(this.value)) {
      this.validationStatus = true;
    } else {
      this.validationStatus = false;
      this.props.errorMessageWhenInvalidFormat
        ? this.props.errorMessageWhenInvalidFormat
        : 'Invalid';
    }
  }

  _handleValidation() {
    this._handleMandatory();
    if (this.validationStatus) {
      if (this.props.inputType === 'email') {
        this._handleEmail();
      } else if (this.props.inputType === 'password') {
        this._handlePassword();
      }
      //   if (this.props.type == 'name') {
      //     this._handleName();
      //   } else if (this.props.type == 'email') {
      //     this._handleEmail();
      //   } else if (this.props.type == 'phone') {
      //     if (this.props.mandatory || this.value.length > 0) {
      //       this._handlePhone();
      //     }
      //   } else if (this.props.type == 'prefix_phone') {
      //     if (this.props.mandatory || this.value.length > 0) {
      //       this._handlePrefixPhone();
      //     }
      //   } else if (this.props.type === 'password') {
      //     if (this.props.mandatory && this.props.showPasswordCriteria) {
      //       this._handlePassword();
      //     }
      //   } else if (this.props.type === 'number') {
      //     if (this.props.mandatory || this.value.length > 0) {
      //       this._handleNumber();
      //     }
      //   } else if (this.props.type === 'email-phone') {
      //     if (this.props.mandatory || this.value.length > 0)
      //       this._handleEmailPhone();
      //   } else if (this.props.type === 'alp-num') {
      //     if (this.props.mandatory || this.value.length > 0)
      //       this._handleAlphaNumeric();
      //   }
      // }
      // if (this.validationStatus) {
      //   this.errorMessage = '';
    }
    if (this.validationStatus) {
      this.errorMessage = '';
    }
  }

  render() {
    const { inputTitle, inputType, background, textColor, placeholder } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.inputTitle}>{inputTitle}</Text>
          <Text style={styles.errorMessage}>{this.errorMessage}</Text>
        </View>
        <TextInput
          onFocus={() => this._onFocusAndBlur(true)}
          onBlur={() => this._onFocusAndBlur(false)}
          style={styles.inputTextContainer(this.state.isFocus, textColor)}
          keyboardType={inputType}
          inputMode={inputType}
          autoCapitalize='none'
          underlineColorAndroid={'transparent'}
          autoCorrect={false}
          autoCompleteType={inputType}
          autoComplete={inputType}
          placeholder={placeholder}
          onChangeText={value => this._handleOnChange(value)}
          secureTextEntry={inputType === 'password'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, marginVertical: verticalScale(8) },
  inputTitle: { marginBottom: 8, fontSize: moderateScale(16), color: COLOR.BLUISH_GREY, fontFamily: Font.NunitoRegular },
  errorMessage: {
    marginBottom: 8,
    fontSize: moderateScale(12),
    color: COLOR.WATERMELON,
    fontFamily: Font.NunitoMedium
  },
  inputTextContainer:
    (isFocus, textColor) => ({
      color: textColor || COLOR.BLACK,
      padding: 12,
      fontSize: moderateScale(16),
      fontFamily: Font.NunitoRegular,
      borderWidth: 1,
      borderColor: isFocus ? COLOR.BLUE_PRIMER : COLOR.GREEN_WHITE,
      borderRadius: 8
    })
})

export default InputTextBasic;
