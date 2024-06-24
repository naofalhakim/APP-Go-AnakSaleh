import React, { PureComponent } from 'react';
import { Text, StyleSheet, ActivityIndicator, View } from "react-native";
import Font from '../../assets/fonts';
import { moderateScale, verticalScale } from '../../utils/Metric';
import COLOR from '../../utils/ColorSystem';
import Modal from 'react-native-modal';

class LoaderBasic extends PureComponent {
  constructor(props) {
    super(props);
  }



  render() {
    const { isShow } = this.props;
    return (
      <Modal
        isVisible={isShow}
        hasBackdrop
        backdropColor={COLOR.BLACK}
        backdropOpacity={0.70}
        useNativeDriver
      >
        <View style={styles.container}>
          <ActivityIndicator size={'large'} color={COLOR.BLUE_PRIMER} />
          <Text style={styles.titleText}>Loading...</Text>
        </View>

      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignSelf:'center',
    marginTop:'100%',
  },
  titleText: {
    fontSize: moderateScale(16),
    fontFamily: Font.NunitoSemiBold,
    color: COLOR.WHITE,
    marginTop: verticalScale(12),
  }
})

export default LoaderBasic;
