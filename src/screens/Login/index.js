import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ICON from '../../assets/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLOR from '../../utils/ColorSystem';
import Font from '../../assets/fonts';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1 }}>
        <View style={{ marginTop: 64, flex:1, margin: 24, }}>
          <Image source={ICON.ic_header_app} style={{width:220, height:25, alignSelf:'center'}}/>

          <Text style={{color:COLOR.BLUE_PRIMER, fontSize:20, maxWidth:'50%',fontFamily: Font.NunitoBlack}}>Masuk dan mulai belajar</Text>

          <TouchableOpacity style={{
            backgroundColor:COLOR.BLUE_PRIMER,
            padding:12,
            alignItems:'center',
            borderRadius: 10,
            marginHorizontal: 24,
          }}>
            <Text style={{color:COLOR.WHITE, fontSize:18, fontWeight:600}}>Masuk</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            padding:12,
            alignItems:'center',
            borderRadius: 10,
            marginHorizontal: 24,
          }}>
            <Text style={{fontSize:18, color:COLOR.BLUISH_GREY}}>Buat akun baru</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
