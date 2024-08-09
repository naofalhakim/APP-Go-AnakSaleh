import React, { Component } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import HeaderBasic from '../../components/HeaderBasic';
import { SCREEN_NAME } from '../../utils/Enum';
import PointBar from '../../components/PointBar';
import COLOR from '../../utils/ColorSystem';
import ICON from '../../assets/icons';
import { MateriSub1, MateriSub2 } from '../../utils/DataDummy';

const Content = [
  {
  id: 1,
  title: "Materi 1 : Adiksi Game Online",
  subMateri: MateriSub1,
  module:{},
  contents: [
    'content text 1',
    'content text 2',
  ],
  nextId: 2,
  prevId: 1,
},
{
  id: 2,
  title: "Materi 2 : Muraqabah",
  subTitle: "Pengertian adiksi game online",
  thumbnail: 'link',
  contents: [
    'content text 1',
    'content text 2',
  ],
  nextId: 2,
  prevId: 1,
}
]

const MateriContent = [MateriSub1, MateriSub2]

const _renderSubHeader = () => {
  return(
    <View></View>
  )
}

class ElearningScreen extends Component {
  constructor(props) {
    super(props);

    this._renderContainerMateri = this._renderContainerMateri.bind(this)
    this._getMateri = this._getMateri.bind(this)

    this.state = {
      position: 0,
    }

    this.contents = {}
    this.idMateri = props.route.params.idMateri
    this.idSubMateri = props.route.params.idSubMateri
  }

  componentDidMount(){
    // this.contents = Content[]
    this._getMateri()
  }

  _getMateri(){
    let subMateriContent = MateriContent[this.idMateri];
    
    let materi = subMateriContent.find((subMateri)=>
      subMateri.id === this.idSubMateri
    )

    console.log(materi, 'materi')
  }

  _renderContainerMateri(data) {
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
            onPress={() => this.props.navigation.navigate(SCREEN_NAME.LEARNING_MODULE, { ...data })
            }>
            <Text style={styles.buttonStatusText}>
              {this.getButtonStatus(unitStatus)}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

  _renderSubMater(){

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBasic
          navigation={this.props.navigation}
          screenName={SCREEN_NAME.ELEARNING_SCREEN}
          title={Content.title}
        />
        <View style={styles.margin}>
          {/* {this._renderContainerMateri(Content)} */}
        </View>


      </SafeAreaView>
    )
  }
}

export default ElearningScreen;
