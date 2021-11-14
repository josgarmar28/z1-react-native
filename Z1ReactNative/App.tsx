import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { Navigator } from './src/navigator/Navigator';
import { HomeScreen } from './src/screens/HomeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  )
}

export default App;