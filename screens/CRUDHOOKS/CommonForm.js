import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function CommonForm({onSubmit, initialValues}) {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Title</Text>
      <TextInput
        value={title}
        style={styles.input}
        onChangeText={text => setTitle(text)}
        underlineColorAndroid={'rgba(0,0,0,0)'}
      />
      <Text style={styles.textTitle}>Blog Post</Text>
      <TextInput
        value={content}
        style={styles.input}
        onChangeText={text => setContent(text)}
        underlineColorAndroid={'rgba(0,0,0,0)'}
      />
      <View style={styles.btnContainer}>
        <Button title="submit" onPress={() => onSubmit(title, content)} />
      </View>
    </View>
  );
}

CommonForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    fontSize: 18,
    padding: 5,
    margin: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
  textTitle: {
    fontSize: 18,
  },
  btn: {
    width: '80%',
    paddingHorizontal: 20,
    marginTop: 30,
  },
});
