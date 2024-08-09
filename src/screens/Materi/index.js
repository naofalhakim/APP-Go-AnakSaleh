import React, { Component } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import HeaderBasic from '../../components/HeaderBasic';
import { SCREEN_NAME } from '../../utils/Enum';
import PointBar from '../../components/PointBar';
import COLOR from '../../utils/ColorSystem';
import { horizontalScale } from '../../utils/Metric';
import ICON from '../../assets/icons';
import PagerView from 'react-native-pager-view';

const Materi = [
  {
    id: 1,
    title: "Adiksi Game Online",
    description: "Penjelasan singkat terkait silabus materi 1 / intro materi contoh: materi 1 akan mempelajari apa itu adiksi game online dll.",
    unitTotal: 4,
    unitFinished: 4,
    unitStatus: 3,
    thumbnail: "image"
  },
  {
    id: 2,
    title: "Muraqabah",
    description: "Penjelasan singkat terkait silabus materi 2 / intro materi contoh: materi 2 akan mempelajari apa itu Muraqabah.",
    unitTotal: 4,
    unitFinished: 1,
    unitStatus: 2,
    thumbnail: "image"
  }
]

const Pagination = ({
  data,
  activeIndex,
  actionItem
}) => {
  return (
    <View style={styles.pagination}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity onPress={() => {
            actionItem(index)
          }} key={index} style={styles.paginationDotContainer}>
            <View
              style={[styles.paginationDot(activeIndex === index)]}
            />
          </TouchableOpacity>
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

    this.state = {
      position: 0,
    }

    this.refPagerView = React.createRef();
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
      <PagerView
        ref={this.refPagerView}
        initialPage={0}
        pageMargin={horizontalScale(20)}
        style={{
          flex: 1,
        }}
        onPageSelected={(e) => {
          this.setState({ position: e.nativeEvent.position })
        }}
      >
        {Materi.map(this._renderContainerMateri)}
      </PagerView>
    )
  }

  _renderContainerMateri(data, index) {
    const { illustration = ICON.ic_diamond, id, title = '', description = '', unitFinished = 0, unitTotal = 0, unitStatus = 0 } = data
    return (
      <View key={index} style={styles.cardContainer}>
        <View style={styles.imageCardContainer}>
          <Image source={illustration} />
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>{'Materi ' + id + ': ' + title}</Text>
          <Text style={styles.contentDesc}>{description}</Text>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Text style={styles.textUnit}>{unitFinished + " / " + unitTotal + " UNIT"}</Text>

            {unitStatus === 3 &&
              <View style={styles.lineSeparator} />
            }

            {unitStatus === 3 &&
              <View style={styles.contentStatusContainer}>
                <Image source={ICON.icon_status_unit} />
                <Text style={styles.contentStatusText}>{this.getUnitStatus(unitStatus)}</Text>
              </View>
            }

          </View>

          <TouchableOpacity
            style={styles.buttonStatus}
            onPress={() => this.props.navigation.navigate(SCREEN_NAME.LEARNING_MODULE, { ...data})
            }>
            <Text style={styles.buttonStatusText}>
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

          <Pagination
            data={Materi}
            activeIndex={this.state.position}
            actionItem={(index) => {
              if (this.refPagerView) {
                this.refPagerView.current.setPage(index)
              }
            }}
          />
        </View>


      </SafeAreaView>
    )
  }
}

export default MateriScreen;
