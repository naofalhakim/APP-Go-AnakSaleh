import React, {Component} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

class SplashPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View />
    // return (
    //   <SafeAreaView
    //     style={{
    //       backgroundColor: COLOR.BLUE_PRIMER,
    //       display: 'flex',
    //       flex: 1,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}>
    //     <StatusBar
    //       barStyle={'light-content'}
    //       backgroundColor={COLOR.BLUE_PRIMER}
    //     />
    //     <Image source={IMG.bgSplash} style={{width: 'auto', height: 'auto'}} />
    //     <Image
    //       source={ICON.ic_splash}
    //       width={horizontalScale(60)}
    //       height={verticalScale(20)}
    //     />
    //   </SafeAreaView>
    // );
  }
}

export default SplashPage;
