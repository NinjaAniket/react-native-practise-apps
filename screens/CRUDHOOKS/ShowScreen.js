import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Context} from '../../src/context/TestContext';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function ShowScreen({navigation}) {
  const {state} = useContext(Context);

  const postId = navigation.getParam('id');
  const blog = state.find(item => item.id == postId);

  return (
    <View>
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.content}>{blog.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EditScreen', {
            id: navigation.getParam('id'),
          })
        }>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  content: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
});
