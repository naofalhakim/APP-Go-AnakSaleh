import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Font from '../../assets/fonts';
import { moderateScale, verticalScale } from '../../utils/Metric';
import COLOR from '../../utils/ColorSystem';


class InputPickerBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      open: false,
      items: [
        { label: 'Laki-laki', value: 1 },
        { label: 'Perempuan', value: 2 },
      ],
    }
    this.value = null;
    this.errorMessage = '';
    this.validationStatus = false;

    this.setValue = this.setValue.bind(this);
    this.setOpen = this.setOpen.bind(this);
    this.setItems = this.setItems.bind(this);
    this._onFocusAndBlur = this._onFocusAndBlur.bind(this);
    this._handleValidation = this._handleValidation.bind(this);
  }

  _onFocusAndBlur(isFocus) {
    this._handleValidation();
    this.setState({ isFocus });
  }

  _handleValidation() {
    if (this.props.mandatory) {
      if (!this.value) {
        let text = this.props.inputTitle || this.props.placeholder || 'information';
        this.validationStatus = false;
        this.errorMessage = text.toLowerCase() + ' harus diisi';
      } else {
        this.validationStatus = true
        this.errorMessage = ''
      }
    }

    if(this.props.onChangeValue){
      this.props.onChangeValue(this.props.id, this.value, this.validationStatus, this.errorMessage)
    }
  }

  setOpen(open) {
    this.setState({
      open
    });

  }

  setValue(value) {
    this.value = value.value
  }

  setItems(callback) {
    this.setState(state => ({
      items: callback(state.items)
    }));
  }

  render() {
    const { inputTitle, background, textColor, placeholder } = this.props;
    const { open, items, } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.inputTitle}>{inputTitle}</Text>
          {this.errorMessage && <Text style={styles.errorMessage}>{this.errorMessage}</Text>}
        </View>
        <DropDownPicker
          placeholder={placeholder}
          open={open}
          value={this.value}
          items={items}
          setOpen={this.setOpen}
          onSelectItem={this.setValue}
          setItems={this.setItems}
          style={styles.inputTextContainer(this.state.isFocus, textColor)}
          dropDownContainerStyle={styles.inputTextContainer(this.state.isFocus, textColor)}
          onOpen={()=>this._onFocusAndBlur(true)}
          onClose={()=>this._onFocusAndBlur(false)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, marginVertical: verticalScale(8), },
  inputTitle: {
    flex: 1,
    marginBottom: 8,
    fontSize: moderateScale(16),
    color: COLOR.BLUISH_GREY,
    fontFamily: Font.NunitoRegular
  },
  errorMessage: {
    marginBottom: 8,
    fontSize: moderateScale(12),
    color: COLOR.WATERMELON,
    fontFamily: Font.NunitoMedium,
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'right'
  },
  inputTextContainer:
    (isFocus, textColor) => ({
      color: textColor || COLOR.BLACK,
      padding: 12,
      fontSize: moderateScale(16),
      fontFamily: Font.NunitoRegular,
      borderWidth: 1,
      borderColor: isFocus ? COLOR.BLUE_PRIMER : COLOR.GREEN_WHITE,
      borderRadius: 8,
    })
})

export default InputPickerBasic;
