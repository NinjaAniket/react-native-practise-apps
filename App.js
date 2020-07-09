import React from 'react';
import MealNavigator from './navigation/MealNavigator';
import {Provider} from './src/context/BlogContext';

const App = () => {
  return (
    <Provider>
      <MealNavigator />
    </Provider>
  );
};

export default App;
