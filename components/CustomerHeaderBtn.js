import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomerHeaderBtn(props) {
  return (
    <HeaderButton {...props} IconComponent={Icon} iconSize={23} color="red" />
  );
}
