import React, { Component } from 'react';
import { FlatList, Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import HeaderBasic from '../../components/HeaderBasic';
import { SCREEN_NAME } from '../../utils/Enum';
import IMG from '../../assets/images';
import ICON from '../../assets/icons';
import { MateriSub1, MateriSub2 } from '../../utils/DataDummy';

//todo: need to load API Materi here, with this kind of data type
const MateriSub = [MateriSub1, MateriSub2]

class LearningModuleScreen extends Component {
  constructor(props) {
    super(props);


    this.state = {
      position: 0,
    }
    this.idMateri = props.route.params.id - 1
    this.dataMateri = MateriSub[props.route.params.id - 1]
    this._renderMateri = this._renderMateri.bind(this)
  }

  _getIconStatus(status) {
    switch (status) {
      case 1:
        return ICON.icon_materi_lock;
      case 2:
        return ICON.icon_materi_ongoing;
      case 3:
        return ICON.icon_materi_done;
    }
  }

  _checkIsPreviousMateriDone(index){
    if(index > 0){
      return this.dataMateri[index - 1].status === 3 //3: materi done
    }
    return false 
  }

  _renderMateri({ item, index }) {

    const { status = '', id = '', title = '' } = item
    let isActive = status > 1
    return status === 'next' ? this._renderMateriNext(item, index) : (
      <TouchableOpacity activeOpacity={1} key={id} style={styles.headerContent} 
        onPress={()=> {
          if(isActive){
            this.props.navigation.navigate(SCREEN_NAME.ELEARNING_SCREEN, {idMateri: this.idMateri, idSubMateri: id});
          }
        }}
      >
        <ImageBackground style={[styles.itemContent, styles.shapeContent]} source={IMG.bgMateri} resizeMode="stretch">
          <Text style={styles.itemNumberText}>{id}</Text>
          <Text style={styles.itemText}> {title}</Text>
        </ImageBackground>
        <ImageBackground source={IMG.bgMateriStatus} resizeMode="stretch" style={[styles.itemContentStatus, styles.shapeContent]}>
          <Image source={this._getIconStatus(status)} />
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  _renderMateriNext(item, index) {
    const { id = '', title = '', } = item
    let isActive = this._checkIsPreviousMateriDone(index)

    return (
      <TouchableOpacity activeOpacity={1} key={'next'+id} style={styles.headerContent} onPress={()=>{
        if(isActive){
          this.props.navigation.replace(SCREEN_NAME.LEARNING_MODULE, {...item})
        }
      }}>
        <ImageBackground style={[styles.itemContent, styles.shapeContent]} source={isActive ? IMG.bgMateri : IMG.bgMateriGrey} resizeMode="stretch">
          <Text style={styles.itemNumberText}>{title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  render() {
    let { title = '', id } = this.props.route.params;
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBasic
          navigation={this.props.navigation}
          screenName={SCREEN_NAME.LEARNING_MODULE}
          title={'Materi ' + id + ': ' + title}
        />

        <View style={styles.content}>
          <View style={styles.headerContent}>
            <Text style={styles.headerText}>Daftar Sub - Materi</Text>
            <Text style={styles.headerText}>Status</Text>
          </View>
          <FlatList
            data={this.dataMateri}
            renderItem={this._renderMateri}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default LearningModuleScreen;
