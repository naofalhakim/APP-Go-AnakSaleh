import React, { Component } from 'react';
import { Animated, FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import HeaderBasic from '../../components/HeaderBasic';
import { SCREEN_NAME } from '../../utils/Enum';

const MateriSub1 = [
  {
    id: 1,
    title: 'Pengertian adiksi game online',
    status: 3, //done
  },
  {
    id: 2,
    title: 'Akibat negatif game online',
    status: 2, //on going
  },
  {
    id: 3,
    title: 'Cara mengatasi adiksi game online',
    status: 1, //locked
  },
  {
    id: 4,
    title: 'Healthy gaming',
    status: 1, //on going
  },
]
const MateriSub2 = [
  {
    id: 1,
    title: 'Pengertian Muraqabah',
    status: 3, //done
  },
  {
    id: 2,
    title: 'Manfaat Muraqabah',
    status: 2, //on going
  },
  {
    id: 3,
    title: 'Tahapan dalam pelaksanaan muraqabah',
    status: 1, //locked
  },
]

const MateriSub = [MateriSub1, MateriSub2]

class LearningModuleScreen extends Component {
  constructor(props) {
    super(props);


    this.state = {
      position: 0,
    }

    this.dataMateri = MateriSub[props.route.params.id - 1]
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
            renderItem={({ item }) =>
              <View key={item.id} style={styles.headerContent}>
                <View style={[styles.itemContent, styles.shapeContent]}>
                  <Text style={styles.itemNumberText}> {item.id}</Text>
                  <Text style={styles.itemText}> {item.title}</Text>
                </View>
                <View style={[styles.shapeContent]}>
                  <Text>{item.status}</Text>
                </View>
              </View>
            }
          />

        </View>
      </SafeAreaView>
    )
  }
}

export default LearningModuleScreen;
