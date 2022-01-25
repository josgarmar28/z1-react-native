import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome, Login, SignUp, Tabs } from 'containers';
import Details from 'containers/Main/Details';
import {
  // modalStackScreenOptions,
  generalStackScreenOptions,
} from './constants';
import { Props } from './types';

const { Navigator, Group, Screen } = createNativeStackNavigator();

const AppNavigator: FC<Props> = () => {
  const ready = true;
  return (
    <Navigator screenOptions={generalStackScreenOptions}>
      {ready ? (
        <Group screenOptions={generalStackScreenOptions}>
          <Screen name="Tabs" component={Tabs} />
          <Screen name="Details" component={Details} />
        </Group>
      ) : (
        <Group screenOptions={generalStackScreenOptions}>
          <Screen name="Welcome" component={Welcome} />
          <Screen name="SignUp" component={SignUp} />
          <Screen name="Login" component={Login} />
        </Group>
      )}
      {/* <Group screenOptions={modalStackScreenOptions}>
        <Screen name="Modal" component={Modal} />
      </Group> */}
    </Navigator>
  );
};

export default AppNavigator;
