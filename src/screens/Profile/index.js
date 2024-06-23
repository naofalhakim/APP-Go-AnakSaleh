import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../utils/ColorSystem';
import styles from './styles';
import ButtonBasic from '../../components/ButtonBasic';
import { horizontalScale, verticalScale } from '../../utils/Metric';
import InputTextBasic from '../../components/InputTextBasic';
import HeaderBasic from '../../components/HeaderBasic';
import { SCREEN_NAME } from '../../utils/Enum';
import ICON from '../../assets/icons';
import PointBar from '../../components/PointBar';

class Profile extends Component {
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

  _logout() {
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
        <HeaderBasic navigation={this.props.navigation} title={'Profil'} hideBackButton />
        <ScrollView style={styles.margin}>

          <View style={styles.photoContainer}>
            <Image source={ICON.ic_profile} />
          </View>
          <Text style={styles.nameText}>Fulan</Text>
          <Text style={styles.emailText}>fulan@gmail.com</Text>

          <View style={styles.pointSectionContainer}>
            <View style={styles.pointSection}>
              <Text style={styles.captionPointText}>Point yang sudah dikumpulkan :</Text>
              <PointBar point={3213} />
            </View>
            <Text style={styles.textLinkReward}>Lihat reward yang bisa kamu dapatkan</Text>
          </View>

          <View style={styles.userSection}>
            <TouchableOpacity>
              <Image style={styles.iconEdit} source={ICON.ic_edit} />
            </TouchableOpacity>
            <View style={{ marginTop: verticalScale(12) }} />
            <View style={styles.dataSection}>
              <Text style={styles.textLabel}>Umur</Text>
              <Text style={styles.valueLabel}>10 Tahun</Text>
            </View>
            <View style={styles.dataSection}>
              <Text style={styles.textLabel}>Jenis Kelamin</Text>
              <Text style={styles.valueLabel}>Laki - laki</Text>
            </View>
            <View style={styles.dataSection}>
              <Text style={styles.textLabel}>No. telp</Text>
              <Text style={styles.valueLabel}>0888-2222-1111</Text>
            </View>
          </View>

          <View style={{ marginTop: verticalScale(14) }} />
          <ButtonBasic
            textColor={COLOR.WHITE}
            background={COLOR.BLUE_PRIMER}
            buttonText={'Ubah Kata Sandi'}
            onPress={() => this.state.isButtonActive && this._doSubmit()}
          />

          <View style={{ marginTop: verticalScale(12) }} />

          <ButtonBasic
            textColor={COLOR.WHITE}
            background={COLOR.PAPAYA_ORANGE}
            buttonText={'Keluar'}
            onPress={() => this._logout()}
          />

        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Profile;
