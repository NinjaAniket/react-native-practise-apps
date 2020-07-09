import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Base, Default, Info, Danger, Success} from './styles.js';

export default class Button extends React.Component {
  getTheme() {
    const {info, danger, success} = this.props;
    if (info) return Info;
    if (danger) return Danger;
    if (success) return Success;
    return Default;
  }
  render() {
    const theme = this.getTheme();
    const {children, onPress, style, rounded} = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[Base.main, theme.main, rounded ? Base.rounded : null, style]}>
        <Text style={[Base.label, theme.label]}>{children}hey</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
