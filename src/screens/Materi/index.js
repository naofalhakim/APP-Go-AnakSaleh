import React, { Component } from 'react';
import { Animated, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import HeaderBasic from '../../components/HeaderBasic';
import { SCREEN_NAME } from '../../utils/Enum';
import PointBar from '../../components/PointBar';
import COLOR from '../../utils/ColorSystem';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metric';
import Font from '../../assets/fonts';
import ICON from '../../assets/icons';
import PagerView from 'react-native-pager-view';

const Materi = [
  {
    title: "Adiksi Game Online",
    description: "Penjelasan singkat terkait silabus materi 1 / intro materi contoh: materi 1 akan mempelajari apa itu adiksi game online dll.",
    unitTotal: 4,
    unitFinished: 4,
    unitStatus: 3,
    thumbnail: "image"
  },
  {
    title: "Muraqabah",
    description: "Penjelasan singkat terkait silabus materi 2 / intro materi contoh: materi 2 akan mempelajari apa itu Muraqabah.",
    unitTotal: 4,
    unitFinished: 1,
    unitStatus: 2,
    thumbnail: "image"
  }
]

const DOT_SIZE = 40;

const Pagination = ({
  scrollOffsetAnimatedValue,
  positionAnimatedValue,
  data
}) => {
  const inputRange = [0, data.length];
  const translateX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, data.length * DOT_SIZE],
  });

  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: 'absolute',
            transform: [{ translateX: translateX }],
          },
        ]}
      />
      {data.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View
              style={[styles.paginationDot, { backgroundColor: item.color }]}
            />
          </View>
        );
      })}
    </View>
  );
};

class MateriScreen extends Component {
  constructor(props) {
    super(props);

    this._renderSwipeMenu = this._renderSwipeMenu.bind(this);
    this._renderContainerMateri = this._renderContainerMateri.bind(this);
    this.getUnitStatus = this.getUnitStatus.bind(this);

    this.scrollOffsetAnimatedValue = null;
    this.positionAnimatedValue = null;
    // this.scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
    // this.positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  }

  getUnitStatus(statusCode) {
    switch (statusCode) {
      case 1: return 'Belum dikerjakan';
      case 2: return "Sedang dipelajari"
      case 3: return "Selesai"

    }
  }
  getButtonStatus = (statusCode) => {
    switch (statusCode) {
      case 1: return 'MULAI BELAJAR';
      case 2: return "LANJUTKAN BELAJAR"
      case 3: return "PELAJARI ULANG"

    }
  }

  _renderSwipeMenu() {
    return (
      <PagerView initialPage={0}
        pageMargin={horizontalScale(20)}
        style={{
          flex: 1,
        }}
        // onPageScroll={Animated.event(
        //   [
        //     {
        //       nativeEvent: {
        //         offset: this.scrollOffsetAnimatedValue,
        //         position: this.positionAnimatedValue,
        //       },
        //     },
        //   ],
        //   {
        //     listener: ({ nativeEvent: { offset, position } }) => {
        //       console.log(`Position: ${position} Offset: ${offset}`);
        //     },
        //     useNativeDriver: true,
        //   }
        // )}
        >
        {Materi.map(this._renderContainerMateri)}
      </PagerView>
    )
  }

  _renderContainerMateri(data, index) {
    const { illustration = ICON.ic_diamond, title = '', description = '', unitFinished = 0, unitTotal = 0, unitStatus = 0, } = data
    return (
      <View key={index} style={{
        backgroundColor: COLOR.BLUE_EGG_DUCK,
        borderRadius: 10,
        padding: moderateScale(20),
        shadowColor: COLOR.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
      }}>
        <View style={{
          backgroundColor: COLOR.AQUARIUM_BLUE,
          width: horizontalScale(186),
          height: verticalScale(186),
          borderRadius: 100,
        }}>
          <Image source={illustration} />
        </View>

        <View style={{
          backgroundColor: COLOR.AQUARIUM_BLUE,
          paddingHorizontal: horizontalScale(18),
          paddingVertical: verticalScale(12),
          borderRadius: moderateScale(10),
          marginTop: verticalScale(15),
          alignItems: 'center',
        }}>
          <Text style={{
            color: COLOR.WHITE,
            fontFamily: Font.NunitoBold,
            fontSize: moderateScale(16),
          }}>{'Materi ' + (index + 1) + ': ' + title}</Text>
          <Text style={{
            color: COLOR.WHITE,
            fontFamily: Font.NunitoSemiBold,
            fontSize: moderateScale(12),
            marginTop: verticalScale(12),
            marginBottom: verticalScale(14),
            textAlign: 'center',
          }}>{description}</Text>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Text style={{
              color: COLOR.WHITE,
              fontFamily: Font.NunitoBold,
            }}>{unitFinished + " / " + unitTotal}</Text>

            {unitStatus === 3 &&
              <View style={{
                backgroundColor: COLOR.WHITE,
                height: verticalScale(16),
                borderRadius: 10,
                width: horizontalScale(2),
                marginHorizontal: horizontalScale(12),
              }} />
            }

            {unitStatus === 3 &&
              <View style={{
                flexDirection: 'row',
                marginBottom: verticalScale(12),
                marginTop: verticalScale(8)
              }}>
                <Image source={ICON.icon_status_unit} />
                <Text style={{
                  color: COLOR.WHITE,
                  fontFamily: Font.NunitoSemiBold,
                  marginLeft: horizontalScale(4),
                }}>{this.getUnitStatus(unitStatus)}</Text>
              </View>
            }

          </View>

          <TouchableOpacity style={{
            backgroundColor: COLOR.WHITE,
            paddingVertical: verticalScale(12),
            paddingHorizontal: moderateScale(18),
            borderRadius: 20,
            marginTop: 12,
          }}>
            <Text style={{
              color: COLOR.CIYAN_Opaque,
              fontFamily: Font.NunitoBold,
              fontSize: 12
            }}>
              {this.getButtonStatus(unitStatus)}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
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
          {this._renderSwipeMenu()}
          
          {/* <Pagination
            data={Materi}
            scrollOffsetAnimatedValue={this.scrollOffsetAnimatedValue}
            positionAnimatedValue={this.positionAnimatedValue}
          /> */}
        </View>
      </SafeAreaView>
    )
  }
}

export default MateriScreen;
