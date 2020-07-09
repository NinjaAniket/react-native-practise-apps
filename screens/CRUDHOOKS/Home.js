import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../../src/context/TestContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

export default function Home({navigation}) {
  const {state, addBlog, deleteBlog} = useContext(Context);

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ShowScreen', {
                  id: item.id,
                })
              }>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 30,
                  paddingVertical: 30,
                  borderBottomWidth: 1,
                }}>
                <Text style={styles.title}>{item.title}</Text>

                <TouchableOpacity onPress={() => deleteBlog(item.id)}>
                  <MaterialIcons name="delete" size={25} color="red" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
}

Home.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
        <Octicons
          name="plus"
          size={25}
          color="#000"
          style={{paddingHorizontal: 20}}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});
