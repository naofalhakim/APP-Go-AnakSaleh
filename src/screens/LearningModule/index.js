import React, { Component } from 'react';
import { Animated, FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import HeaderBasic from '../../components/HeaderBasic';
import { SCREEN_NAME } from '../../utils/Enum';

const MateriSub = [
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

class LearningModuleScreen extends Component {
  constructor(props) {
    super(props);


    this.state = {
      position: 0,
    }
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
            data={MateriSub}
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
