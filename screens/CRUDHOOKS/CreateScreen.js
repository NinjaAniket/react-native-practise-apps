import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {Context} from '../../src/context/TestContext';
import CommonForm from './CommonForm';

export default function CreateScreen({navigation}) {
  const {addBlog} = useContext(Context);

  return (
    <CommonForm
      onSubmit={(title, content) =>
        addBlog(title, content, () => navigation.navigate('Home'))
      }
    />
  );
}
