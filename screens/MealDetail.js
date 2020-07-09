import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomerHeaderBtn from '../components/CustomerHeaderBtn';

export default function MealDetail({ingredients, navigation}) {
  const mealId = navigation.getParam('mealId');
  const mealData = MEALS.find(meal => meal.id === mealId);

  return (
    <View>
      <Text>{mealData.title}</Text>
    </View>
  );
}

MealDetail.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const mealData = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: mealData.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomerHeaderBtn}>
        <Item
          title="fav"
          iconName="favorite-border"
          onPress={() => console.log('object')}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});
