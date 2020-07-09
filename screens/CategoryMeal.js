import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {CategoriesData, MEALS} from '../data/dummy-data';
import MealList from './MealList';

const CategoryMeal = ({navigation}) => {
  const categoryId = navigation.getParam('categoryId');

  const displayMeal = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0,
  );
  const renderMeal = itemData => {
    return (
      <MealList
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
        navigation={navigation}
        onSelectMeal={() =>
          navigation.navigate('MealDetail', {
            mealId: itemData.item.id,
          })
        }
      />
    );
  };

  return <FlatList data={displayMeal} renderItem={renderMeal} />;
};

export default CategoryMeal;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
