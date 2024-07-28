import React, { Component } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import HeaderBasic from '../../components/HeaderBasic';
import { SCREEN_NAME } from '../../utils/Enum';
import PointBar from '../../components/PointBar';
import COLOR from '../../utils/ColorSystem';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metric';
import Font from '../../assets/fonts';
import ICON from '../../assets/icons';

const Materi = [
  {
    title: "Adiksi Game Online",
    description: "Penjelasan singkat terkait silabus materi 1 / intro materi contoh: materi 1 akan mempelajari apa itu adiksi game online dll.",
    unitTotal: 4,
    unitFinished: 4,
    unitStatus: 3,
    thumbnail: "image"
  }
]

class MateriScreen extends Component {
  constructor(props) {
    super(props);
  }

  getUnitStatus = (statusCode) => {
    switch(statusCode){
      case 1: return 'Belum dikerjakan';
      case 2: return "Sedang dipelajari"
      case 3: return "Selesai"
      
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBasic
          navigation={this.props.navigation}
          screenName={SCREEN_NAME.MATERI}
          rightComponent={() => <PointBar background={COLOR.TRANSPARENT} point={3000} />}
        />
        <View style={styles.margin}>
          <View style={{
            backgroundColor: COLOR.BLUE_EGG_DUCK,
            borderRadius: 10,
            padding: moderateScale(20),
            shadowColor: COLOR.BLACK,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            alignItems:'center',
          }}>
            <View style={{
              backgroundColor: COLOR.AQUARIUM_BLUE,
              width: horizontalScale(186),
              height: verticalScale(186),
              borderRadius: 100,
            }}>
              <Image />
            </View>

            <View style={{
              backgroundColor: COLOR.AQUARIUM_BLUE,
              paddingHorizontal: horizontalScale(18),
              paddingVertical: verticalScale(12),
              borderRadius: moderateScale(10),
              marginTop: verticalScale(15),
              alignItems:'center',
            }}>
              <Text style={{
                color: COLOR.WHITE,
                fontFamily: Font.NunitoBold,
                fontSize: moderateScale(16),
              }}>Materi 1: {Materi[0].title}</Text>
              <Text style={{
                color: COLOR.WHITE,
                fontFamily: Font.NunitoSemiBold,
                fontSize: moderateScale(12),
                marginTop: verticalScale(12),
                marginBottom: verticalScale(14),
                textAlign: 'center',
              }}>{Materi[0].description}</Text>
              <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent: 'center'
              }}>
                <Text style={{
                  color: COLOR.WHITE,
                  fontFamily: Font.NunitoBold,
                }}>{Materi[0].unitFinished + " / " + Materi[0].unitTotal}</Text>
                <View style={{
                  backgroundColor: COLOR.WHITE,
                  height: '70%',
                  borderRadius: 10,
                  width: horizontalScale(2),
                  marginHorizontal: horizontalScale(12),
                }} />
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: verticalScale(12)
                }}>
                  <Image source={ICON.icon_status_unit}/>
                  <Text style={{
                  color: COLOR.WHITE,
                  fontFamily: Font.NunitoSemiBold,
                  marginLeft: horizontalScale(4),
                }}>{getUnitStatus(Materi[0].unitStatus)}</Text>
                </View>
              </View>
              <TouchableOpacity style={{
                backgroundColor: COLOR.WHITE,
                paddingVertical: verticalScale(12),
                paddingHorizontal: moderateScale(18),
                borderRadius:20,
                marginTop: 12,
              }}>
                <Text style={{
                  color: COLOR.CIYAN_Opaque,
                  fontFamily: Font.NunitoBold,
                  fontSize:12
                }}>
                Pelajari Ulang
                </Text>
                </TouchableOpacity>
            </View>

          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default MateriScreen;
