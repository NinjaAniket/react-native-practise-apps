import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Context} from '../../src/context/TestContext';
import CommonForm from './CommonForm';

export default function EditScreen({navigation}) {
  const {state, editBlog} = useContext(Context);

  const editId = navigation.getParam('id');
  const blogItem = state.find(item => item.id === editId);

  return (
    <CommonForm
      initialValues={{title: blogItem.title, content: blogItem.content}}
      onSubmit={(title, content) =>
        editBlog(editId, title, content, () => navigation.navigate('Home'))
      }
    />
  );
}
