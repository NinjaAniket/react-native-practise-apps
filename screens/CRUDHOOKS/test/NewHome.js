import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import {Context} from '../../../src/context/BlogContext';

export default function NewHome() {
  const {state} = useContext(Context);
  console.log(state);
  return (
    <FlatList
      data={state}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        console.log(item, 'item');
      }}
    />
  );
}

NewHome.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('NewCreateScreen')}>
        <Octicons name="plus" size={30} style={{paddingHorizontal: 20}} />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({});
