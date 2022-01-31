import { useContext } from 'react';
import { Dimensions, Platform } from 'react-native';
import { ThemeContext } from 'styled-components/native';

const colors = {
  white: 'white',
  black: 'black',
  red: 'red',
  yellow: 'yellow',
  blue: 'blue',
  transparent: 'rgba(0,0,0,0)',
  grape: '#421B5D',
  dark_purple_cat: '#593C71',
  light_purple_cat: '#C77AC4',
  purple_les: '#60306F',
  yellow_les: '#FDDB6F',
};

const { width, height } = Dimensions.get('window');

export const device = {
  width,
  height,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

const theme = {
  colors,
  device,
};

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext);
