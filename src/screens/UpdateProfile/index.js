import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../utils/ColorSystem';
import styles from './styles';
import ButtonBasic from '../../components/ButtonBasic';
import { horizontalScale, verticalScale } from '../../utils/Metric';
import HeaderBasic from '../../components/HeaderBasic';
import { SCREEN_NAME, STORAGE_KEY } from '../../utils/Enum';
import ICON from '../../assets/icons';
import PointBar from '../../components/PointBar';
import { getData, removeData } from '../../services/LocalStorage';
import { getGenderText } from '../../utils/utils';
import InputTextBasic from '../../components/InputTextBasic';
import InputPickerBasic from '../../components/InputPickerBasic';

class UpdateProfile extends Component {
  formValues = {
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
  }
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }

    this._inputValidation = this._inputValidation.bind(this);
  }

  datUserOld = {};


  componentDidMount() {
    this.getUserData();
  }

  async getUserData() {
    let user = await getData(STORAGE_KEY.USER_LOGIN);
    this.datUserOld = user
    this.setState({ user })
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
    const { age, name, email, gender, phone, point } = this.state.user
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBasic navigation={this.props.navigation} title={'Ubah Profil'} />

        <ScrollView style={styles.margin}>

          <View style={styles.photoContainer}>
            <Image source={ICON.ic_profile} />
          </View>
          <Text style={styles.emailText}>{email}</Text>

          <View style={{ marginVertical: verticalScale(14), paddingTop: verticalScale(12), borderTopWidth: 0.7, borderColor: COLOR.GREY_CLOUD }}>

            <InputTextBasic id={'name'} inputTitle={'Nama'} inputType={'name'} placeholder={'masukkan nama'}
              onChangeText={this._inputValidation}
            />
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', zIndex: 2 }}>
              <View style={{ minWidth: '20%', maxWidth: '30%', marginRight: horizontalScale(12) }}>
                <InputTextBasic id={'age'} inputTitle={'Umur'} inputType={'age'} placeholder={'masukkan umur'}
                  onChangeText={this._inputValidation}
                />
              </View>
              <InputPickerBasic id={'gender'} inputTitle={'Jenis Kelamin'} placeholder={'Jenis kelamin'}
                onChangeValue={this._inputValidation}
              />
            </View>

            <InputTextBasic id={'telp'} inputTitle={'No. Telpon'} inputType={'telp'} placeholder={'masukkan nomor telphon'}
              onChangeText={this._inputValidation}
            />

            <View style={{marginTop: verticalScale(24)}}>
              <ButtonBasic
                textColor={COLOR.WHITE}
                background={COLOR.BLUE_PRIMER}
                buttonText={'Simpan'}
                onPress={() => this._doSubmit()}
              />
            </View>

          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default UpdateProfile;
