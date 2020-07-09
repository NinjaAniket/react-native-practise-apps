import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function MealList({
  title,
  duration,
  complexity,
  affordability,
  imageUrl,
  navigation,
  mealId,
  onSelectMeal,
}) {
  return (
    <View style={styles.mealList}>
      <TouchableOpacity activeOpacity={0.4} onPress={onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: imageUrl}} style={styles.bgImage}>
              <Text style={styles.title} numberOfLines={2}>
                {title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{duration} minutes</Text>
            <Text>{complexity}</Text>
            <Text> {affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mealList: {
    backgroundColor: '#f5f5f5',
    height: 200,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealHeader: {
    height: '85%',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    textAlign: 'center',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
});
