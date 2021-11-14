import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';

import { Lesson } from '../interfaces/lessonInterfaces';


export type RootStackParams = {
  HomeScreen: undefined,
  DetailScreen: { lesson: Lesson }
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      //   cardStyle: {
      //     backgroundColor: 'white'
      //   }
      // }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" component={ DetailScreen } />
    </Stack.Navigator>
  );
}