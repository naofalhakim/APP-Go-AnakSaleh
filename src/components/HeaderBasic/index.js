import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import Font from '../../assets/fonts';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metric';
import ICON from '../../assets/icons';
import { SCREEN_NAME } from '../../utils/Enum';

class HeaderBasic extends Component {
  constructor(props) {
    super(props);
  }


  renderHeader() {
    const { screenName } = this.props;
    if (screenName === SCREEN_NAME.MATERI) {
      return this.renderHeaderLogo()
    } else {
      return this.renderDefaultHeader()
    }

  }

  renderHeaderLogo() {
    const { rightComponent = <View /> } = this.props;
    return (
      <View style={[styles.container, styles.justifyLayout]}>
        <Image source={ICON.ic_header_app} style={styles.iconHeader} />
        {rightComponent()}
      </View>
    )
  }

  renderDefaultHeader() {
    const { title, navigation, hideBackButton = false } = this.props;
    return (
      <View style={[styles.container, styles.centerLayout]}>
        {hideBackButton || <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ICON.ic_back} style={styles.backButton} />
        </TouchableOpacity>}
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    );
  }

  render() {
    return this.renderHeader();
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.2,
    paddingHorizontal: horizontalScale(12),
    height: verticalScale(55),
    borderBottomColor: 'black',
    display: 'flex',
  },
  centerLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backButton: {
    width: horizontalScale(24),
    height: verticalScale(24)
  },
  textContainer: {
    flex: 1,
    alignItems: 'center'
  },
  titleText: {
    fontSize: moderateScale(20),
    fontFamily: Font.NunitoSemiBold,
  },
  iconHeader: { width: horizontalScale(148), height: verticalScale(18), },
})

export default HeaderBasic;
