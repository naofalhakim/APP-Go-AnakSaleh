import React, { Component } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import ICON from '../../assets/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../utils/ColorSystem';
import styles from './styles';
import ButtonBasic from '../../components/ButtonBasic';
import { verticalScale } from '../../utils/Metric';
import InputTextBasic from '../../components/InputTextBasic';
import { SCREEN_NAME, STORAGE_KEY } from '../../utils/Enum';
import axios from 'axios';
import { API_URL } from '../../utils/Urlconfig';
import LoaderBasic from '../../components/LoaderBasic';
import { getData, storeData, } from '../../services/LocalStorage';

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
      isLoading: false,
    }

    this._inputValidation = this._inputValidation.bind(this);
    this._resetForm = this._resetForm.bind(this);
    this._checkUserLogin = this._checkUserLogin.bind(this);
  }

  componentDidMount(){
    this._checkUserLogin();
  }

  _checkUserLogin() {
    getData(STORAGE_KEY.USER_LOGIN).then(data=>{
      if(data){
        this.props.navigation.replace(SCREEN_NAME.MAIN_MENU)
      }
    });
    
  }

  _resetForm() {
    this.formValues = {
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
  }

  _doLogin() {
    this.setState({
      isLoading: true
    })
    let data = {
      email: this.formValues.email.value,
      password: this.formValues.password.value,
    };

    let config = {
      method: 'post',
      url: API_URL.LOGIN,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        this.setState({
          isLoading: false
        })
        let resp = response.data;
        if (resp.data) {
          const dataUser = resp.data;
          storeData(STORAGE_KEY.USER_LOGIN, dataUser);

          this.props.navigation.navigate(SCREEN_NAME.MAIN_MENU)
        } else {
          Alert.alert('Login gagal', 'Email / kata sandi salah', () => {
            this._resetForm();
            this.forceUpdate();
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isLoading: false
        })
      });
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
        <ScrollView style={styles.margin}>
          <LoaderBasic isShow={this.state.isLoading} />
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

              <Text onPress={() => this.props.navigation.navigate(SCREEN_NAME.FORGOT_PASSWORD)} style={styles.underlineText}>Lupa Kata Sandi</Text>

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
                onPress={() => this.props.navigation.navigate(SCREEN_NAME.REGISTER)}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Login;
