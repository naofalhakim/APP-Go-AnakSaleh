import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../utils/ColorSystem';
import styles from './styles';
import ButtonBasic from '../../components/ButtonBasic';
import { verticalScale } from '../../utils/Metric';
import HeaderBasic from '../../components/HeaderBasic';
import { SCREEN_NAME, STORAGE_KEY } from '../../utils/Enum';
import ICON from '../../assets/icons';
import PointBar from '../../components/PointBar';
import { getData, removeData } from '../../services/LocalStorage';
import { getGenderText } from '../../utils/utils';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.getUserData();
  }

  async getUserData(){
    let user = await getData(STORAGE_KEY.USER_LOGIN);
    this.setState({user})
  }

  _doSubmit() {
    this.props.navigation.navigate(SCREEN_NAME.UPDATE_PASSWORD);
  }

  _logout() {
    removeData(STORAGE_KEY.USER_LOGIN);
    this.props.navigation.navigate(SCREEN_NAME.LOGIN);
  }

  render() {
    const {age, name, email, gender, phone, point} = this.state.user
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBasic navigation={this.props.navigation} title={'Profil'} hideBackButton />
        <ScrollView style={styles.margin}>

          <View style={styles.photoContainer}>
            <Image source={ICON.ic_profile} />
          </View>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.emailText}>{email}</Text>

          <View style={styles.pointSectionContainer}>
            <View style={styles.pointSection}>
              <Text style={styles.captionPointText}>Point yang sudah dikumpulkan :</Text>
              <PointBar point={point} />
            </View>
            <Text style={styles.textLinkReward}>Lihat reward yang bisa kamu dapatkan</Text>
          </View>

          <View style={styles.userSection}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate(SCREEN_NAME.UPDATE_PROFILE)}>
              <Image style={styles.iconEdit} source={ICON.ic_edit} />
            </TouchableOpacity>
            <View style={{ marginTop: verticalScale(12) }} />
            <View style={styles.dataSection}>
              <Text style={styles.textLabel}>Umur</Text>
              <Text style={styles.valueLabel}>{age +' Tahun'}</Text>
            </View>
            <View style={styles.dataSection}>
              <Text style={styles.textLabel}>Jenis Kelamin</Text>
              <Text style={styles.valueLabel}>{getGenderText(gender)}</Text>
            </View>
            <View style={styles.dataSection}>
              <Text style={styles.textLabel}>No. telp</Text>
              <Text style={styles.valueLabel}>{phone}</Text>
            </View>
          </View>

          <View style={{ marginTop: verticalScale(14) }} />
          <ButtonBasic
            textColor={COLOR.WHITE}
            background={COLOR.BLUE_PRIMER}
            buttonText={'Ubah Kata Sandi'}
            onPress={() => this._doSubmit()}
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
