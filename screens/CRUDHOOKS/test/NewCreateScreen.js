import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../../../src/context/BlogContext';

export default function NewCreateScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlog} = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <TouchableOpacity style={styles.btnContainer}>
        <Button
          title="Save"
          onPress={(title, content) => {
            addBlog(title, content);
            navigation.navigate('NewHome');
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    padding: 5,
    margin: 5,
    fontSize: 18,
    borderColor: '#000',
  },
  btnContainer: {
    width: '100%',
    marginTop: 20,
    alignSelf: 'center',
  },
});
