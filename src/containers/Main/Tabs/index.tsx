import React, { FC, memo } from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { TabBarBottom } from './Components';
import { tabStackScreenOptions } from './constants';
import { Alerts, Discover, Feed, Home } from './Screens';

const { Navigator, Screen } = createBottomTabNavigator();

const tabBar = (props: BottomTabBarProps) => <TabBarBottom {...props} />;

const Tabs: FC = () => (
  <Navigator
    tabBar={tabBar}
    initialRouteName="Home"
    screenOptions={tabStackScreenOptions}
  >
    <Screen name="Home" component={Home} />
    <Screen name="Feed" component={Feed} />
    <Screen name="Alerts" component={Alerts} />
    <Screen name="Discover" component={Discover} />
  </Navigator>
);

export default memo(Tabs);
