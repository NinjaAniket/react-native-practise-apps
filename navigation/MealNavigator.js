import React from 'react';

import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import CategoryMeal from '../screens/CategoryMeal';
import Categories from '../screens/Categories';
import MealDetail from '../screens/MealDetail';
import Amazon from '../screens/Amazon';
import Favourite from '../screens/Favourite';
import RestIcon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import Digikit from '../screens/Digikit';
import FakeMusicPlayer from '../screens/fake-music-player';
import Nomezer from '../screens/Nomezer';
import Button from '../screens/Button';
import Home from '../screens/CRUDHOOKS/Home';
import ShowScreen from '../screens/CRUDHOOKS/ShowScreen';
import CreateScreen from '../screens/CRUDHOOKS/CreateScreen';
import EditScreen from '../screens/CRUDHOOKS/EditScreen';

import NewCreateScreen from '../screens/CRUDHOOKS/test/NewCreateScreen';
import NewHome from '../screens/CRUDHOOKS/test/NewHome';

const defaultStackNav = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? '#fff' : '',
  },
  headerTitle: 'Screen',
};
const MealsNavigator = createStackNavigator(
  {
    Categories: Categories,
    CategoryMeal: CategoryMeal,
    MealDetail: MealDetail,
    Favourite: Favourite,
    FakeMusicPlayer: FakeMusicPlayer,
    Nomezer: Nomezer,
    ShowScreen: ShowScreen,
    CreateScreen: CreateScreen,
    EditScreen: EditScreen,
    Button: Button,
    NewCreateScreen: NewCreateScreen,
    Home: Home,
    NewHome: NewHome,
    Amazon: {
      screen: Amazon,
      navigationOptions: {
        headerShown: false,
      },
      Digikit: {
        screen: Digikit,
      },
    },
  },
  {
    initialRouteName: 'NewHome',
  },
);

const FavNavigator = createStackNavigator(
  {
    Favourite: Favourite,

    MealDetail: MealDetail,
  },
  {
    defaultNavigationOptions: defaultStackNav,
  },
);
const tabConfig = {
  MealsNavigator: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarIcon: tabinfo => {
        return (
          <RestIcon name="ios-restaurant" size={25} color={tabinfo.tintColor} />
        );
      },
      tabBarColor: 'orange',
    },
  },

  Favourite: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favourites',
      tabBarIcon: tabinfo => {
        return <RestIcon name="ios-star" size={25} color={tabinfo.tintColor} />;
      },
      tabBarColor: 'green',
    },
  },
};

const MealTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabConfig, {
        activeColor: 'red',
        shifting: true,
      })
    : createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          activeTintColor: 'red',
        },
      });

export default createAppContainer(MealTabNavigator);
