import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {CategoriesData} from '../data/dummy-data';

const Categories = ({navigation}) => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          navigation.navigate('CategoryMeal', {
            categoryId: itemData.item.id,
          })
        }>
        <View
          style={{
            ...styles.container,
            ...{backgroundColor: itemData.item.color},
          }}>
          <Text style={styles.title}>{itemData.item.title}</Text>
          <Text style={styles.title}>AED</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={CategoriesData}
      numColumns={2}
      renderItem={renderGridItem}
    />
  );
};
Categories.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerTintColor: '#000',
};

export default Categories;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#d3cfca',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
    shadowRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
});
